import React from 'react';
import {
	HeroContainer,
	HeroHeaderInfo,
} from '../../styles/containers/Hero.Styles';
import {
	HeroMainContainer,
	Title,
	HeroImageContainer,
} from '../../styles/components/Hero/HeroMain.Styles';
import HeroBadge from '../../components/Hero/HeroBadge';
import { images } from '../../constants/Images';

const Hero = () => {
	return (
		<HeroContainer>
			<HeroHeaderInfo
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<HeroBadge />
			</HeroHeaderInfo>
			<HeroMainContainer
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
			>
				<Title>
					<span>Creative</span>
					<br />
					<span>Software</span>
					<br />
					<span>Development</span>
				</Title>
				<HeroImageContainer
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
				/>
			</HeroMainContainer>
		</HeroContainer>
	);
};

export default Hero;
