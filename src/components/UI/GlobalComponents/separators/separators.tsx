import styled from 'styled-components';

export const SeparatorHorizontal = styled.div`
	width: 100%;
	height: 1px;
	background-color: #dedddf;
	margin: 1rem 0;
`;

export const SeparatorVertical = styled.div`
	width: 1px;
	background-color: #dedddf;
	opacity: ${(props: { opacity?: number }) => props.opacity || 1};
`;
