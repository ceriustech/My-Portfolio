import styled from 'styled-components';
import { defaultColors } from '../../globalstyles/colors.styles';
import { maxView } from '../../globalstyles/mediaQueries.styles';
import Picture from '../../../components/utility/Picture';

const maxViewMobileL = maxView?.mobileL;

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
	margin: 1rem;
`;

export const SilssBadgeImgContainer = styled.div`
	background-color: ${(props) => props.backgroundColor || ''};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 135px;
	width: 135px;
`;

export const StyledPicture = styled(Picture)``;

export const SkillsBadgeDescription = styled.p``;
