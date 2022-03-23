import React from 'react';
import {
	SkipNavigationContainer,
	SkipNavigationLink,
} from './SkipNavigation.Styles';

const SkipNavigation = () => {
	return (
		<SkipNavigationContainer>
			<SkipNavigationLink href="#main">Skip to main</SkipNavigationLink>
		</SkipNavigationContainer>
	);
};

export default SkipNavigation;
