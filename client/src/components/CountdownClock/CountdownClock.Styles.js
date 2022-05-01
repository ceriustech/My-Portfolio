import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors?.root.blackColor;
const orange = defaultColors?.root.orangeColor;
const blue = defaultColors?.gradient.darkBlue;
const white = defaultColors?.root.whiteColor;
const primary = defaultColors?.root.primary;

const maxViewLaptop = maxView?.laptop;
const maxViewVobileL = maxView?.mobileL;

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
	margin-bottom: 20px;

	&:hover {
		background: ${blue};
		color: ${white};
	}
`;

export const CountdownClockHeader = styled.h2`
	color: ${blue};
	margin-bottom: 15px;
	font-size: calc(35px + (36 - 15) * ((100vw - 300px) / (1600 - 300)));
`;

export const CountdownClockHeaderText = styled.p`
	color: ${black};
	font-size: calc(15px + (30 - 15) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 600;
`;

export const CountdownClockContainer = styled.div`
	margin: 0 auto;
	padding: 0 20px;
	max-width: 1200px;

	// @media screen and ${maxViewLaptop} {
	// 	padding: 0 115px;
	// }

	// @media screen and ${maxViewVobileL} {
	// 	padding: 0 115px;
	// }
`;

export const CountdownClockInner = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
	grid-gap: 20px;
	justify-items: stretch;
	position: relative;

	@media screen and ${maxViewLaptop} {
		grid-template-columns: 1fr 1fr;
	}

	// @media screen and ${maxViewVobileL} {
	// }
`;

export const CountdownClockPlacement = styled.div`
	font-size: 12px;
	padding: 25px 0 0 0;
	margin: 30px 0 0 0;
	-webkit-box-shadow: 5px 5px 7px 2px rgba(82, 80, 80, 0.54);
	box-shadow: 5px 5px 7px 2px rgba(82, 80, 80, 0.54);

	@media screen and ${maxViewVobileL} {
		margin-bottom: 24px;
	}
`;

export const CountdownTimer = styled.p`
	font-size: 6rem;
	width: 100%;
	height: 85%;
	background: ${primary};
	margin-top: -25px;
	padding-top: 100px;
	display: inline-block;
	text-align: center;

	@media screen and ${maxViewLaptop} {
		padding-top: 75px;
	}
`;

export const CountdownTimerLabel = styled.p`
	font-size: 1.5rem;
	width: 100%;
	height: auto;
	padding: 30px 0;
	background: ${orange};
	color: #ffffff;
	display: inline-block;
	text-align: center;
`;

export const CountdownLaunchText = styled.h3`
	font-size: 1.5em;
	text-align: center;
`;
