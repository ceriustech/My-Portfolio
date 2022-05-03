import React, { useState, useEffect } from 'react';
import {
	SkillsBadgeContainer,
	SkillsBadgeContentContainer,
	SilssBadgeImgContainer,
	StyledPicture,
	SkillsBadgeDescription,
} from '../../styles/components/SkillsBadge/SkillsBadge.Styles';
import { urlFor, client } from '../../client';

const SkillsBadge = () => {
	const [skills, setSkill] = useState([]);

	useEffect(() => {
		const query = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setSkill(data);
		});
	}, []);

	console.log(skills);

	return (
		<SkillsBadgeContainer>
			{skills.map((item, index) => {
				return (
					<SkillsBadgeContentContainer key={index}>
						<SilssBadgeImgContainer backgroundColor={item.bgColor}>
							<StyledPicture
								srcset={urlFor(item.icon)}
								image={urlFor(item.icon)}
								altText={item.name}
								displayFlexValue={'flex'}
								justifyContentValue={'center'}
								alignItemValue={'center'}
								widthValue={'50%'}
							/>
						</SilssBadgeImgContainer>
						<SkillsBadgeDescription>{item.name}</SkillsBadgeDescription>
					</SkillsBadgeContentContainer>
				);
			})}
		</SkillsBadgeContainer>
	);
};

export default SkillsBadge;
