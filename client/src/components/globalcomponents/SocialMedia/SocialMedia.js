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
		url: 'https://www.linkedin.com/in/bilalmasters/',
		color: '#007bb5',
		ariaText: 'linkedin',
	},
	{
		id: 'twitter',
		icon: <BsTwitter />,
		url: 'https://twitter.com/billmasters66',
		color: '#1da1f2',
		ariaText: 'twitter',
	},
	{
		id: 'instagram',
		icon: <BsInstagram />,
		url: 'https://www.instagram.com/bill_cmasters/',
		color:
			'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);',
		ariaText: 'instagram',
	},
];

const SocialMedia = () => (
	<SocialMediaContainer>
		{socialIcons.map((item) => (
			<IconLink
				key={item.id}
				href={item.url}
				aria-label={item.ariaText}
				color={item.color}
				target="_blank"
			>
				<SocialMediaIcon>{item.icon}</SocialMediaIcon>
			</IconLink>
		))}
	</SocialMediaContainer>
);

export default SocialMedia;
