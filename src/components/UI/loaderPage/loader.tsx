import './loader.scss';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';
import { callbackDelay } from '../../../helpers/helpers';

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
interface ILoader {
	properties: {
		class?: string;
		icon: any;
		positionCss: Position;
		witdh?: number;
		height?: number;
		zIndex: number;
	};
	/** delay: number; content miliseconds*/
	delay?: number;
	active: boolean;
}

export function Loader(props: ILoader) {
	const [hidden, setHidden] = useState<boolean>(false);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.properties.icon,

		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
		zIndex: props.properties.zIndex,
		positionCss: props.properties.positionCss || 'absolute',
	};

	useEffect(() => {
		callbackDelay(() => setHidden(true), props.delay);
	}, []);
	return (
		<div
			className={`loader ${props.properties.class ? props.properties.class : ''} ${hidden === true ? 'hidden' : ''}`}
			style={{ position: defaultOptions.positionCss, zIndex: defaultOptions.zIndex }}
		>
			<Lottie
				options={defaultOptions}
				height={props.properties.height ? props.properties.height : 250}
				width={props.properties.witdh ? props.properties.witdh : 250}
				// isStopped={this.state.isStopped}
				// isPaused={this.state.isPaused}
				// speed={this.state.speed}
			></Lottie>
		</div>
	);
}

Loader.propTypes = {
	active: PropTypes.bool.isRequired,
};
