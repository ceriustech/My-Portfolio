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
			<ServiceHeaderTitle>what I do</ServiceHeaderTitle>
		</ServiceHeaderContainer>
	);
};

export default ServicesSectionHeader;
