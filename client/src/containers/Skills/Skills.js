import React from 'react';
import { SkillsContainer } from '../../styles/containers/Skills.Styles';
import { SkillsHeader } from '../../components/globalcomponents/SectionHeaders';
import SkillsBadge from '../../components/Skills/SkillsBadge';

const Skills = () => {
	return (
		<SkillsContainer id="skills-section">
			<SkillsHeader />
			<SkillsBadge />
		</SkillsContainer>
	);
};

export default Skills;
