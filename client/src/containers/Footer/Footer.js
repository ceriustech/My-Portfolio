import React from 'react';
import {
	FooterContainer,
	CaptionText,
} from '../../styles/containers/Footer.Styles';
import SocialMedia from '../../components/globalcomponents/SocialMedia';

const Footer = () => (
	<FooterContainer>
		<SocialMedia />
		<CaptionText>
			Created by Bilal Masters
			<br />
			<span>&#x40;2022 ALL RIGHTS RESERVED</span>
		</CaptionText>
	</FooterContainer>
);

export default Footer;
