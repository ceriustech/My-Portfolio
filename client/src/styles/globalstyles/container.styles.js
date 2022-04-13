import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
	${(props) => {
		let { flexDirection } = props;

		if (flexDirection === 'row') {
			flexDirection = 'row';
		}
		if (flexDirection === 'row-reverse') {
			flexDirection = 'row-reverse';
		}
		if (flexDirection === 'column') {
			flexDirection = 'column';
		}
		if (flexDirection === 'column-reverse') {
			flexDirection = 'column-reverse';
		}

		return css`
			display: flex;
			flex-direction: ${flexDirection};
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 25px;
			margin: 0 auto;
			max-width: 1450px;
		`;
	}}
`;
