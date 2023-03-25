import { useDispatch } from 'react-redux';
import { closeModal } from '../../UI/GlobalComponents/modal/modalSlice';
import checkIcon from '../../../assets/images/global/icons/check_icon.svg';
import closeIcon from '../../../assets/images/global/icons/btn-close-cosapi.svg';
import backgroundMovil from '../../../assets/images/global/icons/background-modal.png';
import './contactAsesor.scss';

export const ModalContactAsesor = () => {
	const dispatch = useDispatch();
	const close = () => {
		dispatch(closeModal());
	};
	return (
		<div className='content-popup'>
			<div className='btn-close type-popup' onClick={(e: any) => close()}>
				<img src={closeIcon}></img>
			</div>
			<img className='background' src={backgroundMovil}></img>
			<div className='thanks flex flex-col items-center'>
				<img className='icon-check' src={checkIcon}></img>
				<span className='title gothan-bold'>¡Gracias!</span>
				<span className='sub-title '>Dentro de poco un asesor se pondrá en contacto contigo.</span>
			</div>
		</div>
	);
};
