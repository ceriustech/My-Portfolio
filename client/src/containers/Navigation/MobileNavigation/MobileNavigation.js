import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import MobileMenuToggle from '../../../components/globalcomponents/MobileMenuToggle.js';
import {
	MobileNavContainer,
	MobileMenuToggleContainer,
	MobileListContainer,
} from './MobileNavigation.Styles';

const menuVariants = {
	open: {
		transform: 'translateX(3%)',
	},
	closed: {
		transform: 'translateX(103%)',
	},
};

const menuTransition = {
	type: 'spring',
	duration: 1,
	stiffness: 33,
	delay: 0.1,
};

const MobileNavigation = ({ children }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<MobileNavContainer className="mobile-nav-container">
			<MobileMenuToggleContainer>
				<MobileMenuToggle toggle={toggleMenu} isOpen={isOpen} />
			</MobileMenuToggleContainer>
			<AnimatePresence>
				{isOpen && (
					<MobileListContainer
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 300, opacity: 0 }}
						variants={menuVariants}
						transition={menuTransition}
					>
						{children}
					</MobileListContainer>
				)}
			</AnimatePresence>

			{/* {toggle && (
				<motion.div
					whileInView={{ x: [300, 0] }}
					transition={{ duration: 0.85, ease: 'easeInOut' }}
				>
					{mobileListContainer}
				</motion.div>
			)} */}
		</MobileNavContainer>
	);
};

export default MobileNavigation;
