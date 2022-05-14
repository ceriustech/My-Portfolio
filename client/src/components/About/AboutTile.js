import React, { useState, useEffect } from 'react';
import {
	AboutTileContainer,
	AboutTileInner,
	AboutTileHeader,
	AboutTileDescription,
} from './AboutTile.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { client } from '../../client';

const AboutTile = () => {
	const [aboutTile, setAboutTile] = useState([]);

	// useEffect(() => {

	// }, []);

	return (
		<AboutTileContainer>
			<SectionWrapper>
				<AboutTileInner>
					<AboutTileHeader></AboutTileHeader>
					<AboutTileDescription></AboutTileDescription>
				</AboutTileInner>
			</SectionWrapper>
		</AboutTileContainer>
	);
};

export default AboutTile;
