import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { motion } from 'framer-motion';
import {
	maxView,
	minView,
	miscMinView,
} from '../../globalstyles/mediaQueries.styles';
import Picture from '../../../components/Picture';

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
`;

export const PortfolioImage = styled(Picture)`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 230px;
	position: relative;
	width: 100%;
`;
