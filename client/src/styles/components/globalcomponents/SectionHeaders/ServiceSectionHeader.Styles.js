import styled, { css } from 'styled-components';
import { defaultColors } from '../../../globalstyles/colors.styles';

const black = defaultColors.root.blackColor;

const blue = defaultColors.root.lightBlue;
const red = defaultColors.gradient.red;
const orange = defaultColors.gradient.orange;
const lightOrange = defaultColors.gradient.lightOrange;

export const ServiceHeaderContainer = styled.div`
	position: relative;
	width: 200px;
	height: 200px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 3rem auto 0;
`;

export const ServiceHeaderShape = styled.div`
	background: ${blue};
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: absolute;
`;

export const ServiceHeaderTitle = styled.h1`
	position: relative;
	font-size: 3em;
	text-transform: uppercase;
	font-weight: 600;
	// background: linear-gradient(to right, ${red}, ${orange}, ${lightOrange});
	// color: transparent;
	// background-clip: text;
	// -webkit-background-clip: text;
	letter-spacing: 2px;
	z-index: 1;
`;
