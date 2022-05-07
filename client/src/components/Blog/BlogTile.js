import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	BlogTileContainer,
	BlogTileInner,
	BlogTileImgContainer,
	BlogTileDetailsContainer,
	BlogTileHeader,
	BlogTileDetail,
	BlogTileLinkContainer,
	BlogLink,
} from './BlogTile.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import Picture from '../utility/Picture';
import { urlFor, client } from '../../client';

const BlogTile = () => {
	const [blogTile, setBlogTile] = useState([]);

	useEffect(() => {
		const query = '*[_type == "blog"]';

		client.fetch(query).then((data) => {
			setBlogTile(data);
		});
	}, []);

	return (
		<BlogTileContainer>
			<SectionWrapper flexDirection="row">
				{blogTile.map((tile, index) => (
					<BlogTileInner key={index}>
						<BlogTileImgContainer>
							<Picture
								className="img"
								image={urlFor(tile.imgUrl)}
								srcset={urlFor(tile.imgUrl)}
								altText="blog image"
							/>
						</BlogTileImgContainer>
						<BlogTileDetailsContainer>
							<BlogTileHeader>{tile.title}</BlogTileHeader>
							<BlogTileDetail>{tile.description}</BlogTileDetail>
						</BlogTileDetailsContainer>
						<BlogTileLinkContainer>
							{tile.blogLink === undefined ? (
								<Link to="/countdown/:lifengineered" rel="noreferrer">
									Read More
								</Link>
							) : (
								<BlogLink href="PageCountdown/countdown.html">
									Read More
								</BlogLink>
							)}
						</BlogTileLinkContainer>
					</BlogTileInner>
				))}
			</SectionWrapper>
		</BlogTileContainer>
	);
};

export default BlogTile;
