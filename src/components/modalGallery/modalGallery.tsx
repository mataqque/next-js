import { useEffect, useState } from 'react';
import { IconMask } from '../UI/inputs/styled/IconDownStyleSelect';
import './modal.scss';
import observeGallery, { IitemGalleryObserver } from './observer';
const image = require('../../assets/images/home/images/interiores/COCINA_COMEDOR_FINAL.webp');
export const ModalGallery = (props: any) => {
	const [modalStatus, setModalStatus] = useState('');
	const [groupImages, setGroupImages] = useState<IitemGalleryObserver[]>([]);
	const closeModal = () => {
		setModalStatus('hidden');
	};
	useEffect(() => {
		const observation = observeGallery.subscribe((data: IitemGalleryObserver) => {});
		return () => {
			observation.unsubscribe();
		};
	}, []);
	return (
		<div className={`modal-gallery ${modalStatus}`}>
			<div className='controlls'>
				<div className='btn-close'>
					<IconMask
						className='mask icon-close c-pointer'
						onClick={() => {
							closeModal();
						}}
					/>
				</div>
			</div>
			<div className='content-image'>
				{groupImages.map((item: IitemGalleryObserver, index: number) => {
					return <img src={item.image} alt='prove' className='img-gallery' />;
				})}
			</div>
		</div>
	);
};
