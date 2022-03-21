import React from 'react';
import {
	HeroBadgeContainer,
	HeroBadgeCmp,
	HeroBadgeTag,
} from '../../styles/components/Hero/HeroBadge.Styles';

const HeroBadge = () => {
	return (
		<HeroBadgeContainer>
			<HeroBadgeCmp>
				<span>👋</span>
				<div style={{ marginLeft: 20 }}>
					<p>Hello, I am</p>
					<h1>Bilal</h1>
				</div>
			</HeroBadgeCmp>
			<HeroBadgeTag>
				<p>Software Engineer</p>
				<p>Entrepreneur</p>
			</HeroBadgeTag>
		</HeroBadgeContainer>
	);
};

export default HeroBadge;
