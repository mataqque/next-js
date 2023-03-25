import { Helmet } from 'react-helmet-async';
import Navbar from '../UI/Page/Navbar/navbar';
import Footer from '../UI/Page/Footer/footer';
import { Loader } from '../UI/loaderPage/loader';
import { useEffect, useRef } from 'react';
import { IconMask } from '../UI/inputs/styled/IconDownStyleSelect';

export default function PublicRoute(props: any) {
	const mouseEvent = useRef<HTMLDivElement>(null);
	const properties = {
		class: 'loader-page',
		icon: require('../../assets/files/logo-animation-momen.json'),
		positionCss: 'fixed',
		witdh: 250,
		height: 250,
		zIndex: 30,
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		document.addEventListener('mousemove', (event: MouseEvent) => {
			if (mouseEvent.current) {
				mouseEvent.current.style.left = `${event.clientX - 26}px`;
				mouseEvent.current.style.top = `${event.clientY - 26}px`;
				// @ts-ignore
				let id = event?.target?.id;
				if (id.includes('content_event_right')) {
					mouseEvent.current.id = 'content_event_right';
				} else if (id.includes('content_event_left')) {
					mouseEvent.current.id = 'content_event_left';
				} else if (id.includes('content_event_center')) {
					mouseEvent.current.id = 'content_event_center';
				} else {
					mouseEvent.current.id = 'none';
				}
			}
		});
	}, [props]);

	return (
		<>
			{/* @ts-ignore */}
			<Loader properties={properties} delay={1800} />
			<div className='event_mouse' id='none' ref={mouseEvent}>
				<IconMask className='icon w-5 h-5 bg-letter'></IconMask>
			</div>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}
