import Image from 'next/image';

export default function ComponentHome() {
	return (
		<div className=''>
			<Image src={require('../../../assets/images/home/icons/epiqe.svg')} alt='brand image'></Image>
		</div>
	);
}
