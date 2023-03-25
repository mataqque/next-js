import axios from "axios"
import { WelcomeMail } from "../../infrastructure/mail/WelcomeMail";
import { MailClient } from "./MailClient";
import { SperantService } from "./SperantService";

export class LeadService {
    #sperantService = new SperantService()
    #mail = new MailClient()
    #lead = {}
    #client = {}
    #project = {}
    #utmData = {utm_source: "Orgánico"}

    constructor(){

    }

    /**
     * Datos del lead / referente
     * @param {Object} data 
     */
    setLeadData(data){
        this.#lead = data
        return this
    }

    /**
     * 
     * @param {*} environment 
     */
    setProject(project){
        this.#project = project
        this.#sperantService.environment(project.environment)
        return this
    }

    async save(){

        let payload = {
            fname: this.#lead.fname,
            lname: this.#lead.lname,
            email: this.#lead.email,
            phone: this.#lead.phone,
            project_id: 25,
            interest_type_id: this.#lead.interest_type_id || 4,
            document_type_id: 1,
            // document: this.#lead.dni,
            observation: [
                this.#lead.dorms && `Dormitorios: ${this.#lead.dorms}`,
                this.#lead.motive && `Motivo: ${this.#lead.motive}`,
                this.#lead.salary && `Monto a invertir : ${this.#lead.salary}`
            ].filter(Boolean).join(", "),
            input_channel_id: 4,
            source_id: 95
        }

        new URLSearchParams(localStorage.getItem("url_query")).forEach((v, k) => {
            /utm_/.test(k) && (this.#utmData[`${k.toLowerCase()}`] = v)
        })

        Object.assign(payload, this.#utmData)

        this.saveToSheets()
        await this.sendMailToInterested()

        const {data: {data: client}} = await this.#sperantService.createClient(payload)
        

        // const {data: {data: user}} = await this.#sperantService.users(client.attributes.last_agent_assigned)
        this.#client = client

        // user.attributes.phone = user.attributes.phone.replace(/\s/g, '')
        //                             .replace(/\+-/g, '')
        //                             .replace(/\(/g, '')
        //                             .replace(/\)/g, '')
        //                             .replace(/\+51/g, '').split("/")[0]

        // this.#client.last_agent_assigned = user.attributes

        return this.#client
    }

    /**
     * 
     * @returns 
     */
    saveToSheets = _ => {
        const date = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })
        let sheet = "Cosapi Inmobiliaria"
        let row = [date, this.#lead.fname, this.#lead.lname, this.#lead.telephone, this.#lead.email, this.#lead.motive, "", "Momen"]

        row = row.concat([this.#utmData.utm_source, this.#utmData.utm_medium, this.#utmData.utm_campaign, this.#utmData.utm_content, this.#utmData.utm_term])

        axios.post("https://cors.formulaperu.com/https://script.google.com/macros/s/AKfycbws7GCpc1eEN5ScQ_IisUkLEwKQHvY_XCe5_KEbXA3ytUWVtA/exec", {
            "ss_id": "1CfCxJdJJDWvfmixvX7AdowGGq_LfiBuP823m4Ryj3YA",
            "range": `${sheet}!A:XX`,
            "values": [row]
        })
    }

    sendMailToInterested() {
		return this.#mail
			.from(`Momen <no-reply@momen.pe>`)
			.to(this.#lead.email)
			.subject('Te damos la bienvenida')
			.html(WelcomeMail(this.#lead))
			.send()
	}
}