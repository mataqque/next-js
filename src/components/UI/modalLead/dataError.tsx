import { MessageDataStyled } from './dataSuccess';

export const DatoError = () => {
	return (
		<MessageDataStyled className='flex items-center justify-center flex-col'>
			<div className='fail'></div>
			<span className='title flex items-center'>Error</span>
			<p className='paragraph'>¡Ups, tuvimos un error! Vuelve a intentarlo más tarde</p>
		</MessageDataStyled>
	);
};
