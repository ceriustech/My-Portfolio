import React from 'react';
import { ServicesContainer } from './Services.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { ServiceTitle } from '../../components/globalcomponents/SectionHeaders';
import ServicesTile from '../../components/Services/ServicesTile';

const Services = () => {
	return (
		<ServicesContainer id="Services-section">
			<ServiceTitle />
			<SectionWrapper flexDirection="row">
				<ServicesTile />
			</SectionWrapper>
		</ServicesContainer>
	);
};

export default Services;
