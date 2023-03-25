import { ButtonBase } from '../../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { IItemSlider, IListSlider } from '../interface';
import { ControllsStyled } from './controllsStyled';
import subject from '../../stateObserver';
import { scroller } from 'react-scroll';
import MediaQuery from 'react-responsive';

interface IPropsControllers {
	list: IItemSlider[];
	slider: any;
	refSlider: any;
}

export const Controlls = ({ list, slider, refSlider }: IPropsControllers) => {
	const indexActive = 0;
	const moveTo = () => {
		scroller.scrollTo('section-lanzamiento', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	};
	return (
		<ControllsStyled className='controlls flex'>
			<MediaQuery minWidth={500}>
				<ButtonBase borderRadius='10rem' className='px-4 h-12 text-letter text-0/9xl' onClick={() => moveTo()}>
					<IconMask className='icon-down-signal mr-2'></IconMask>
					Desliza y descubre
				</ButtonBase>
			</MediaQuery>
			<div className='slick-dots'>
				{list.map((item: any, index: number) => {
					return <div className={`dot dot-${index} ${index == indexActive ? 'active' : ''}`} key={'control' + index}></div>;
				})}
			</div>
			<div className='flex'>
				<MediaQuery minWidth={500}>
					<div className='counter mr-10'>
						<span className='current'>0{indexActive + 1}</span> / <span className='total'>0{list.length}</span>
					</div>
				</MediaQuery>
				<div className='slick-controlls'>
					<div className={'slick-prev mr-2 ' + (indexActive == 0 ? 'active' : '')} onClick={() => refSlider.current.slickPrev()}>
						<IconMask className='icon-signal-left'></IconMask>
					</div>
					<div className={'slick-next ' + (indexActive == 2 ? 'active' : '')} onClick={() => refSlider.current.slickNext()}>
						<IconMask className='icon-signal-right'></IconMask>
					</div>
				</div>
			</div>
		</ControllsStyled>
	);
};
