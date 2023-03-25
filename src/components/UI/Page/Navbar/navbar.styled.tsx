import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ContainerNavStyled = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	transition: 0.3s;
	background: transparent;
	height: var(--heightNav);
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(-100%);
	@media (max-width: 800px) {
		padding: 0rem;
	}
	a:active,
	a:focus,
	a:hover {
		text-decoration: none;
	}
	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding-top: 2rem;
		padding-bottom: 2rem;
		@media (max-width: 768px) {
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
		.content-links {
			.link {
				margin-right: 4rem;
				&.active {
					color: var(--primary);
					font-weight: 600;
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
	.link {
		.line {
			width: 0%;
			height: 2px;
			background: #ffffffb2;
			transition: 0.3s;
			display: flex;
			position: relative;
			bottom: -3px;
		}
		&.active {
			.line {
				background: white;
				animation: none;
				width: 100%;
			}
		}
	}
	&.transparent {
		transform: translateY(0%);
		background: #ffffff8f;
		backdrop-filter: blur(6.3px);
		-webkit-backdrop-filter: blur(6.3px);
	}
	&.active {
		transform: translateY(-100%);
		background: rgba(255, 255, 255, 0.64);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.3px);
		-webkit-backdrop-filter: blur(6.3px);
	}
	&.open {
		transform: translateY(0%);
	}
	.link {
		&:hover {
			.line {
				width: 100%;
			}
		}
	}
	.btn-close {
		width: 2.5rem;
		height: 2.5rem;
		position: relative;
		.line {
			position: absolute;
			height: 3px;
			width: 100%;
			background: #757575;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			transition: 0.3s;
		}
		.line-1 {
			top: -7px;
		}
		.line-2 {
			bottom: -7px;
		}
		&.open {
			.line-1 {
				top: 0px;
				transform: rotate(45deg);
			}
			.line-2 {
				bottom: 0px;
				transform: rotate(-45deg);
			}
		}
	}
	.contain-links-modal {
		display: none;
		&.open {
			display: flex;
			animation: open forwards 0.3s ease-in-out;
		}
		&.close {
			display: flex;
			animation: close forwards 0.3s ease-in-out;
		}
		@keyframes close {
			0% {
				opacity: 1;
				height: 100vh;
				pointer-events: all;
			}
			100% {
				opacity: 0;
				height: 0;
				pointer-events: none;
			}
		}
		@keyframes open {
			0% {
				opacity: 0;
				height: 0;
			}
			100% {
				opacity: 1;
				height: 100vh;
			}
		}
		@media (max-width: 1100px) {
			flex-direction: column;
			justify-content: space-between;
			position: fixed;
			background: white;
			width: 100%;
			left: 0;
			top: 0;
			height: 100vh;
			align-items: center;
			justify-content: space-around;
			.brand {
				height: 6rem;
				width: 5rem;
			}
			.content-links {
				.link {
					.label {
						font-size: 1.5rem;
					}
				}
				@media (max-width: 950px) {
					display: flex;
					flex-direction: column;
					.link {
						margin-right: 0;
						margin-bottom: 2rem;
						text-align: center;
					}
				}
			}
		}
	}
`;
interface IPropsContainerNav {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export const ContainerNav = (props: IPropsContainerNav) => {
	const location = useLocation();
	const [activeNavScrolled, setActiveNavScrolled] = useState<string>('transparent');
	const nav = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setActiveNavScrolled('transparent');
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (currentScrollPos == 0) {
				setActiveNavScrolled('transparent');
			} else if (nav.current) {
				if (prevScrollpos > currentScrollPos) {
					setActiveNavScrolled('transparent');
				} else {
					setActiveNavScrolled('active');
				}
				prevScrollpos = currentScrollPos;
			}
		};
	}, [location]);

	return (
		<ContainerNavStyled className={`${activeNavScrolled + ' ' + props.className}`} ref={nav}>
			<div className='container nav-container'>{props.children}</div>
		</ContainerNavStyled>
	);
};

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
