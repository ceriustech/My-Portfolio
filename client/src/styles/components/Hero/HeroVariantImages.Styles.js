import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { defaultColors } from '../../globalstyles/colors.styles';

const white = defaultColors.root.whiteColor;

export const HeroCircleImageWrapper = styled(motion.div)`
	flex: 0.75;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	height: 100%;
	margin-left: 1rem;
`;

export const HeroCircleContainer = styled(motion.div)`
	width: 100px;
	height: 100px;
	border-radius: 50%;

	background: ${white};
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;

	// circles with different height & width

	&:nth-child(1) {
		width: 100px;
		height: 100px;
	}

	&:nth-child(2) {
		margin: 1.75rem;
		width: 150px;
		height: 150px;
	}

	&:nth-child(3) {
		width: 70px;
		height: 70px;
	}

	img {
		width: 60%;
		height: 60%;
	}
`;
