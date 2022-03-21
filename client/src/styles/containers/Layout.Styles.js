import React from 'react';
import styled, { css } from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';

const bgSectionColor = defaultColors.root.primary;

export const Layout = styled.div`
	font-family: 'DM Sans', sans-serif;

	& > section:nth-child(even) {
		background-color: ${bgSectionColor};
	}
`;
