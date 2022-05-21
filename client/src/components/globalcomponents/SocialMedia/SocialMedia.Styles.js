import styled from 'styled-components';
import { defaultColors } from '../../../styles/globalstyles/colors.styles';

const grayColor = defaultColors.root.grayColor;
const whiteColor = defaultColors.root.whiteColor;

export const SocialMediaContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	max-width: 400px;
	margin: 0 auto;
`;

export const IconLink = styled.a`
	background-color: ${whiteColor};
	border-radius: 50%;
	border: 1px solid ${grayColor};
	cursor: pointer;
	height: 60px;
	width: 60px;
	display: flex;
	justify-content: center;
	font-size: 2em;
	color: ${grayColor};
	padding: 10px;
	-webkit-transition: 1.2s;
	-webkit-transition: 1.2s ease;
	transition: 0.6s ease;

	&:hover {
		background: ${(props) => props.color};
		color: ${whiteColor};
	}
`;

export const SocialMediaIcon = styled.i``;
