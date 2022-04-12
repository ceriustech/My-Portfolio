import styled, { css } from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const SkillsHeaderContainer = styled.div`
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
	padding-right: 10px;

	@media ${mobileLargeMax} {
		width: 250px;
	}
`;

export const SkillsHeaderShape = styled.div`
	overflow: hidden;
	background: transparent;
	width: 35px;
	height: 30px;
	transform: rotate(-30deg) skewX(30deg) scaleY(0.866);
	margin-right: 10px;

	&:before {
		position: absolute;
		right: 6.7%;
		bottom: 0;
		left: 6.7%;
		top: 0;
		transform: scaleY(1.155) skewX(-30deg) rotate(30deg);
		background: linear-gradient(
			90deg,
			rgba(255, 245, 152, 1) 46%,
			rgba(255, 255, 255, 1) 100%,
			rgba(255, 255, 255, 1) 100%
		);
		content: '';
	}
`;

export const SkillsHeaderTitle = styled.h1`
	color: ${black};
	position: relative;
	font-size: calc(25px + (26 - 15) * ((100vw - 300px) / (1600 - 300)));
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	z-index: 1;
`;
