import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { callbackDelay } from '../../../helpers/helpers';

export const MessageDataStyled = styled.div`
	--line-width: 5em;
	--line-width-success: 5px;
	--colorPrimary: #47d55e;
	--size: 6rem;
	padding: 6rem 2rem;
	background-color: white;
	border-radius: 1rem;
	@media (max-width: 500px) {
		padding: 4rem 2rem;
	}
	.title {
		font-size: 1.3rem;
		text-align: center;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.5rem;
	}
	.paragraph {
		text-align: center;
		font-size: 0.9rem;
	}
	.success {
		display: inline-block;
		position: relative;
		border: var(--line-width) solid var(--colorPrimary);
		border-radius: 50%;
		font-size: 1px;
		width: var(--size);
		height: var(--size);
		color: #8fcf8f;
		// transform: rotate(40deg);
		margin-bottom: 1rem;
		background-color: var(--colorPrimary);
		display: flex;
		align-items: center;
		justify-content: center;
		.check {
			position: relative;
			left: 0.3rem;
		}
		.content-check {
			width: 3rem;
			height: 3rem;
			position: relative;
			transform: rotate(40deg);
			.line-1,
			.line-2 {
				background-color: white;
				position: absolute;
				bottom: 0;
				border-radius: 10rem;
			}
			.line-1 {
				background-color: white;
				width: 0;
				height: var(--line-width-success);
				transform: rotate(180deg);
			}
			.line-2 {
				width: var(--line-width-success);
				height: 0;
				left: 50%;
			}
		}
		animation: active 0.3s linear forwards;
		&.active {
			.line-1 {
				animation: line-1 0.3s 0.3s linear forwards;
			}
			.line-2 {
				animation: line-2 0.3s 0.6s linear forwards;
			}
		}
		@keyframes active {
			0% {
				transform: scale(0.8);
				opacity: 0;
			}
			100% {
				opacity: 1;
				transform: scale(1);
			}
		}
		@keyframes line-1 {
			0% {
				width: 0;
			}
			100% {
				width: calc(50% + var(--line-width-success));
			}
		}
		@keyframes line-2 {
			0% {
				height: 0;
			}
			100% {
				height: 100%;
			}
		}
		&--big {
			font-size: 1.5px;
		}
	}

	.fail {
		display: inline-block;
		position: relative;
		border: var(--line-width) solid #f47a9f;
		border-radius: 50%;
		font-size: 1px;
		width: var(--size);
		height: var(--size);
		color: #e27d7a;
		margin-bottom: 1rem;
		background-color: #f47a9f;
		&::before,
		&::after {
			content: '';
			width: var(--line-width);
			height: 34em;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -17em;
			margin-left: -2em;
			background-color: white;
			border-radius: 3px;
		}

		&::before {
			transform: rotate(45deg);
		}

		&::after {
			transform: rotate(-45deg);
		}

		&--big {
			font-size: 1.5px;
		}
	}
`;
export const DatoSuccess = () => {
	const [animation, setAnimation] = useState('');
	useEffect(() => {
		callbackDelay(() => setAnimation('active'), 500);
	}, []);
	return (
		<MessageDataStyled className='message-success flex items-center justify-center flex-col'>
			<div className={'success ' + animation}>
				<div className='check'>
					<div className='content-check'>
						<div className='line-1'></div>
						<div className='line-2'></div>
					</div>
				</div>
			</div>
			<span className='title flex items-center'>Datos Enviados</span>
			<p className='paragraph'>En breve a asesor se comunicará con usted para mas información</p>
		</MessageDataStyled>
	);
};
