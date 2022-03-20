import React from 'react';
import {
	PictureContainer,
	Source,
	Image,
} from '../styles/globalstyles/images.styles';

const Picture = ({ srcset, maxView, image, altText, ...props }) => {
	return (
		<PictureContainer styles={props}>
			<Source srcSet={srcset} media={maxView} />
			<Image src={image} alt={altText} />
		</PictureContainer>
	);
};

export default Picture;