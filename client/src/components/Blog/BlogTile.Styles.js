import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';
import { Link } from 'react-router-dom';
import Picture from '../utility/Picture';

const maxViewMobileL = maxView?.mobileL;
const maxViewMobileS = maxView?.mobileS;

const white = defaultColors?.root.whiteColor;
const lightPink = defaultColors?.lightBackground.lightPink;

export const BlogTileContainer = styled.div`
	-webkit-perspective: 1700px;
	-moz-perspective: 1700px;
	perspective: 1700px;
	-webkit-perspective-origin: 0 50%;
	-moz-perspective-origin: 0 50%;
	perspective-origin: 0 50%;
`;

export const BlogTileFigure = styled.figure`
	display: inline-block;
	margin: 0;
	padding: 20px;
	text-align: left;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
	height: 400px;

	&:hover {
		img {
			-webkit-transform: translateX(25%);
			-moz-transform: translateX(25%);
			-ms-transform: translateX(25%);
			transform: translateX(25%);
		}

		figcaption {
			opacity: 1;
			-webkit-transform: rotateY(0deg);
			-moz-transform: rotateY(0deg);
			transform: rotateY(0deg);
			-webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
			-moz-transition: -moz-transform 0.4s, opacity 0.1s;
			transition: transform 0.4s, opacity 0.1s;
		}
	}

	@media screen and ${maxViewMobileL} {
		height: 330px;
		padding: 10px 20px;
	}
`;

export const BlogOverlayWrapper = styled.div`
	position: relative;
`;

export const BlogImgContainer = styled.div`
	overflow: hidden;
	width: 440px;

	img {
		object-fit: cover;
		-webkit-transition: -webkit-transform 0.4s;
		-moz-transition: -moz-transform 0.4s;
		transition: transform 0.4s;
		width: 100%;
		height: 330px;
	}

	@media screen and ${maxViewMobileL} {
		width: 320px;
		height: 300px;
	}

	@media screen and ${maxViewMobileS} {
		width: 300px;
		height: 300px;
	}
`;

export const BlogTilePicture = styled(Picture)``;

export const BlogTileFigcaption = styled.figcaption`
	height: 100%;
	width: 50%;
	opacity: 0;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform-origin: 0 0;
	-moz-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: rotateY(-90deg);
	-moz-transform: rotateY(-90deg);
	transform: rotateY(-90deg);
	-webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
	-moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
	transition: transform 0.4s, opacity 0.1s 0.3s;
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	background: #2c3f52;
	color: ${lightPink};
`;

export const BlogTileHeader = styled.h2`
	color: ${white};
	margin-bottom: 5px;
`;

export const BlogTileSpan = styled.span``;

export const BlogTileDescription = styled.p`
	color: ${white};
	margin-top: 10px;
`;

export const BlogCountdownLink = styled(Link)`
	text-align: center;
	padding: 5px 10px;
	border-radius: 2px;
	display: inline-block;
	background: ${lightPink};
	color: ${white};
	position: absolute;
	bottom: 20px;
	right: 20px;
	transition: all 0.3s ease;

	&:hover {
		background: ${white};
		color: ${lightPink};
	}
`;

export const BlogLink = styled.a`
	text-align: center;
	padding: 5px 10px;
	border-radius: 2px;
	display: inline-block;
	background: ${lightPink};
	color: ${white};
	position: absolute;
	bottom: 20px;
	right: 20px;
	transition: all 0.3s ease;

	&:hover {
		background: ${white};
		color: ${lightPink};
	}
`;
