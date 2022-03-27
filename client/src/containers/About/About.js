import React, { useState, useEffect } from 'react';
import {
	AboutContainer,
	AboutInnerWrapper,
} from '../../styles/containers/About.Styles';
import { AboutTileContainer } from '../../styles/components/About/AboutTiles.Styles';
import { ServiceTitle } from '../../components/globalcomponents/SectionHeaders';
import aboutSectionData from '../../constants/about.data';

const About = () => {
	return (
		<AboutContainer>
			<ServiceTitle />
			<AboutInnerWrapper>
				{aboutSectionData.map((item, index) => (
					<AboutTileContainer
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						bordercolor={item?.color}
						key={index}
					>
						<img src={item?.image} alt={item.altText} />
						<h2 color={item?.color}>{item?.tileHeader}</h2>
						<p>{item?.tileDescription}</p>
					</AboutTileContainer>
				))}
			</AboutInnerWrapper>
		</AboutContainer>
	);
};

export default About;
