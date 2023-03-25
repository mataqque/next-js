import styled from 'styled-components';

export const ControllsStyled = styled.div`
	padding: 2.8rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 800px) {
		padding: 1.8rem 0;
	}
	.slick-dots {
		display: flex;
		align-items: center;
		justify-content: center;
		.dot {
			width: 8px;
			height: 8px;
			border-radius: 10rem;
			background: #6842ef;
			margin: 0 0.2rem;
			opacity: 0.5;
			transition: 0.3s;
			&.active {
				width: 2rem;
				opacity: 1;
			}
		}
	}
	.counter {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.slick-controlls {
		display: flex;
		.slick-prev,
		.slick-next {
			width: 2.6rem;
			height: 2.6rem;
			border-radius: 10rem;
			background: #6842ef;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: 0.3s;
			div {
				width: 40%;
				height: 40%;
				background: white;
			}
			&.active {
				background: white;
				border: 1px solid #6842ef;
				filter: grayscale(100%);
				opacity: 0.4;
				div {
					background: #6842ef;
				}
			}
		}
	}
`;
