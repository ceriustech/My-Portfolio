import React, { useState, useEffect } from 'react';
import {
	BlogTileContainer,
	BlogTileFigure,
	BlogOverlayWrapper,
	BlogImgContainer,
	BlogTagContainer,
	BlogTag,
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

	const routeID = {
		Lifengineered: 'lifengineered',
	};

	return (
		<BlogTileContainer>
			<SectionWrapper flexDirection="row">
				{blogTile.map((tile, index) => (
					<BlogTileFigure key={index}>
						<BlogOverlayWrapper>
							<BlogImgContainer>
								<BlogTilePicture
									srcset={urlFor(tile.imgUrl)}
									image={urlFor(tile.imgUrl)}
									altText={tile.altText}
									styles={{ height: '330px' }}
								/>
								<BlogTagContainer>
									<BlogTag>{tile.tags[0]}</BlogTag>
								</BlogTagContainer>
							</BlogImgContainer>
							<BlogTileFigcaption>
								<BlogTileHeader>{tile.title}</BlogTileHeader>
								<BlogTileSpan>By {tile.author}</BlogTileSpan>
								<BlogTileDescription>{tile.description}</BlogTileDescription>
								{tile.blogLink === undefined ? (
									<BlogCountdownLink
										to={`/countdown/:${routeID.Lifengineered}`}
										state={{ previousPath: routeID.Lifengineered }}
										rel="noreferrer"
									>
										Take a look
									</BlogCountdownLink>
								) : (
									<BlogLink href={tile.blogLink} rel="noreferrer">
										Take a look
									</BlogLink>
								)}
							</BlogTileFigcaption>
						</BlogOverlayWrapper>
					</BlogTileFigure>
				))}
			</SectionWrapper>
		</BlogTileContainer>
	);
};

export default BlogTile;
