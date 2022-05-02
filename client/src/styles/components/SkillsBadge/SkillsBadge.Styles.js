import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { maxView } from '../../globalstyles/mediaQueries.styles';
import Picture from '../../../components/utility/Picture';

const maxViewVobileL = maxView?.mobileL;
const maxViewMobileS = maxView?.mobileS;

export const SkillsBadgeContainer = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
`;

export const SkillsBadgeContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 1rem 1rem 1.5rem;

	@media screen and ${maxViewVobileL} {
		margin: 1rem 0.75rem 1.5rem;
	}
`;

export const SilssBadgeImgContainer = styled.div`
	background-color: ${(props) => props.backgroundColor || ''};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 180px;
	width: 180px;

	@media screen and ${maxViewVobileL} {
		height: 135px;
		width: 135px;
	}

	@media screen and ${maxViewMobileS} {
		height: 125px;
		width: 125px;
	}
`;

export const StyledPicture = styled(Picture)``;

export const SkillsBadgeDescription = styled.p`
	font-size: 1.25em;
	font-weight: 600;
	margin-top: 10px;
`;
