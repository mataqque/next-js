import { Loader } from '../loaderPage/loader';
import lottieWhatsapp from '../../../assets/images/global/icons/whatsapp.json';
import './whatsapp.scss';
import { ModalForm } from '../modalLead/modalForm';
import { useState } from 'react';
export const Whatsapp = () => {
	const [active, setActive] = useState(false);
	const properties = {
		class: 'svg-whatsapp',
		icon: lottieWhatsapp,
		positionCss: 'fixed',
		witdh: '10rem',
		height: '10rem',
		zIndex: 30,
	};
	const ToggleModal = () => {
		setActive(!active);
	};
	return (
		// @ts-ignore
		<div className={`content-whatsapp ${active == true ? 'active' : ''}`}>
			<div
				className='content-loader'
				onClick={() => {
					ToggleModal();
				}}
			>
				{/* @ts-ignore */}
				<Loader properties={properties} active={true}></Loader>
			</div>
			<ModalForm />
		</div>
	);
};
