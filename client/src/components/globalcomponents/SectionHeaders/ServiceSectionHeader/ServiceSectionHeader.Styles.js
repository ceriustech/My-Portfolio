import styled from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const ServiceHeaderContainer = styled.div`
	position: relative;
	width: 375px;
	height: 150px;
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
	margin: 0 auto;
	padding-right: 10px;

	@media ${mobileLargeMax} {
		width: 250px;
	}
`;

export const ServiceHeaderShape = styled.div`
	background: linear-gradient(90deg, #d498ff 0%, #ffffff 100%, #ffffff 100%);
	width: 35px;
	height: 30px;
	border-radius: 50%;
	margin-right: 10px;
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
