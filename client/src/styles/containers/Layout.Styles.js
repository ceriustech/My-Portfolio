import React from 'react';
import styled, { css } from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';

const bgColorPrimary = defaultColors.root.primary;

export const Layout = styled.div`
	background-color: ${bgColorPrimary};
	font-family: 'DM Sans', sans-serif;
`;
