import styled from 'styled-components';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const maxViewPort = maxView?.mobileL;

export const BlogContainer = styled.section`
	padding: 80px 0;

	@media screen and ${maxViewPort} {
		padding: 40px 0;
	}
`;
