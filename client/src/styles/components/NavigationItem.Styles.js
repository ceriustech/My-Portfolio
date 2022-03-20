import React from 'react';
import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { defaultColors } from '../globalstyles/colors.styles';
import { maxView } from '../globalstyles/mediaQueries.styles';

const blue = defaultColors.gradient.blue;
const darkBlue = defaultColors.gradient.darkBlue;
const purple = defaultColors.gradient.purple;
const red = defaultColors.gradient.red;
const orange = defaultColors.gradient.orange;
const lightOrange = defaultColors.gradient.lightOrange;

export const NavigationItem = styled.li`
	margin: 0 1rem;
	cursor: pointer;
	flex-direction: column;

	&:hover {
		div {
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
		}
	}

	@media ${maxView.tablet} {
		margin: 1rem;
	}
`;

export const NavDot = styled.div`
	width: 5px;
	height: 5px;
	background: transparent;
	border-radius: 50%;
	margin: 0 auto 5px;
`;

export const ListLink = styled(HashLink)`
	color: ${defaultColors.root.grayColor};
	flex-direction: column;
	font-weight: 500;
	transition: all 0.3s ease-in-out;
	background: linear-gradient(
		to right,
		${blue},
		${darkBlue},
		${purple},
		${red},
		${orange},
		${lightOrange}
	);
	background-size: 200% 200%;
	animation: rainbow 2s ease-in-out infinite;
	background-clip: text;
	-webkit-background-clip: text;
	color: rgba(0, 0, 0, 1);
	display: block;
	text-align: center;
	text-transform: uppercase;

	&:hover {
		color: rgba(0, 0, 0, 0);
	}

	@keyframes rainbow {
		0% {
			background-position: left;
		}
		50% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;
