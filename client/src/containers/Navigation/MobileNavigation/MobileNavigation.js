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

const MobileNavigation = ({ children }) => {
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => setToggle(!toggle);

	const mobileListContainer = (
		<MobileListContainer>{children}</MobileListContainer>
	);

	const ref = useRef();
	const inVew = useIntersection(ref, '0px');

	// if (inVew) {
	// 	console.log('%cIN VIEW', 'font-size: 2em; color: red');
	// }

	return (
		<MobileNavContainer image={images} className="mobile-nav-container">
			<MobileMenuToggleContainer>
				<MobileMenuToggle toggle={toggleHandler} />
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
