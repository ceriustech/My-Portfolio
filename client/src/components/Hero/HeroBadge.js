import React from 'react';
import {
	HeroBadgeContainer,
	HeroBadgeInnerDiv,
	HeroBadgeCmp,
	HeroBadgeTag,
} from '../../styles/components/Hero/HeroBadge.Styles';

const HeroBadge = () => {
	return (
		<HeroBadgeContainer>
			<HeroBadgeCmp>
				<span>👋</span>
				<HeroBadgeInnerDiv>
					<p>Hello, I'm</p>
					<h1>Bilal</h1>
				</HeroBadgeInnerDiv>
			</HeroBadgeCmp>
			<HeroBadgeTag>
				<p>Software Engineer</p>
				<p>Entrepreneur</p>
			</HeroBadgeTag>
		</HeroBadgeContainer>
	);
};

export default HeroBadge;
