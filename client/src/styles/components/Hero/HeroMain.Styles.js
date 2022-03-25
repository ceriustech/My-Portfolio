import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { defaultColors } from '../../globalstyles/colors.styles';

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
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	width: 100%;
	z-index: 1;

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
		line-height: 5.25rem;
	}

	span:nth-child(1) {
		font-size: 4rem;
	}

	span:nth-child(3) {
		font-size: 4.5rem;
		padding-left: 5px;
	}

	span:nth-child(5) {
		font-size: 5rem;
		padding-left: 10px;
	}
`;

export const HeroImageContainer = styled(motion.img)`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	width: 100%;
	height: 90%;
`;
