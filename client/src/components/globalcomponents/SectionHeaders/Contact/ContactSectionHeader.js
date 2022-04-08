import React from 'react';
import {
	ContactHeaderContainer,
	ContactHeaderShape,
	ContactHeaderTitle,
} from './ContactSectionHeader.Styles';

const ContactSectionHeader = () => {
	return (
		<ContactHeaderContainer>
			<ContactHeaderShape />
			<ContactHeaderTitle>Get in touch</ContactHeaderTitle>
		</ContactHeaderContainer>
	);
};

export default ContactSectionHeader;
