import styled from 'styled-components';
import { motion } from 'framer-motion';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import {
	maxView,
	minView,
	miscMinView,
} from '../../styles/globalstyles/mediaQueries.styles';

const miscLarge = miscMinView?.miscLarge;
const dtMediumMin = minView?.desktopM;
const dtMediumMax = maxView?.desktopM;
const laptopMin = minView?.laptop;
const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;
const mobileSmallMax = maxView?.mobileS;

const blue = defaultColors.gradient.blue;
const darkBlue = defaultColors.gradient.darkBlue;
const purple = defaultColors.gradient.purple;
const red = defaultColors.gradient.red;
const orange = defaultColors.gradient.orange;
const lightOrange = defaultColors.gradient.lightOrange;

export const HeroMainContainer = styled(motion.div)`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 12px;

	@media screen and ${mobileSmallMax} {
		top: 25px;
	}
`;

export const Title = styled.h1`
	text-transform: uppercase;
	width: 100%;
	z-index: 1;
	display: flex;
	font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
	justify-content: center;
	flex-direction: column;
	padding-left: 3rem;

	@media screen and ${dtMediumMax} {
		padding-left: 2.5rem;
	}

	@media screen and ${mobileLargeMax} {
		font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
		padding: 2rem;
	}

	span {
		background: linear-gradient(
			to right,
			${blue},
			${darkBlue},
			${purple},
			${red},
			${orange},
			${lightOrange}
		);
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;

		@media screen and ${laptopMin} {
			line-height: 3.5rem;
		}

		@media screen and ${dtMediumMin} {
			padding-left: 2.5rem;
			line-height: 4rem;
		}

		@media screen and ${miscLarge} {
			line-height: 6rem;
		}

		@media screen and ${laptopMax} {
			line-height: 3rem;
		}

		@media screen and ${mobileLargeMax} {
			line-height: 2.5rem;
		}
	}
`;

export const HeroImageContainer = styled.div``;

export const HeroImage = styled(motion.img)`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 25px;
	z-index: 0;
	width: 100%;
	height: 90%;
`;
