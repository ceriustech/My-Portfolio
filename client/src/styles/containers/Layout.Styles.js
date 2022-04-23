import styled from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';

const bgSectionColor = defaultColors?.root.primary;

export const Layout = styled.div`
	font-family: 'DM Sans', sans-serif;
	height: 100vh;
	position: relative;
	display: grid;

	& > section:nth-child(even) {
		background-color: ${bgSectionColor};
	}

	& div section:nth-child(odd) {
		background-color: ${bgSectionColor};
	}
`;
