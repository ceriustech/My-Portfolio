import styled, { css } from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const BlogHeaderContainer = styled.div`
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

export const BlogHeaderShape = styled.div`
	background: linear-gradient(90deg, #abff98 0%, #ffffff 100%, #ffffff 100%);
	width: 170px;
	height: 120px;
	position: relative;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	position: absolute;

	&:before {
		content: '';
		position: absolute;
		right: 100%;
		top: 45px;
		width: 0;
		height: 0;
		border-top: 13px solid transparent;
		border-right: 26px solid #abff98;
		border-bottom: 13px solid transparent;
	}
`;

export const BlogHeaderTitle = styled.h1`
	color: ${black};
	position: relative;
	font-size: calc(25px + (26 - 15) * ((100vw - 300px) / (1600 - 300)));
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	z-index: 1;
`;