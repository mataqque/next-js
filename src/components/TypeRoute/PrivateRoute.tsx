import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from '../../routes/Boundary';
import { PrivateRouteProps } from './interface/privateRoute';
import { Loader } from '../UI/loaderPage/loader';
const iconLoader = require('../../assets/images/Account/icons/infinity-loader.json');

export default function PrivateRoute(props: PrivateRouteProps) {
	const navigate = useNavigate();
	// console.log('props', props);
	// const verifycredentials = props.verifyCredential();
	// const isSuccess = verifycredentials.isSuccess;
	// useEffect(() => {
	// 	(async () => {
	// 		verifycredentials.then((res: any) => {
	// 			console.log(res);
	// 		});
	// 	})();
	// }, []);
	return (
		<>
			{/* @ts-ignore */}
			<Loader properties={{ icon: iconLoader, class: 'loader-global', positionCss: 'fixed' }} active={true} delay={700} />
			<ErrorBoundary>
				<Helmet>
					<script src='https://kit.fontawesome.com/6611670d58.js'></script>
				</Helmet>
			</ErrorBoundary>
			{props.children}
		</>
	);
}
