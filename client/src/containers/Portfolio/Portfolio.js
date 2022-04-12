import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import PortfolioButtonFilter from '../../components/PortfolioButtonFilter/PortfolioButtonFilter';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { AiFillEye, AIFillGithub } from 'react-icons/ai';
import { urlFor, client } from '../../client';

const Portfolio = () => {
	const handlePortfolioFilter = (item) => {
		console.log('FILTER');
	};

	return (
		<PortfolioContainer id="portfolio-section">
			<PortfolioHeader />
			<SectionWrapper>
				<PortfolioButtonFilter
					handlePortfolioFilter={() => handlePortfolioFilter()}
				/>
			</SectionWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
