import React from 'react';
import {
	AboutHeaderContainer,
	AboutHeaderShape,
	AboutHeaderTitle,
} from './AboutSectionHeader.Styles';

const AboutSectionHeader = () => {
	return (
		<AboutHeaderContainer>
			<AboutHeaderShape />
			<AboutHeaderTitle>About</AboutHeaderTitle>
		</AboutHeaderContainer>
	);
};

export default AboutSectionHeader;
