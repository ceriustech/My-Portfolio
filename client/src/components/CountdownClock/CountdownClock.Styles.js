import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const black = defaultColors.root.blackColor;
const orange = defaultColors.root.orangeColor;
const blue = defaultColors.gradient.darkBlue;

export const CountdownClockHeader = styled.h2`
	color: ${blue};

	margin-bottom: 20px;
	font-size: 3.25rem;
`;

export const CountdownClockHeaderText = styled.p`
	color: ${black};
	font-size: 1.5rem;
	font-weight: 600;
`;

export const CountdownClockContainer = styled.div`
	margin: 0 auto;
	width: calc(4 * 260px);
`;

export const CountdownClockInner = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const CountdownClockPlacement = styled.div`
	font-size: 12px;
	width: 235px;
	height: 360px;
	float: left;
	padding: 25px 0 0 0;
	margin: 30px 15px 0 0;
	-webkit-box-shadow: 5px 5px 7px 2px rgba(82, 80, 80, 0.54);
	box-shadow: 5px 5px 7px 2px rgba(82, 80, 80, 0.54);
`;

export const CountdownTimer = styled.p`
	font-size: 6rem;
	width: 100%;
	height: 85%;
	background: #ffffff;
	margin-top: -25px;
	padding-top: 100px;
	display: inline-block;
	text-align: center;
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
