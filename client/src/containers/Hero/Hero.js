import React from 'react';
import {
	HeroContainer,
	HeroHeaderInfo,
} from '../../styles/containers/Hero.Styles';
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
		</HeroContainer>
	);
};

export default Hero;
