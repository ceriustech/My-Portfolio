import styled, { css } from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const ServiceHeaderContainer = styled.div`
	position: relative;
	width: 350px;
	height: 200px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 3rem auto 0;

	@media ${mobileLargeMax} {
		width: 250px;
	}
`;

export const ServiceHeaderShape = styled.div`
	background: linear-gradient(90deg, #d498ff 0%, #ffffff 100%, #ffffff 100%);
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: absolute;
`;

export const ServiceHeaderTitle = styled.h1`
	color: ${black};
	position: relative;
	font-size: calc(25px + (26 - 15) * ((100vw - 300px) / (1600 - 300)));
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	z-index: 1;
`;
