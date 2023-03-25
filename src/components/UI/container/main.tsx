import styled from 'styled-components';

export const MainContainer = styled.main`
	padding-top: 10rem;
	overflow: hidden;
	.only-section {
		padding-top: 4rem;
	}
	@media (max-width: 500px) {
		padding-top: 6rem;
	}
	@media (prefers-color-scheme: var(--themeMode)) {
		background-color: red;
	}
`;
