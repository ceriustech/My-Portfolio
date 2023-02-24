import React from 'react';
import {
	PictureContainer,
	Source,
	Image,
} from '../../styles/globalstyles/images.styles';

const Picture = ({ srcset, maxView, image, altText, ...props }) => {
	return (
		<PictureContainer styles={props}>
			<Source srcSet={srcset} media={maxView} alt={altText} />
			<Image src={image} alt={altText} styles={props} />
		</PictureContainer>
	);
};

export default Picture;
