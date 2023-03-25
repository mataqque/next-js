import Slider from 'react-slick';
import banner from '../../../assets/images/home/images/compress-slider-banner-1.webp';
import bannerMobile from '../../../assets/images/home/images/banner-movil.png';
import bannerWeb2 from '../../../assets/images/home/images/banner-web-2.png';
import bannerMobile2 from '../../../assets/images/home/images/banner-movil-2.png';

import { ButtonBase } from '@mui/material';
import { Controlls } from './components/controlls/controlls';
import { IItemSlider, IListSlider } from './components/interface';
import { ContentSlideStyled } from './components/styledcomponents/contentSlice';
import React, { useContext, useEffect } from 'react';
import subject from './stateObserver';
import './sectionheader.scss';
export const ActiveDot = React.createContext('dot');

export const SectionBanner = () => {
	const setActiveDot = useContext(ActiveDot);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		pauseOnFocus: true,
		pauseOnDotsHover: false,
		cssEase: 'linear',
		arrows: false,
		beforeChange: (current: any, next: any) => {
			subject.next(next);
		},
	};
	const listSlider: IItemSlider[] = [
		{
			img: banner,
			imgMobile: bannerMobile,
			alt: 'banner',
		},
		{
			img: bannerWeb2,
			imgMobile: bannerMobile2,
			alt: 'banner',
		},
	];

	return (
		<section className='section-banner mb-10'>
			<div className='absolute circle-blur circle-sky circle-position-left'></div>
			<div className='absolute circle-blur circle-yellow circle-position-right'></div>
			<div className='container'>
				<div className='overflow-hidden rounded-3xl'>
					<Slider {...settings}>
						{listSlider.map((item, index) => {
							return (
								<ContentSlideStyled key={'slider-banner' + index}>
									<picture>
										<source media='(min-width: 600px)' srcSet={item.img} />
										<img src={item.imgMobile} alt={item.alt} />
									</picture>
								</ContentSlideStyled>
							);
						})}
					</Slider>
				</div>
				<Controlls list={listSlider} slider={refSlider} refSlider={refSlider} />
			</div>
		</section>
	);
};
