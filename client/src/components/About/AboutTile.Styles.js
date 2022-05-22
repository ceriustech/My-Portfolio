import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../../src/styles/globalstyles/mediaQueries.styles';

const white = defaultColors?.root.whiteColor;
const primary = defaultColors?.root.primary;

const maxViewMobileL = maxView?.mobileL;

export const AboutTileContainer = styled.div`
	margin: 0 auto;
	max-width: 1450px;
`;

export const AboutTileInner = styled.div`
	background-color: ${primary};
	border-radius: 0.5rem;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
	padding: 40px;
	margin: 15px;
	width: 75%;
	font-size: 12px;

	&:hover {
		background: ${white};
		transform: scale(1.01);
		-webkit-box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
		box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
	}

	@media screen and ${maxViewMobileL} {
		padding: 20px;
		width: 85%;
	}
`;

export const AboutTileHeader = styled.h2`
	font-size: 2rem;
	margin-bottom: 15px;
	text-transform: capitalize;
`;

export const AboutTileDescription = styled.p`

	font-size: 1.25rem;
`;
