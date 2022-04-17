import React from 'react';
import {
	BlogHeaderContainer,
	BlogHeaderShape,
	BlogHeaderTitle,
} from './BlogSectionHeader.Styles';

const BlogSectionHeader = () => {
	return (
		<BlogHeaderContainer>
			<BlogHeaderShape />
			<BlogHeaderTitle>Blog</BlogHeaderTitle>
		</BlogHeaderContainer>
	);
};

export default BlogSectionHeader;
