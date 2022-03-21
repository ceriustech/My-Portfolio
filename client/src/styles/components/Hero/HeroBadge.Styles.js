import styled, { css } from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';

const white = defaultColors.root.whiteColor;

export const HeroBadgeContainer = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;

	p {
		line-height: 1.5;
	}
`;

export const HeroBadgeCmp = styled.div`
	background: ${white};
	border-radius: 15px;
	box-shadow: 0 0 20px rgb(0 0 0 / 10%);
	flex-direction: row;
	padding: 1rem 2rem;
	width: auto;
	align-items: center;
	display: flex;
	justify-content: center;

	h1 {
		font-size: 2.75rem;
		font-weight: 800;
		text-align: left;
		text-transform: capitalize;
	}

	p {
		font-size: 0.8rem;
		line-height: 1.5;
		text-align: left;
	}
`;

export const HeroBadgeTag = styled.div`
	background: ${white};
	border-radius: 15px;
	box-shadow: 0 0 20px rgb(0 0 0 / 10%);
	flex-direction: row;
	padding: 1rem 2rem;
	width: auto;
	flex-direction: column;
	margin-top: 3rem;
	align-items: center;
	display: flex;
	justify-content: center;

	p {
		width: 100%;
		text-transform: uppercase;
		text-align: right;
	}
`;
