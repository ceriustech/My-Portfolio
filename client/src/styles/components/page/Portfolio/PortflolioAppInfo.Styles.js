import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Picture from '../../../../components/Picture';
import { defaultColors } from '../../../globalstyles/colors.styles';
import { maxView, minView } from '../../../globalstyles/mediaQueries.styles';

const blue = defaultColors?.gradient.darkBlue;
const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;
const grey = defaultColors?.root.grayColor;

const maxViewPort = maxView?.tablet;

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
	max-width: 200px;

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
		grid-template-columns: unset;
	}
`;

export const AppImageContainer = styled.div``;

export const StyledPicture = styled(Picture)`
	width: 100%;
	display: block;
	border-radius: 0.25rem;
	object-fit: cover;
`;

export const AppContentContainer = styled.div``;

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

export const AppLink = styled.a``;
