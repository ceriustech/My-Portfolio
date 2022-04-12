import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { motion } from 'framer-motion';
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

const white = defaultColors?.root.whiteColor;

export const PortfolioButtonFilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-flow: wrap;
	align-items: center;
	margin: 1rem 0;
`;

export const PortfolioButton = styled.button`
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: #fff;
	color: #000;
	font-weight: 800;

	cursor: pointer;
	transition: all 0.3s ease;
	margin: 0.5rem;

	&:hover {
		background-color: var(--secondary-color);
		color: #fff;
	}

	@media screen and (min-width: 2000px) {
		padding: 1rem 2rem;
		border-radius: 0.85rem;
	}
`;
