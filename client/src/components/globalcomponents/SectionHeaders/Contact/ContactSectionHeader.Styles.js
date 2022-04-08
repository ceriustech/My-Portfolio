import styled, { css } from 'styled-components';
import { defaultColors } from '../../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;

const mobileLargeMax = maxView?.mobileL;

export const ContactHeaderContainer = styled.div`
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

export const ContactHeaderShape = styled.div`
	text-align: center;
	padding: 12px;
	margin-bottom: 6px;
	height: 60px;
	width: 200px;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 51%;
		background: linear-gradient(90deg, #f9af7a 46%, #ffffff 100%, #ffffff 100%);
		transform: skew(0deg, 6deg);
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 50%;
		background: linear-gradient(
			270deg,
			#f9af7a 46%,
			#ffffff 100%,
			#ffffff 100%
		);
		transform: skew(0deg, -6deg);
	}
	position: absolute;
`;

export const ContactHeaderTitle = styled.h1`
	color: ${black};
	position: relative;
	font-size: calc(25px + (26 - 15) * ((100vw - 300px) / (1600 - 300)));
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	z-index: 1;
`;
