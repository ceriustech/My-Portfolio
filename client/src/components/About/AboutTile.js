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

	useEffect(() => {
		const query = '*[_type == "about"]';

		try {
			client.fetch(query).then((data) => {
				const tileData = data;
				return setAboutTile(tileData);
			});
		} catch (err) {
			console.error(err);
			return [];
		}
	}, []);

	console.log('ABOUT DATA:', aboutTile[0]?.title);

	return (
		<AboutTileContainer>
			<SectionWrapper>
				<AboutTileInner>
					<AboutTileHeader>{aboutTile[0]?.title}</AboutTileHeader>
					<AboutTileDescription>
						{aboutTile[0]?.description}
					</AboutTileDescription>
				</AboutTileInner>
			</SectionWrapper>
		</AboutTileContainer>
	);
};

export default AboutTile;
