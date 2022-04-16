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

const miscXLarge = miscMinView?.miscXLarge;
const dtMediumMin = minView?.desktopM;
const laptopMin = minView?.laptop;
const laptopMax = maxView?.laptop;
const mobileSmalleMax = maxView?.mobileS;

const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;
const gray = defaultColors?.root.grayColor;

export const PortfolioTileContainer = styled(motion.div)`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const PortfolioTileInner = styled.div`
	align-items: center;
	border-bottom: 1px solid ${black};
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

  @media screen and ${miscXLarge} {
    width: 470px;
    padding: 1.25rem;
    border-radius: 0.75rem;
  }

  @media screen and ${mobileSmalleMax} {
    width: 100%;
    margin: 1rem;
  }

}
`;

export const PortfolioPictureContainer = styled.div`
	height: 230px;
	position: relative;
	width: 100%;

	align-items: center;
	display: flex;
	justify-content: center;

	picture {
		height: 100%;
	}

	img {
		border-radius: 0.5rem;
		height: 100%;
		width: 100%;
	}
`;

export const PortfolioImage = styled(Picture)``;

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

	&:hover {
		opacity: 1;
	}
`;

export const PortfolioOverlayLink = styled.a``;

export const PortfolioOverlayLinkDiv = styled(motion.div)`
	align-items: center;
	display: flex;
	justify-content: center;

	border-radius: 50%;
	color: ${white};
	cursor: pointer;
	font-family: 'DM Sans', sans-serif;
	font-weight: 800;
	height: 55px;
	margin: 1rem;
	width: 55px;

	background-color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s ease;

	svg {
		color: ${white};
		height: 50%;
		width: 50%;
	}
`;

export const ApplicationInfo = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	padding: 0.5rem;
	position: relative;
	width: 100%;

	h3 {
		line-height: 1.5;
		margin-top: 1rem;

		color: ${black};
		font-size: 1.15rem;
		font-weight: 800;
		text-align: left;
	}
`;

export const ApplicationInfoTag = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	background-color: ${white};
	border-radius: 10px;
	padding: 0.5rem 1rem;
	position: absolute;
	top: -25px;

	p {
		color: ${gray};
		font-size: 1rem;
		line-height: 1.5;
		text-align: left;
	}
`;

export const OverlayHelpText = styled.h3`
	line-height: 1.5;
	margin-top: 1rem;
	background-color: rgba(0, 0, 0, 0.5);
	color: ${white};
	display: none;
	font-size: 1rem;
	font-weight: 800;
	text-align: center;
	padding: 0.5rem;
	position: absolute;
	top: 10px;
`;
