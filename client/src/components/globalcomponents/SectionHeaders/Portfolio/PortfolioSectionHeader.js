import React from 'react';
import {
	PortfolioHeaderContainer,
	PortfolioHeaderShape,
	PortfolioHeaderTitle,
} from './PortfolioSectionHeader.Styles';

const PortfolioSectionHeader = () => {
	return (
		<PortfolioHeaderContainer>
			<PortfolioHeaderShape />
			<PortfolioHeaderTitle>Portfolio</PortfolioHeaderTitle>
		</PortfolioHeaderContainer>
	);
};

export default PortfolioSectionHeader;
