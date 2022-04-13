import React, { useState, useEffect } from 'react';
import { AboutContainer } from '../../styles/containers/About.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { AboutTileContainer } from '../../styles/components/About/AboutTiles.Styles';
import { ServiceTitle } from '../../components/globalcomponents/SectionHeaders';
import { urlFor, client } from '../../client';

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		try {
			client.fetch(query).then((data) => {
				const tileData = data.splice(3).concat(data.splice(0));
				return setAbouts(tileData);
			});
		} catch (err) {
			console.error(err);
			return [];
		}
	}, []);

	return (
		<AboutContainer id="about-section">
			<ServiceTitle />
			<SectionWrapper flexDirection="row">
				{abouts.map((item, index) => (
					<AboutTileContainer
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						bordercolor={'#' + item?.color}
						key={index}
					>
						<img src={urlFor(item?.imgUrl)} alt={item.altText} />
						<h2 color={item?.color}>{item?.title}</h2>
						<p>{item?.description}</p>
					</AboutTileContainer>
				))}
			</SectionWrapper>
		</AboutContainer>
	);
};

export default About;
