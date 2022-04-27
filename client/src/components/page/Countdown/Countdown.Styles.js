import styled from 'styled-components';
import { defaultColors } from '../../../styles/globalstyles/colors.styles';
import { maxView } from '../../../styles/globalstyles/mediaQueries.styles';

export const CountdownClockHeader = styled.h2`
	margin-bottom: 20px;
	font-size: 2.5rem;
	text-align: center;
`;

export const CountdownClockContainer = styled.div`
	background-color: #fff;
	margin: 0 auto;
	width: 25.6em;
`;

export const CountdownClock = styled.div`
	border: 2px solid #000;
	border-radius: 0.25rem;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const CountdownClockPlacement = styled.div`
	font-size: 12px;
	margin: 0 0.2em;
`;

export const CountdownTimer = styled.p`
	background-color: #000;
	box-sizing: border-box;
	color: #fff;
	font-size: 3.2em;
	letter-spacing: 0.02em;
	line-height: 1.02em;
	margin: 0 0 0.25em;
	position: relative;
	top: 0.05em;
	left: 0.05em;
	width: 1.8em;
	height: 1.05em;
	text-align: center;

	span {
		position: absolute;
		left: 64px;
	}
`;

export const CountdownTimerLabel = styled.p`
	color: #000;
	font-size: 1.5em;
	text-align: center;
	margin: 0;
	padding-left: 0.15em;
`;

export const CountdownLaunchText = styled.h3`
	font-size: 1.5em;
	text-align: center;
`;
