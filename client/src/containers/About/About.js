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
						backgroundColor={item?.bottomBorderColor}
						key={index}
					>
						<img src={item?.image} alt={item.altText} />
						<h2>{item?.tileHeader}</h2>
						<p>{item?.tileDescription}</p>
					</AboutTileContainer>
				))}
			</AboutInnerWrapper>
		</AboutContainer>
	);
};

export default About;
