import React from 'react';
import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { defaultColors } from '../globalstyles/colors.styles';
import { maxView } from '../globalstyles/mediaQueries.styles';

export const NavigationItem = styled.li`
	margin: 0 1rem;
	cursor: pointer;
	flex-direction: column;

	&:hover {
		div {
			background: ${defaultColors.root.secondaryColor};
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
	text-transform: uppercase;
	font-weight: 500;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: ${defaultColors.root.secondaryColor};
	}
`;
