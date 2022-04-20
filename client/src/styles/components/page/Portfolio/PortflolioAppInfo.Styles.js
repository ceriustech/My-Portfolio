import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Picture from '../../../../components/Picture';
import { defaultColors } from '../../../globalstyles/colors.styles';
import { maxView, minView } from '../../../globalstyles/mediaQueries.styles';

const blue = defaultColors?.gradient.darkBlue;
const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;

export const PortfolioAppContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 5rem 0;
	max-width: 1200px;
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
`;

export const AppImageContainer = styled.div``;

export const StyledPicture = styled(Picture)`
	width: 100%;
	display: block;
	border-radius: 0.25rem;
	object-fit: cover;
`;

export const AppContentContainer = styled.div``;
