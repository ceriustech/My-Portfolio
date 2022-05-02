import React from 'react';
import {
	SkillsBadgeContainer,
	SkillsBadgeContentContainer,
	SilssBadgeImgContainer,
	StyledPicture,
	SkillsBadgeDescription,
} from '../../styles/components/SkillsBadge/SkillsBadge.Styles';
import { skillsData } from '../../constants/skills.data';

const SkillsBadge = () => {
	return (
		<SkillsBadgeContainer>
			{skillsData.map((item) => {
				return (
					<SkillsBadgeContentContainer>
						<SilssBadgeImgContainer backgroundColor={item.color}>
							<StyledPicture
								srcset={item.image}
								image={item.image}
								altText={item.title}
								displayFlexValue={'flex'}
								alignItemValue={'center'}
								widthValue={'50%'}
							/>
						</SilssBadgeImgContainer>
						<SkillsBadgeDescription>{item.title}</SkillsBadgeDescription>
					</SkillsBadgeContentContainer>
				);
			})}
		</SkillsBadgeContainer>
	);
};

export default SkillsBadge;
