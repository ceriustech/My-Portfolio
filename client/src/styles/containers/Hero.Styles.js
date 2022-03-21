import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	width: 100%;
	height: 100%;
	flex-direction: row;
	padding: 6rem 2rem 0rem;
`;

export const HeroHeaderInfo = styled(motion.div)`
	flex: 0.65;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 100%;
	margin: 0 2rem;
`;
