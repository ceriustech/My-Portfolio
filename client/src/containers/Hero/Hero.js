import React from 'react';
import {
	HeroContainer,
	HeroContainerInnerWrapper,
	HeroHeaderInfo,
} from './Hero.Styles';
import {
	HeroMainContainer,
	Title,
	HeroImageContainer,
	HeroImage,
} from './HeroMain.Styles';
import {
	HeroCircleImageWrapper,
	HeroCircleContainer,
} from './HeroVariantImages.Styles';
import HeroBadge from '../../components/Hero/HeroBadge';
import { images } from '../../constants/Images';

const Hero = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<HeroContainer>
			<HeroContainerInnerWrapper>
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
						<span>Software</span>
						<span>Development</span>
					</Title>
					<HeroImageContainer>
						<HeroImage
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: 'easeInOut' }}
							src={images.circle}
							alt="profile circle image"
						/>
					</HeroImageContainer>
				</HeroMainContainer>
				<HeroCircleImageWrapper
					variants={scaleVariants}
					whileInView={scaleVariants.whileInView}
				>
					{[images.react, images.api, images.node].map((circle, index) => (
						<HeroCircleContainer key={`circle-${index}`}>
							<img src={circle} alt="profile_bg" />
						</HeroCircleContainer>
					))}
				</HeroCircleImageWrapper>
			</HeroContainerInnerWrapper>
		</HeroContainer>
	);
};

export default Hero;
