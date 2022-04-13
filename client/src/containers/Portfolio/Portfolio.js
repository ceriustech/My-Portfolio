import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import PortfolioButtonFilter from '../../components/PortfolioButtonFilter/PortfolioButtonFilter';
import {
	PortfolioTileContainer,
	PortfolioTileInner,
} from '../../styles/components/PortfolioTile/Portfolio.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { AiFillEye, AIFillGithub } from 'react-icons/ai';
import { urlFor, client } from '../../client';

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [portfolioTIle, setPortfolioTile] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			console.log(data);
			setPortfolioTile(data);
			setFilterWork(data);
		});
	}, []);

	const handlePortfolioFilter = (item) => {
		console.log('FILTER');
	};

	let item = '';

	return (
		<PortfolioContainer id="portfolio-section">
			<PortfolioHeader />
			<SectionWrapper>
				<PortfolioButtonFilter
					className={activeFilter === item ? 'item-active' : ''}
					handlePortfolioFilter={() => handlePortfolioFilter(item)}
				/>
				<PortfolioTileContainer
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
				></PortfolioTileContainer>
			</SectionWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
