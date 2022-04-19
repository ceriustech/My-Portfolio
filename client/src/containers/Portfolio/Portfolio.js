import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import PortfolioButtonFilter from '../../components/PortfolioButtonFilter/PortfolioButtonFilter';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import PortfolioTile from '../../components/Portfolio/PortfolioTiles';

const Portfolio = () => {
	return (
		<PortfolioContainer id="portfolio-section">
			<PortfolioHeader />
			<SectionWrapper flexDirection="column">
				<PortfolioButtonFilter />
				<PortfolioTile />
			</SectionWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
