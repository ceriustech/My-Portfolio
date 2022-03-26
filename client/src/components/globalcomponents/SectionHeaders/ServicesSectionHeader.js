import React from 'react';
import {
	ServiceHeaderContainer,
	ServiceHeaderShape,
	ServiceHeaderTitle,
} from '../../../styles/components/globalcomponents/SectionHeaders/ServiceSectionHeader.Styles';

const ServicesSectionHeader = () => {
	return (
		<ServiceHeaderContainer>
			<ServiceHeaderShape />
			<ServiceHeaderTitle>Services</ServiceHeaderTitle>
		</ServiceHeaderContainer>
	);
};

export default ServicesSectionHeader;
