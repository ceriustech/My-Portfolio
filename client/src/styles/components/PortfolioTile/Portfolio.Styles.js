import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { motion } from 'framer-motion';
import {
	maxView,
	minView,
	miscMinView,
} from '../../globalstyles/mediaQueries.styles';
import Picture from '../../../components/Picture';
import { Link } from 'react-router-dom';

const miscLarge = miscMinView?.miscLarge;
const dtMediumMin = minView?.desktopM;
const laptopMin = minView?.laptop;
const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;

const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;
const gray = defaultColors?.root.grayColor;

export const PortfolioTileContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-flow: wrap;
	align-items: center;
`;

export const PortfolioTileInner = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	background-color: ${white};
	border-radius: 0.5rem;
	color: ${black};
	cursor: pointer;
	flex-direction: column;
	margin: 2rem;
	padding: 1rem;
	transition: all 0.3s ease;
	width: 270px;

  opacity: 1;

	&:hover {
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
	}

  @media screen and (min-width: 2000px) {
    width: 470px;
    padding: 1.25rem;
    border-radius: 0.75rem;
  }

  @media screen and (max-width: 300px) {
    width: 100%;
    margin: 1rem;
  }

}
`;

export const PortfolioPictureContainer = styled.div`
	height: 230px;
	position: relative;
	width: 100%;
`;

export const PortfolioImage = styled(Picture)`
	border-radius: 0.5rem;
	height: 100%;
	width: 100%;

	img {
		border-radius: 0.5rem;
		height: 100%;
		width: 100%;
	}
`;

export const PortfolioOverlayContainer = styled(motion.div)`
	align-items: center;
	display: flex;
	justify-content: center;

	border-radius: 0.5rem;
	bottom: 0;
	height: 100%;
	left: 0;
	opacity: 0;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;

	background-color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s ease;
`;

export const PortfolioOverlayLink = styled(Link)``;

export const PortfolioOverlayLinkDiv = styled(motion.div)`
	align-items: center;
	display: flex;
	justify-content: center;

	border-radius: 50%;
	color: #fff;
	cursor: pointer;
	font-family: var(--font-base);
	font-weight: 800;
	height: 50px;
	margin: 1rem;
	width: 50px;

	background-color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s ease;
`;
