import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
interface IButtonBase {
	typeSize?: 'sm' | 'md' | 'lg';
	borderRadius?: string;
}

export const ButtonBase = styled.button`
	min-width: max-content;
	border-radius: ${(props: IButtonBase) => {
		return props.borderRadius ? props.borderRadius : '7px';
	}};
	border-width: 1px;
	border-style: solid;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ButtonOutline = styled(ButtonBase)`
	background-color: transparent;
	transition: 0.5s;
`;

export const BtnIcon = styled.button`
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	transition: 0.5s;
	border-radius: 7px;
	border-width: 1px;
	border-style: solid;
`;

export const BtnTag = styled.button`
	border-radius: 100px;
	height: max-content;
	background-color: ${props => props.color};
	color: white;
	width: max-content;
	padding: 2px 10px;
`;
