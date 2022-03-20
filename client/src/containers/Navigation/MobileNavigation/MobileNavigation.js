import React, { useState, useRef } from 'react';
import MobileMenuToggle from '../../../components/globalcomponents/MobileMenuToggle.js';
import { motion } from 'framer-motion';
import {
	MobileNavContainer,
	MobileMenuToggleContainer,
	MobileListContainer,
} from '../../../styles/containers/MobileNavigation.Styles';
import { images } from '../../../constants/Images';
import useIntersection from '../../../custom_hooks/intersectionObserver';

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

const commonVariants = {
	show: {
		transform: 'translateX(0em)',
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.01,
		},
	},
	hide: {
		transform: 'translateX(5em)',
		opacity: 0,
	},
};

const commonTransition = { type: 'spring', duration: 0.05 };

const MobileNavigation = ({ children }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	const mobileListContainer = (
		<MobileListContainer>{children}</MobileListContainer>
	);

	const ref = useRef();
	const inVew = useIntersection(ref, '0px');

	// if (inVew) {
	// 	console.log('%cIN VIEW', 'font-size: 2em; color: red');
	// }

	return (
		<MobileNavContainer className="mobile-nav-container">
			<MobileMenuToggleContainer>
				<MobileMenuToggle toggle={toggleMenu} isOpen={isOpen} />
			</MobileMenuToggleContainer>

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
