import React from 'react';
import {
	FooterContainer,
	CaptionText,
	CaptionTextContainer,
} from './Footer.Styles';
import SocialMedia from '../../components/globalcomponents/SocialMedia';

const Footer = () => (
	<FooterContainer>
		<SocialMedia />
		<CaptionTextContainer>
			<CaptionText>Created by Bilal Masters</CaptionText>
			<CaptionText>&#x40;2022 ALL RIGHTS RESERVED</CaptionText>
		</CaptionTextContainer>
	</FooterContainer>
);

export default Footer;
