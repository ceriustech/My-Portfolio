import React from 'react';
import { BlogContainer } from './Blog.Styles';
import { BlogHeader } from '../../components/globalcomponents/SectionHeaders';
import BlogTile from '../../components/Blog/BlogTile';

const Blog = () => {
	return (
		<BlogContainer id="blog-section">
			<BlogHeader />
			<BlogTile />
		</BlogContainer>
	);
};

export default Blog;
