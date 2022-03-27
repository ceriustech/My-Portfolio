import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { defaultColors } from '../../globalstyles/colors.styles';
import {
	maxView,
	minView,
	miscMinView,
} from '../../globalstyles/mediaQueries.styles';

const miscLarge = miscMinView?.miscLarge;
const dtMediumMin = minView?.desktopM;
const laptopMin = minView?.laptop;
const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;

const white = defaultColors.root.whiteColor;
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
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 12px;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	width: 100%;
	z-index: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 4rem;

  @media screen and ${laptopMax} {
    padding-left  2.5rem;
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
			line-height: 4rem;
		}

		@media screen and ${miscLarge} {
			line-height: 5rem;
		}

		@media screen and ${laptopMax} {
			line-height: 3rem;
		}

    @media screen and ${mobileLargeMax} {
			line-height: 2.5rem;
		}
	}

	span:nth-child(1) {
		font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
	}

	span:nth-child(2) {
		font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
		padding-left: 5px;
	}

	span:nth-child(3) {
		font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
		padding-left: 10px;
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
