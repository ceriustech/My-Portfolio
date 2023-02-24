import styled, { css } from 'styled-components';

export const PictureContainer = styled.picture`
	${(props) => {
		const displayFlex = props.styles?.displayFlexValue;
		const justifyContent = props.style?.justifyContentValue;
		const alignItems = props.styles?.alignItemValue;
		const width = props.styles?.widthValue;
		const height = props.styles?.heightValue;
		return css`
			display: ${displayFlex};
			justify-content: ${justifyContent};
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
	${(props) => {
		const height = props.styles?.heightValue;

		return css`
			width: 100%;
			height: ${height};
		`;
	}}
`;
