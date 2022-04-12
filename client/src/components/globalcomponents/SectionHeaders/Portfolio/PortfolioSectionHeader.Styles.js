import styled, { css } from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const PortfolioHeaderContainer = styled.div`
	position: relative;
	width: 375px;
	height: 200px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: row;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 3rem auto 0;

	@media screen and ${mobileLargeMax} {
		width: 320px;
	}
`;

export const PortfolioHeaderShape = styled.div`
	background: linear-gradient(90deg, #ff9898 0, #ffffff 100%, #ffffff 100%);
	width: 35px;
	height: 30px;
	margin-right: 10px;
`;

export const PortfolioHeaderTitle = styled.h1`
	color: ${black};
	position: relative;
	font-size: calc(25px + (26 - 15) * ((100vw - 300px) / (1600 - 300)));
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	z-index: 1;
`;
