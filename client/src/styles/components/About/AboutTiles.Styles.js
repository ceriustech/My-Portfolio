import styled, { css } from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { motion } from 'framer-motion';

const white = defaultColors?.root.whiteColor;
const gray = defaultColors?.root.grayColor;

export const AboutTileContainer = styled(motion.div)`
	background-color: ${white};
	border-bottom: 3px solid ${(props) => props.bordercolor};
	border-radius: 0.5rem;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
	padding: 40px;
	margin: 25px;
	width: 25%;

	img {
		width: 90%;
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
		background: rgba(255, 255, 255, 1);
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		-webkit-box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
		box-shadow: 0px 9px 41px -2px rgba(153, 153, 153, 1);
	}
`;
