import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColors } from '../../../styles/globalstyles/colors.styles';

const grayColor = defaultColors.root.grayColor;

export const SocialMediaContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	max-width: 400px;
	margin: 0 auto;
`;

export const IconLink = styled(Link)`
	background-color: #fff;
	border-radius: 50%;
	border: 1px solid ${grayColor};
	height: 60px;
	width: 60px;
	display: flex;
	justify-content: center;
	font-size: 2em;
	color: ${grayColor};
	padding: 10px;
	-webkit-transition: 1.2s;
	-webkit-transition: 1.2s ease;
	transition: 1.2s ease;

	&:hover {
		color: ${(props) => props.color};
	}
`;

export const SocialMediaIcon = styled.i`
	-webkit-transition: all 0.6s ease-in-out;
	transition: all 0.6s ease-in-out;
`;