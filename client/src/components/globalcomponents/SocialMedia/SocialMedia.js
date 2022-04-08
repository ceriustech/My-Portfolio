import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import {
	SocialMediaContainer,
	SocialMediaIcon,
	IconLink,
} from './SocialMedia.Styles';

const socialIcons = [
	{
		id: 'linkedin',
		icon: <FaLinkedinIn />,
		url: '/',
		color: '#007bb5',
	},
	{
		id: 'twitter',
		icon: <BsTwitter />,
		url: '/',
		color: '#1da1f2',
	},
	{
		id: 'instagram',
		icon: <BsInstagram />,
		url: '/',
		color:
			'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);',
	},
];

const SocialMedia = () => (
	<SocialMediaContainer>
		{socialIcons.map((item) => (
			<IconLink to={item.url} color={item.color}>
				<SocialMediaIcon key={item.id}>{item.icon}</SocialMediaIcon>
			</IconLink>
		))}
	</SocialMediaContainer>
);

export default SocialMedia;
