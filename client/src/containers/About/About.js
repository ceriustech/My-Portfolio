import React from 'react';
import { AboutContainer } from './About.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { ServiceTitle } from '../../components/globalcomponents/SectionHeaders';
import AboutTile from '../../components/About/AboutTile';

const About = () => {
	return (
		<AboutContainer id="about-section">
			<ServiceTitle />
			<SectionWrapper flexDirection="row">
				<AboutTile />
			</SectionWrapper>
		</AboutContainer>
	);
};

export default About;
