import React from 'react';
import {
	ServiceHeaderContainer,
	ServiceHeaderShape,
	ServiceHeaderTitle,
} from './ServiceSectionHeader.Styles';

const ServicesSectionHeader = () => {
	return (
		<ServiceHeaderContainer>
			<ServiceHeaderShape />
			<ServiceHeaderTitle>About Me</ServiceHeaderTitle>
		</ServiceHeaderContainer>
	);
};

export default ServicesSectionHeader;
