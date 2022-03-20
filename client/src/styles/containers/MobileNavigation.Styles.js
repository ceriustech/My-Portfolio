import React from 'react';
import styled, { css } from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';
import { motion } from 'framer-motion';

export const MobileNavContainer = styled.div`
	position: relative;
	z-index: 99;
`;

export const MobileMenuToggleContainer = styled.div`
	display: flex;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const MobileListContainer = styled(motion.ul)`
	min-width: 300px;
	width: 100%;
	max-width: 44%;
	height: 100%;
	background-color: #fff;
	box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	transform: translateX(4em);
	user-select: none;
	padding: 1em 2.5em;
`;
