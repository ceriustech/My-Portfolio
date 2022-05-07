import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';
import Picture from '../utility/Picture';

export const BlogTileContainer = styled.div`
	overflow: hidden;
	padding: 10px;
`;

export const BlogTileInner = styled.div`
	border-radius: 0.25rem;
	position: relative;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
	cursor: pointer;
	width: 320px;
`;

export const BlogTileImgContainer = styled.div``;

export const BlogTileDetailsContainer = styled.div`
	background: #fff;
	padding: 40px 35px;
	position: absolute;
	top: 75%;
	width: 100%;
	-webkit-transition: 0.5s ease;
	transition: 0.5s ease;

	&:hover {
		height: 100%;
		-webkit-transform: translate3d(0, -192px, 0);
		transform: translate3d(0, -192px, 0);
	}
`;

export const BlogTileHeader = styled.h2`
	color: #52b8ff;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	font-weight: 700;
	margin-bottom: 1.8em;
`;

export const BlogTileDetail = styled.p`
	color: #a4a4a4;
	letter-spacing: 1.5px;
	font-weight: 600;
	line-height: 1.5;
`;

export const BlogTileLinkContainer = styled.div`
	position: absolute;
	bottom: -15px;
	z-index: 3;
	width: 100%;
	padding-bottom: 15px;
	background: white;
`;

export const BlogLink = styled.a`
	color: #ff5253;
	letter-spacing: 1.5px;
	font-weight: 400;
	line-height: 1.5;
	display: inline-block;
	border-bottom: 2px solid #ff5253;
	margin-left: 35px;
	opacity: 0;
	-webkit-transition: all 0.4s ease-in-out 0.4s;
	transition: all 0.4s ease-in-out 0.4s;

	&:hover {
		opacity: 1;
	}
`;
