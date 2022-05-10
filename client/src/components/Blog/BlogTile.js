import React, { useState, useEffect } from 'react';
import {
	BlogTileContainer,
	BlogTileFigure,
	BlogImgContainer,
	BlogTilePicture,
	BlogTileFigcaption,
	BlogTileHeader,
	BlogTileSpan,
	BlogTileDescription,
	BlogCountdownLink,
	BlogLink,
} from './BlogTile.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { urlFor, client } from '../../client';

const BlogTile = () => {
	const [blogTile, setBlogTile] = useState([]);

	useEffect(() => {
		const query = '*[_type == "blog"]';

		client.fetch(query).then((data) => {
			setBlogTile(data);
		});
	}, []);

	console.log(blogTile);

	return (
		<BlogTileContainer>
			<SectionWrapper flexDirection="row">
				{blogTile.map((tile, index) => (
					<BlogTileFigure key={index}>
						<BlogImgContainer>
							<BlogTilePicture
								src={urlFor(tile.imgUrl)}
								image={urlFor(tile.imgUrl)}
								alt={tile.altText}
							/>
						</BlogImgContainer>
						<BlogTileFigcaption>
							<BlogTileHeader>{tile.title}</BlogTileHeader>
							<BlogTileSpan>by {tile.author}</BlogTileSpan>
							<BlogTileDescription>{tile.description}</BlogTileDescription>
							{tile.blogLink === undefined ? (
								<BlogCountdownLink to="/countdown">
									Take a look
								</BlogCountdownLink>
							) : (
								<BlogLink href={tile.blogLink} rel="noreferrer">
									Take a look
								</BlogLink>
							)}
						</BlogTileFigcaption>
					</BlogTileFigure>
				))}
			</SectionWrapper>
		</BlogTileContainer>
	);
};

export default BlogTile;
