import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { motion } from 'framer-motion';
import {
	maxView,
	minView,
	miscMinView,
} from '../../globalstyles/mediaQueries.styles';

const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;

const white = defaultColors?.root.whiteColor;
const primary = defaultColors?.root.primary;
const gray = defaultColors?.root.grayColor;

export const AboutTileContainer = styled(motion.div)`
	background-color: ${primary};
	border-bottom: 3px solid ${(props) => props.bordercolor};
	border-radius: 0.5rem;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
	padding: 40px;
	margin: 15px;
	width: 25%;

	img {
		width: 100%;
		height: 170px;
		border-radius: 15px;
		object-fit: cover;
	}

	h2 {
		color: ${(props) => props.color};
		font-size: 1.2em;
		font-weight: 800;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin: 40px 0;
	}

	p {
		color: ${gray};
		font-size: 1.25rem;
		line-height: 1.5;
		margin-bottom: 10px;
	}

	&:hover {
		background: ${white};
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		-webkit-box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
		box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
	}

	@media screen and ${laptopMax} {
		width: 350px;
		margin: 1rem 1rem;
		padding: 20px;
	}

	@media screen and ${mobileLargeMax} {
		width: 315px;
		padding: 20px;

		&:hover {
			transform: scale(1.025);
		}
	}
`;
