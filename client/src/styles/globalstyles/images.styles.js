import React from 'react';
import styled, { css } from 'styled-components';

export const PictureContainer = styled.picture`
	${(props) => {
		const displayFlex = props.styles?.displayFlexValue;
		const alignItems = props.styles?.alignItemValue;
		const width = props.styles?.widthValue;
		const height = props.styles?.heightValue;
		return css`
			display: ${displayFlex};
			justify-content: flex-start;
			align-items: ${alignItems};
			width: ${width};
			height: ${height};
		`;
	}}
`;

export const Source = styled.source`
	width: 100%;
`;

export const Image = styled.img`
	width: 100%;
`;
