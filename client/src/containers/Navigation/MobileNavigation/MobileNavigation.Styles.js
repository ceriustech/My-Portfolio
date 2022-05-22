import styled from 'styled-components';
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
	height: 450px;
	max-width: 44%;
	background-color: #fff;
	-webkit-box-shadow: 1px 1px 15px 1px #a18a8a;
	box-shadow: 1px 1px 15px 1px #a18a8a;
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	transform: translateX(4em);
	user-select: none;
	padding: 1em 2.5em;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
`;
