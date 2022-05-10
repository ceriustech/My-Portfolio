import styled from 'styled-components';
import { defaultColors } from '../../styles/globalstyles/colors.styles';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';
import { Link } from 'react-router-dom';
import Picture from '../utility/Picture';

const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;

const white = defaultColors?.root.whiteColor;
const black = defaultColors?.root.blackColor;

export const BlogTileContainer = styled.div``;

export const BlogTileFigure = styled.figure``;

export const BlogImgContainer = styled.div``;

export const BlogTilePicture = styled(Picture)``;

export const BlogTileFigcaption = styled.figcaption``;

export const BlogTileHeader = styled.h2``;

export const BlogTileSpan = styled.span``;

export const BlogTileDescription = styled.p``;

export const BlogCountdownLink = styled(Link)``;

export const BlogLink = styled.a``;
