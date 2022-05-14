import React from 'react';
import { AboutContainer } from './About.Styles';
import { AboutHeader } from '../../components/globalcomponents/SectionHeaders';
import AboutTile from '../../components/About/AboutTile';

const About = () => {
	return (
		<AboutContainer id="about-section">
			<AboutHeader />
			<AboutTile />
		</AboutContainer>
	);
};

export default About;
