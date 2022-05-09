import React, { useState, useEffect } from 'react';
import {
	BlogTileContainer,
	BlogTileInner,
	BlogTilePicture,
	BlogTileOverlay,
	BlogTileHeader,
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
				<BlogTileInner class="hovereffect panel image-1 .hovereffect .overlay">
					<BlogTilePicture
						class="center portfolio_img "
						src="Img/LimbleMedia.png"
						alt="flat-design"
					/>
					<BlogTileOverlay class="overlay">
						<BlogTileHeader class="portfolio_h2">LimbleMedia</BlogTileHeader>

						<BlogCountdownLink to="/countdown">
							<p class="portfolio-link icon-links">Take a look</p>
						</BlogCountdownLink>
					</BlogTileOverlay>
				</BlogTileInner>
			</SectionWrapper>
		</BlogTileContainer>
	);
};

export default BlogTile;
