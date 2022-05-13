import React, { useState, useEffect } from 'react';
import {
	SkillsBadgeContainer,
	SkillsBadgeContentContainer,
	SilssBadgeImgContainer,
	StyledPicture,
	SkillsBadgeDescription,
} from './SkillsBadge.Styles';
import { urlFor, client } from '../../client';

const SkillsBadge = () => {
	const [skills, setSkill] = useState([]);

	useEffect(() => {
		const query = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setSkill(data);
		});
	}, []);

	console.log(skills.sort((a, b) => a.id - b.id));

	const skillsSorted = skills.sort((a, b) => a.id - b.id);

	return (
		<SkillsBadgeContainer>
			{skillsSorted.map((item, index) => {
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
