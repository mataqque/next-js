import styled from 'styled-components';
import { checkableBoolProps } from '../../helpers/common/forms/Form';
import { generateId } from '../../helpers/helpers';
import { IconMask } from './styled/IconDownStyleSelect';
import { useRef } from 'react';
import { IInputCheckedProps } from './interface';
import check from './icons/icon-check.svg?url';
const InputCheckedStyled = styled.div`
	input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
		&:checked + .input-checked {
			background-color: ${props => props.color || '#2f71ff'};
			border-color: ${props => props.color || '#2f71ff'};
			div,
			i {
				transform: rotate(0deg);
				background-color: white;
			}
		}

		&.--invalid + .input-checked{
			border-color: red !important;
			& ~ .label-accept {
				border-color: red !important;
			}
			& ~ .input {
				border-color: red !important;
			}
		}
	}
	.input-checked {
		width: 16px;
		height: 16px;
		border-color: #bbbbbb;
		border-width: 1.5px;
		border-style: solid;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		transition: 0.3s;
		div,
		i {
			transition: 0.3s;
			transform: rotate(40deg);
			width: 100%;
			height: 100%;
			background-color: transparent;
		}
	}
`;

export const InputChecked = (props: IInputCheckedProps) => {
	const { name, form, color, className } = props;
	const checkeable = useRef<HTMLInputElement>(null);
	const inputID = generateId({ type: 'string' }).toString();
	return (
		<div className={`${className ? className : ''}`}>
			<InputCheckedStyled className={`content-sub-input`} color={color}>
				<input type='checkbox' id={inputID} {...(form ? checkableBoolProps(name, ``, form) : {})} ref={checkeable} />
				<label className='input-checked' htmlFor={inputID}>
					<IconMask style={{ WebkitMaskImage: `url(${check})` }} />
				</label>
			</InputCheckedStyled>
		</div>
	);
};
