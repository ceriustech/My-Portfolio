import styled from 'styled-components';

export const NavigationHeader = styled.header``;

export const NavigationContainer = styled.ul`
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	background: hsla(0, 0%, 100%, 0.25);
	border: 1px solid hsla(0, 0%, 100%, 0.18);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;
`;

export const NavItems = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
