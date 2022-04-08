import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import { AiFillEye, AIFillGithub } from 'react-icons/ai';
import { urlFor, client } from '../../client';

const Portfolio = () => {
	return (
		<PortfolioContainer id="#portfolio-section">
			<PortfolioHeader />
		</PortfolioContainer>
	);
};

export default Portfolio;
