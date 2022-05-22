import styled from 'styled-components';

export const SkipNavigationContainer = styled.div``;

export const SkipNavigationLink = styled.a`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;

	&:focus {
		background: white;
		clip: auto;
		height: auto;
		left: 10px;
		padding: 1rem;
		position: fixed;
		top: 0px;
		width: auto;
		z-index: 100;
	}
`;
