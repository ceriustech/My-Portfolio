import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';

const blue = defaultColors.gradient.blue;
const darkBlue = defaultColors.gradient.darkBlue;
const purple = defaultColors.gradient.purple;
const red = defaultColors.gradient.red;
const orange = defaultColors.gradient.orange;
const lightOrange = defaultColors.gradient.lightOrange;

const Icon = styled.i`
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

	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 99;
	cursor: pointer;
`;

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeLinecap="round"
		strokeWidth="3"
		{...props}
	/>
);

const transition = { duration: 0.3 };

const MobileMenuToggle = ({ toggle, isOpen }) => {
	return (
		<Icon onClick={toggle}>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 100%)' },
						open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 100%)' },
					}}
					transition={transition}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					stroke="hsl(0, 0%, 100%)"
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={transition}
				/>
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 100%)' },
						open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 100%)' },
					}}
					transition={transition}
				/>
			</svg>
		</Icon>
	);
};

export default MobileMenuToggle;
