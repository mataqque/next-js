import styled from 'styled-components';
import { FormContainer } from '../../helpers/common/forms/Form';
import { FormStyled } from '../GlobalComponents/Form/form';
import { InputText } from '../inputs/inputText';
import { formSchema } from '../../helpers/common/forms/constraints/ValidatonSchemas';
import { InputSelect } from '../inputs/inputSelect';
import { InputChecked } from '../inputs/inputChecked';
import politicasPdf from '../../../assets/files/politicas-de-privacidad.pdf';
import terminosycondiciones from '../../../assets/files/terminos-y-condiciones.pdf';
import { ButtonBase } from '../GlobalComponents/buttons/buttonBase';
import { IconMask } from '../inputs/styled/IconDownStyleSelect';
import { useState } from 'react';
import { DatoSuccess } from './dataSuccess';
import { DatoError } from './dataError';
import { LeadService } from '../../Http/LeadService';
import { useLocation, useNavigate } from 'react-router-dom';

export const ModalFormStyled = styled.div`
	position: absolute;
	bottom: 6.5rem;
	right: 0;
	width: 25rem;
	height: max-content;
	background-color: white;
	border-radius: 1rem;
	box-shadow: 0px 0px 18px 14px #0000000f;
	transform-origin: bottom right;
	overflow: hidden;
	transition: all 0.5s ease-in-out;
	@media (max-width: 500px) {
		width: calc(100vw - 3.5rem);
		bottom: 4.5rem;
	}
	.content-form-wpp {
		transition: all 0.5s ease-in-out;
		padding: 2rem 2rem;
		cursor: pointer;
		@media (max-width: 500px) {
			padding: 1.8rem 1.3rem;
		}
	}
	.title,
	.title span {
		text-align: center;
		font-size: 1.26rem;
		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
	}
	.middle {
		@media (max-width: 500px) {
			width: calc(50% - 0.5rem);
		}
	}
	.content-input .input {
		height: 2.5rem;
		font-size: 0.9rem;
		&::placeholder {
			font-size: 0.9rem;
		}
	}
	.btn-submit {
		bottom: 7rem;
		width: 100%;
		height: 2.7rem;
		background-color: var(--primary);
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 20rem;
		color: white;
		padding: 0 1.5rem;
	}
`;

export const ModalForm = (props: any) => {
	const leadService = new LeadService();
	const [step, setStep] = useState(0);
	const navigate = useNavigate();
	const initialValues = {
		search: '',
		fname: '',
		lname: '',
		phone: '',
		email: '',
		salary: '',
		motive: '',
		terms: false,
	};
	const dataProposeBuy = [
		{ value: 'Primera vivienda', label: 'Primera vivienda' },
		{ value: 'Inversión', label: 'Inversión' },
	];
	const data = [
		{ value: '1', label: 'S/ 2500 - S/ 2999' },
		{ value: '2', label: 'S/ 3000 - S/ 3499' },
		{ value: '3', label: 'S/ 3500 - S/ 3999' },
		{ value: '4', label: 'S/ 4000 +' },
	];
	const onSubmit = async (values: any, form: any) => {
		try {
			await leadService.setLeadData(values).save();

			form.resetForm();
			navigate('/gracias/wpp');
		} catch (error) {
			console.error(error);
		} finally {
			form.setSubmitting(false);
		}
	};
	return (
		<ModalFormStyled className='modal_form__content'>
			{step === 0 ? (
				<div className='content-form-wpp'>
					<div className='_form'>
						<h3 className='title mb-4'>
							<span className=''>Compártenos tus datos y te </span>
							<br></br>
							<span className='text-third'>contactaremos por Whatasapp</span>
						</h3>
						<FormContainer initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
							{(form: any) => {
								console.log(form.errors);
								const { handleSubmit, isSubmitting } = form;
								return (
									<FormStyled onSubmit={handleSubmit}>
										<div className='flex flex-wrap content-inputs-form '>
											<div className='order mb-4 w-full middle mobile:mr-4'>
												<InputText name='fname' placeholder='Nombre*' form={form}></InputText>
											</div>
											<div className='order mb-4 w-full middle'>
												<InputText name='lname' placeholder='Apellido*' form={form}></InputText>
											</div>
											<div className='order mb-4 w-full'>
												<InputText name='phone' placeholder='Celular' form={form}></InputText>
											</div>
											<div className='order mb-4 w-full'>
												<InputText name='email' placeholder='Email' form={form}></InputText>
											</div>
											<div className='order mb-4 w-full'>
												<InputSelect name='salary' data={data} form={form} label='Cuanto es lo que podra invertir al mes?'></InputSelect>
											</div>
											<div className='order mb-4 w-full'>
												<InputSelect name='motive' data={dataProposeBuy} form={form} label='Propósito de compra?'></InputSelect>
											</div>
										</div>
										<div className='terms flex  md:justify-end  flex-col items-center '>
											<div className='flex items-center  mb-6'>
												<div className='mr-2'>
													<InputChecked form={form} name='terms' color='#2ACCC8'></InputChecked>
												</div>
												<p className='md:text-1xl md:text-0/8xl sm:text-0/8xl mobile:text-0/7xl  text-gray-300'>
													Acepto los{' '}
													<a href={terminosycondiciones} className='md:text-1xl md:text-0/8xl sm:text-0/8xl mobile:text-0/7xl underline' target='_blank'>
														términos y condiciones
													</a>
													. Autorizo el tratamiento de mis datos según la 
													<a href={politicasPdf} target='_blank' className='underline md:text-0/8xl sm:text-0/8xl mobile:text-0/7xl mb-6 text-gray-300'>
														política de privacidad
													</a>
												</p>
											</div>
											<button type='submit' disabled={isSubmitting} className='btn-submit'>
												<span className='mr-8 text-1/1xl'>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
												<IconMask className='icon-signal-right w-5 h-5 bg-white' />
											</button>
										</div>
									</FormStyled>
								);
							}}
						</FormContainer>
					</div>
				</div>
			) : null}
			{step === 1 ? <DatoSuccess></DatoSuccess> : null}
			{step === 2 ? <DatoError /> : null}
		</ModalFormStyled>
	);
};
