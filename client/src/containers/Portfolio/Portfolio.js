import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import PortfolioButtonFilter from '../../components/PortfolioButtonFilter/PortfolioButtonFilter';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import PortfolioTile from '../../components/Portfolio/PortfolioTiles';

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState('All');

	const handlePortfolioFilter = (item) => {
		console.log('FILTER');
	};

	const item = '';
	return (
		<PortfolioContainer id="portfolio-section">
			<PortfolioHeader />
			<SectionWrapper flexDirection="column">
				<PortfolioButtonFilter
					className={activeFilter === item ? 'item-active' : ''}
					handlePortfolioFilter={() => handlePortfolioFilter(item)}
				/>
				<PortfolioTile />
			</SectionWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
