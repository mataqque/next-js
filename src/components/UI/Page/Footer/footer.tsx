import asei from '../../../../assets/images/global/icons/asei.png';
import dci from '../../../../assets/images/global/icons/dci-white.png';
import adiperu from '../../../../assets/images/global/icons/adi-peru.svg?url';
import bestplace from '../../../../assets/images/global/icons/best-place.svg?url';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';
import { ImageBrand } from '../../icons/imageBrand';
import MediaQuery from 'react-responsive';
import politicasPdf from '../../../../assets/files/politicas-de-privacidad.pdf';
import terminosycondiciones from '../../../../assets/files/terminos-y-condiciones.pdf';
import './footer.scss';
import { Link } from 'react-router-dom';
export default function Footer() {
	return (
		<footer className='bg-black w-full flex mobile:pt-6'>
			<div className='container mx-auto'>
				<div className='flex align-items py-16 md:flex-row flex-col md:justify-between items-center mobile:py-8 mobile:items-start'>
					<ImageBrand className='bg-white md:mb-0 mb-8 icon-brand' sizeH='5rem' sizeW='150px'></ImageBrand>
					<div className='content-information flex items-center sm:flex-row flex-col mobile:items-start'>
						<div className='item-inf flex flex-col sm:mr-16 sm:mb-0 mb-4 mobile:mb-6'>
							<span className='text-gray-10 Poppins-Light text-0/9xl sm:text-left text-center mobile:text-left mb-2'>Whatsapp</span>
							<a href='tel:+51 966 874 541' className='text-white lg:text-1/4xl sm:text-1xl mobile:text-1/1xl Poppins-Light sm:text-left text-center'>
								+51 966 874 541
							</a>
						</div>
						<div className='item-inf flex flex-col sm:mr-16 sm:mb-0 mb-4 mobile:mb-6'>
							<span className='text-gray-10 Poppins-Light text-0/9xl sm:text-left text-center mobile:text-left mb-2'>Mail</span>
							<a href='mailto:Comercial@momen.pe' className='text-white lg:text-1/4xl sm:text-1xl  mobile:text-1/1xl Poppins-Light sm:text-left text-center'>
								comercial@momen.pe
							</a>
						</div>
						<div className='item-inf flex flex-col'>
							<span className='text-gray-10 Poppins-Light text-0/9xl sm:text-left text-center mobile:text-left mb-2'>Ubicación</span>
							<a href='https://goo.gl/maps/6uaDcfuuGmtxm4p39' target='_blank' className='text-white  mobile:text-1/1xl lg:text-1/4xl sm:text-1xl Poppins-Light sm:text-left text-center'>
								Av. Aguarico 1251, Breña
							</a>
						</div>
					</div>
				</div>
				<div className='relations'>
					<div className='border-y border-y-gray-10 flex items-center md:flex-row flex-col mobile:border-b-0'>
						<MediaQuery minWidth={500}>
							<Socios></Socios>
						</MediaQuery>
						<MediaQuery maxWidth={499}>
							<Links></Links>
						</MediaQuery>
						<div className='md:border-r md:border-r-gray-10 mobile:border-t mobile:border-t-gray-10 mobile:w-full mobile:items-center mobile:pt-4 flex md:h-40 flex-col justify-center md:px-20 sm:px-10  mobile:border-b mobile:border-b-gray-10 mobile:pb-8 mobile:pt-8'>
							<span className='text-white text-0/9xl text-gray-10 mb-3'>Certificado</span>
							<a href='https://www.bestplacetolive.com.pe/' target='_blank' className='h-10 mobile:h-8'>
								<img src={bestplace} alt='asei' className='h-full' />
							</a>
						</div>
						<MediaQuery maxWidth={499}>
							<Socios></Socios>
						</MediaQuery>
						<MediaQuery minWidth={500}>
							<Links></Links>
						</MediaQuery>
					</div>
				</div>
				<div className='mobile:py-0 justify-between flex md:flex-row flex-col sm:items-center content-buttons-links py-8'>
					<div className='flex sm:flex-row flex-col'>
						<Link
							to='/libro-de-reclamaciones'
							className='mobile:border-y mobile:border-y-gray-10 text-gray-10 underline mr-4 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 flex items-center mobile:mr-0 mobile:py-6 mobile:text-0/8xl mobile:mb-0'
						>
							<IconMask className='w-14 h-10 icon-complaintment bg-white mr-2 bg-gray-10'></IconMask>
							Libro de reclamaciones
						</Link>
						<MediaQuery maxWidth={499}>
							<div className='flex mobile:py-9 items-center'>
								<a
									href={terminosycondiciones}
									target='_blank'
									className='underline text-gray-10 mr-4 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 flex items-center'
								>
									Términos y condiciones
								</a>
								<a
									href={politicasPdf}
									target='_blank'
									className='underline text-gray-10 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 flex items-center'
								>
									Politicas de privacidad de datos
								</a>
							</div>
						</MediaQuery>
						<MediaQuery minWidth={500}>
							<a
								href={terminosycondiciones}
								target='_blank'
								className='underline text-gray-10 mr-4 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 flex items-center'
							>
								Términos y condiciones
							</a>
							<a href={politicasPdf} target='_blank' className='underline text-gray-10 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 flex items-center'>
								Politicas de privacidad de datos
							</a>
						</MediaQuery>
					</div>
					<span className=' text-gray-10 md:text-0/8xl sm:text-0/8xl text-0/7xl sm:text-left text-center sm:mb-0 mb-2 rights'>
						© 2023 Proyecto Momen. Todos los derechos reservados, Creado por 
						<a href='https://www.formulaperu.com/' target='_blank' className='md:text-0/8xl sm:text-0/8xl text-0/7xl'>
							Fórmula
						</a>{' '}
						Agencia de Marketing
					</span>
				</div>
			</div>
		</footer>
	);
}

const Links = () => {
	return (
		<div className=' flex flex-row md:h-40 h-full md:py-0 py-10 px-8 items-center mobile:py-8'>
			<a
				href='https://www.instagram.com/cosapi.inmobiliaria/'
				target='_blank'
				className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-5'
			>
				<IconMask className='icon-instagram bg-third h-4 w-4'></IconMask>
			</a>
			<a
				href='https://www.facebook.com/cosapiinmobiliariaoficial/'
				target='_blank'
				className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-5'
			>
				<IconMask className='icon-facebook bg-third h-4 w-4'></IconMask>
			</a>
			<a
				href='https://www.youtube.com/channel/UCfr9B6LMPgZDI6LVSsIA-yQ'
				target='_blank'
				className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-5'
			>
				<IconMask className='icon-youtube bg-third h-4 w-4'></IconMask>
			</a>
			<a
				href='https://pe.linkedin.com/company/cosapiinmobiliaria'
				target='_blank'
				className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-5'
			>
				<IconMask className='icon-linkedin bg-third h-4 w-4'></IconMask>
			</a>
			<a href='https://www.tiktok.com/@cosapi.inmobiliaria' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-5'>
				<IconMask className='icon-tiktok bg-third h-4 w-4'></IconMask>
			</a>
		</div>
	);
};

const Socios = () => {
	return (
		<div className='md:border-r md:border-r-gray-10 flex md:h-40 md:py-2 py-8 mobile:py-8 sm:pr-16 flex items-center sm:flex-row mobile:flex-wrap mobile:w-80'>
			<a href='https://asei.com.pe/' target='_blank' className='md:h-10 sm:mr-10 flex items-center sm:mb-0 mb-6 mobile:mb-3'>
				<img src={asei} alt='asei' className='md:h-full h-11 mobile:h-8 mobile:mr-4 t-10 relative' />
			</a>
			<a href='https://dci.pe/' target='_blank' className='md:h-14 sm:mr-10 flex items-center sm:mb-0 mb-6 mobile:mb-3'>
				<img src={dci} alt='dci' className='md:h-full h-14 mobile:h-12' />
			</a>
			<a href='https://adiperu.pe/' target='_blank' className='h-10 flex items-center mobile:m-auto'>
				<img src={adiperu} alt='adi peru' className='md:h-full mobile:h-9' />
			</a>
		</div>
	);
};
