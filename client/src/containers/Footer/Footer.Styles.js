import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const grayColor = defaultColors.root.grayColor;
const bgSectionColor = defaultColors?.root.primary;

const mobileLargeMax = maxView?.mobileL;
const mobileSmallMax = maxView?.mobileS;

export const FooterContainer = styled.footer`
	background: ${bgSectionColor};
	padding: 100px 15px;
`;

export const CaptionTextContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: flex-start;
	margin: 0 auto;
	max-width: 400px;
	padding-left: 30px;

	@media screen and ${mobileLargeMax} {
		padding-left: 25px;
	}

	@media screen and ${mobileSmallMax} {
		padding-left: 10px;
	}
`;

export const CaptionText = styled.p`
	color: ${grayColor};
	grid-column: 1 / span 1;
	font-size: 1rem;
	font-weight: 600;
	margin: 40px 0 15px;
	text-transform: capitalize;
	&&:nth-child(2) {
		margin: 0;
	}
`;
