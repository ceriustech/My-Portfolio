import React from 'react';
import {
	SkillsHeaderContainer,
	SkillsHeaderShape,
	SkillsHeaderTitle,
} from './SkillsSectionHeader.Styles';

const SkillsSectionHeader = () => {
	return (
		<SkillsHeaderContainer>
			<SkillsHeaderShape />
			<SkillsHeaderTitle>Skills</SkillsHeaderTitle>
		</SkillsHeaderContainer>
	);
};

export default SkillsSectionHeader;
