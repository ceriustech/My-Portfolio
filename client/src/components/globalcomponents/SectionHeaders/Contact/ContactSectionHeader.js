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
			<ContactHeaderTitle>Contact</ContactHeaderTitle>
		</ContactHeaderContainer>
	);
};

export default ContactSectionHeader;
