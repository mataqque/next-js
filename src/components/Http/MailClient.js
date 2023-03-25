import axios from "axios";

export class MailClient {
    constructor() {
        this.payload = new FormData()
        this.mailgun = axios.create({
            baseURL: "https://api.mailgun.net/v3/mg.formulaperu.com",
            auth: {
                username: 'api',
                password: 'key-2f8526fda8b88fce4bc2fd3f1858cca7'
            }
        })
    }

    from(from) {
        this.payload.append("from", from)
        return this
    }

    to(to) {
        this.payload.append("to", to)
        return this
    }

    subject(subject) {
        this.payload.append("subject", subject)
        return this
    }

    html(html) {
        this.payload.append("html", html)
        return this
    }

    attachment(attachment) {
        this.payload.append("attachment", attachment)
        return this
    }

    send() {
        return this.mailgun.post('messages', this.payload)
    }
}