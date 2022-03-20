import React from 'react';
import styled, { css } from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';

const gray = defaultColors.root.grayColor;
const blue = defaultColors.gradient.blue;
const darkBlue = defaultColors.gradient.darkBlue;
const purple = defaultColors.gradient.purple;
const red = defaultColors.gradient.red;
const orange = defaultColors.gradient.orange;
const lightOrange = defaultColors.gradient.lightOrange;

export const MobileNavContainer = styled.div`
	position: relative;
`;

export const MobileMenuToggleContainer = styled.div`
	background: linear-gradient(
			to right,
			${blue},
			${darkBlue},
			${purple},
			${red},
			${orange},
			${lightOrange}
		)
		border-box;
	border-radius: 50%;
	align-items: center;
	display: flex;
	width: 50px;
	height: 50px;
	justify-content: center;
	z-index: 99;
`;

export const MobileListContainer = styled.ul`
	min-width: 300px;
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	max-width: 44%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 5;
	padding: 1rem;
	// background-image: url(${(props) => props.image.bgWhite});
	background-color: ${defaultColors.root.whiteColor};
	-webkit-box-shadow: 1px 2px 15px 5px rgba(173, 173, 173, 0.15);
	box-shadow: 1px 2px 15px 5px rgba(173, 173, 173, 0.15);
	transform: translateX(4em);
`;
