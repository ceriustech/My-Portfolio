import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Picture from '../../utility/Picture';
import { defaultColors } from '../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../styles/globalstyles/mediaQueries.styles';

const blue = defaultColors?.gradient.darkBlue;
const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;
const grey = defaultColors?.root.grayColor;
const purple = defaultColors?.root.purpleColor;
const red = defaultColors?.gradient.red;

const maxViewPort = maxView?.tablet;
const maxViewMobileS = maxView?.mobileS;

export const PortfolioAppContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 5rem 0;
	max-width: 1200px;
	width: 90vw;
`;

export const BackToHomeLink = styled(Link)`
	text-transform: uppercase;
	background: ${white};
	border: 2px solid ${black};
	color: ${black};
	padding: 0.375rem 0.75rem;
	letter-spacing: 0.1rem;
	display: inline-block;
	font-weight: 600;
	transition: all 0.3s linear;
	font-size: 0.875rem;
	cursor: pointer;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	border-radius: 0.25rem;
	max-width: 152px;

	&:hover {
		background: ${blue};
		color: ${white};
	}
`;

export const AppInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 4rem;
	margin-top: 2rem;

	@media screen and ${maxViewPort} {
		gap: 2rem;
		grid-template-columns: unset;
	}
`;

export const AppImageContainer = styled.div`
	height: 100%;

	img {
		width: 100%;
		display: block;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	@media screen and ${maxViewMobileS} {
		width: 288px;
	}
`;

export const StyledPicture = styled(Picture)`
	height: 100%;
`;

export const AppContentContainer = styled.div`
	align-self: self-start;
	@media screen and ${maxViewMobileS} {
		width: 288px;
	}
`;

export const AppContentHeader = styled.h2`
	color: ${black};
	font-size: 2.5rem;
	margin-bottom: 1.25rem;
	max-width: 45rem;
`;

export const AppContentDescText = styled.p`
	color: ${grey};
	margin-bottom: 1.25rem;
	font-size: 1.15rem;

	&:nth-child(3) {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		grid-gap: 20px;
	}

	&:nth-child(4) {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		grid-gap: 20px;
	}

	&:nth-child(5) {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		grid-gap: 20px;
	}

	span {
		color: ${black};
		font-weight: 700;
		width: 150px;
	}
`;

export const StyledLink = styled(Link)`
	color: ${blue};
`;

export const AppLink = styled.a`
	color: ${blue};
`;

export const TechListContainer = styled.div`
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(108px, 135px));
	}
`;

export const TechListHeader = styled.h3`
	color: ${purple};
	margin-top: 15px;
`;

export const TechListText = styled.li`
	border: 1px solid ${red};
	color: ${red};
	padding: 0.5rem 1rem;
	border-radius: 0.85rem;
	margin-top: 10px;
	text-align: center;
	font-size: 1.15rem;
	width: 108px;
`;
