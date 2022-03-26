import styled, { css } from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';

const white = defaultColors?.root.whiteColor;
const gray = defaultColors?.root.grayColor;
const lightGray = defaultColors?.root.lightGrayColor;

export const AboutTileContainer = styled.div`
	background-color: ${white};
	border-bottom: 3px solid ${(props) => props.backgroundColor};
	border-radius: 0.5rem;
	-webkit-box-shadow: 0px 2px 11px 4px #e0e0e0;
	box-shadow: 0px 2px 11px 4px #e0e0e0;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
	padding: 40px;
	margin: 15px;
	width: 25%;

	img {
		width: 65%;
		height: 170px;
		border-radius: 15px;
		object-fit: cover;
	}

	h2 {
		font-size: 1.2em;
		font-weight: 800;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin: 40px 0;
	}

	p {
		color: ${gray};
		font-size: 1.5rem;
		line-height: 1.5;
		margin-bottom: 50px;
	}
`;
