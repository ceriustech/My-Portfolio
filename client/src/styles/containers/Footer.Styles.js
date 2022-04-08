import styled, { css } from 'styled-components';
import { defaultColors } from '../globalstyles/colors.styles';

const grayColor = defaultColors.root.grayColor;

export const FooterContainer = styled.section`
	padding: 100px 15px;
`;

export const CaptionText = styled.p`
	font-size: 1rem;
	color: ${grayColor};
	font-weight: 600;
	margin: 20px 0;
	text-transform: capitalize;
	text-align: center;

	span {
		margin: 10px 0;
	}
`;
