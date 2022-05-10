import React, { useState, useEffect } from 'react';
import {
	BlogTileContainer,
	BlogTileFigure,
	BlogImgContainer,
	BlogTilePicture,
	BlogTileFigcaption,
	BlogTileHeader,
	BlogTileSpan,
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

	console.log(blogTile.blogLink);

	return (
		<BlogTileContainer>
			<SectionWrapper flexDirection="row">
				<BlogTileFigure>
					<BlogImgContainer>
						<BlogTilePicture src="Img/LimbleMedia.png" alt="flat-design" />
					</BlogImgContainer>
					<BlogTileFigcaption>
						<BlogTileHeader>LimbleMedia</BlogTileHeader>
						<BlogTileSpan>by author</BlogTileSpan>
						<BlogCountdownLink to="/countdown">
							<p>Take a look</p>
						</BlogCountdownLink>
					</BlogTileFigcaption>
				</BlogTileFigure>
			</SectionWrapper>
		</BlogTileContainer>
	);
};

export default BlogTile;
