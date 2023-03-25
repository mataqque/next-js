import { useEffect, useState } from 'react';
import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { ContainerNav } from './navbar.styled';
import { changeTheme } from '../../theme/theme';
import { useDispatch } from 'react-redux';
import { ButtonBase } from '../../GlobalComponents/buttons/buttonBase';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';
import { ImageBrand } from '../../icons/imageBrand';
import { scroller } from 'react-scroll';
import MediaQuery from 'react-responsive';

interface IPropsChangeActive {
	(value: string, firstValue: string, secondValue: string): string;
}
export default function Navbar() {
	const [theme, setTheme] = useState('dark');
	const [open, setOpen] = useState('');
	const dispatch = useDispatch();

	const openNavbar = () => {
		let newValue = changeActive(open, 'open', 'close');
		setOpen(newValue);
	};
	const changeActive: IPropsChangeActive = (value, firstValue, secondValue): string => {
		let newStatus;
		switch (value) {
			case '':
				newStatus = 'open';
				break;
			case firstValue:
				newStatus = 'close';
				break;
			case secondValue:
				newStatus = 'open';
				break;
			default:
				newStatus = '';
		}
		return newStatus;
	};

	return (
		<ContainerNav className={open}>
			<Link to='/' className='brand bold h-full flex items-center justify-center'>
				<div className='sm:w-20 sm:h-20 mobile:w-14 mobile:h-14'>
					<ImageBrand className='bg-secondary' sizeH='100%' sizeW='100%'></ImageBrand>
				</div>
			</Link>
			<MediaQuery minWidth={1101}>
				<ContentLinks openNavbar={openNavbar}></ContentLinks>
			</MediaQuery>
			<MediaQuery maxWidth={1100}>
				<div className={`contain-links-modal ${open}`}>
					<Link to='/' className='brand bold h-full '>
						<div className='sm:w-20 sm:h-20 mobile:w-20 mobile:h-20'>
							<ImageBrand className='bg-secondary' sizeH='100%' sizeW='100%'></ImageBrand>
						</div>
					</Link>
					<ContentLinks openNavbar={openNavbar}></ContentLinks>
				</div>
				<div className='flex items-center justify-center items-center h-full pl-4 z-10' onClick={() => openNavbar()}>
					<div className={`btn-close ${open}`}>
						<div className='line line-1'></div>
						<div className='line line-2'></div>
					</div>
				</div>
			</MediaQuery>
		</ContainerNav>
	);
}

interface IPropsNavbarLinkItem {
	to: string;
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function NavbarLink(props: IPropsNavbarLinkItem) {
	const { to, className } = props;
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'link active ' + (className ? className : '') : 'link ' + (className ? className : ''))}>
			{props.children}
		</NavLink>
	);
}

const ContentLinks = ({ openNavbar }: { openNavbar: () => void }) => {
	return (
		<>
			<div className='content-links flex'>
				<NavbarLink to={'/'}>
					<div className='label' onClick={() => openNavbar()}>
						Inicio
					</div>
				</NavbarLink>
				<NavbarLink to={'/departamentos'}>
					<div className='label' onClick={() => openNavbar()}>
						Departamentos
					</div>
				</NavbarLink>
				<NavbarLink to={'/areas-sociales'}>
					<div className='label' onClick={() => openNavbar()}>
						Áreas sociales
					</div>
				</NavbarLink>
				<NavbarLink to={'/contactanos'}>
					<div className='label' onClick={() => openNavbar()}>
						Contáctanos
					</div>
				</NavbarLink>
				<a href={require('../../../../assets/files/Brochure-momen.pdf')} download={true} className='flex link link-brochure'>
					<IconMask className='icon-brochure  bg-secondary mr-2'></IconMask>
					<div className='label' onClick={() => openNavbar()}>
						Brochure
					</div>
				</a>
			</div>
			<div className='flex justify-center items-center '>
				<a href='https://www.instagram.com/cosapi.inmobiliaria/' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer'>
					<IconMask className='icon-instagram bg-secondary h-6 w-6'></IconMask>
				</a>
				<a href='https://www.facebook.com/cosapiinmobiliariaoficial/' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer'>
					<IconMask className='icon-facebook bg-secondary h-5 w-6'></IconMask>
				</a>
				<a href='https://www.youtube.com/channel/UCfr9B6LMPgZDI6LVSsIA-yQ' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer '>
					<IconMask className='icon-youtube bg-secondary h-6 w-6'></IconMask>
				</a>
				<a href='https://pe.linkedin.com/company/cosapiinmobiliaria' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer '>
					<IconMask className='icon-linkedin bg-secondary h-5 w-6'></IconMask>
				</a>
				<a href='https://www.tiktok.com/@cosapi.inmobiliaria' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer '>
					<IconMask className='icon-tiktok bg-secondary h-5 w-6'></IconMask>
				</a>
			</div>
		</>
	);
};
