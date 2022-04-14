import React, { useState, useEffect } from 'react';
import { PortfolioContainer } from '../../styles/containers/Portfolio.Styles';
import { PortfolioHeader } from '../../components/globalcomponents/SectionHeaders';
import PortfolioButtonFilter from '../../components/PortfolioButtonFilter/PortfolioButtonFilter';
import {
	PortfolioTileContainer,
	PortfolioTileInner,
	PortfolioPictureContainer,
	PortfolioImage,
	PortfolioOverlayContainer,
	PortfolioOverlayLink,
	PortfolioOverlayLinkDiv,
	ApplicationInfo,
	ApplicationInfoTag,
	OverlayHelpText,
} from '../../styles/components/PortfolioTile/Portfolio.Styles';
import { SectionWrapper } from '../../styles/globalstyles/container.styles';
import { AiFillEye, AiFillInfoCircle } from 'react-icons/ai';
import { urlFor, client } from '../../client';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [portfolioTIle, setPortfolioTile] = useState([]);
	const [filterPortfolio, setFilterPortfolio] = useState([]);

	const maxViewPort = maxView?.desktopM;

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			console.log(data);
			setPortfolioTile(data);
			setFilterPortfolio(data);
		});
	}, []);

	const handlePortfolioFilter = (item) => {
		console.log('FILTER');
	};

	let item = '';

	return (
		<PortfolioContainer id="portfolio-section">
			<PortfolioHeader />
			<SectionWrapper flexDirection="column">
				<PortfolioButtonFilter
					className={activeFilter === item ? 'item-active' : ''}
					handlePortfolioFilter={() => handlePortfolioFilter(item)}
				/>
				<PortfolioTileContainer
					className="app__work-portfolio"
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
				>
					{filterPortfolio.map((tile, index) => (
						<PortfolioTileInner key={index} className="app__work-item ">
							<PortfolioPictureContainer className="app__work-img">
								<PortfolioImage
									key={index}
									className="img"
									image={urlFor(tile.imgUrl)}
									srcset={urlFor(tile.imgUrl)}
									maxView={maxViewPort}
									alt={item.altText}
								/>
								<PortfolioOverlayContainer className="app__work-hover">
									<OverlayHelpText>More Info</OverlayHelpText>
									<PortfolioOverlayLink
										to={tile.projectLink}
										target="_blank"
										rel="noreferrer"
									>
										<PortfolioOverlayLinkDiv
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
										>
											<AiFillInfoCircle />
										</PortfolioOverlayLinkDiv>
									</PortfolioOverlayLink>
									<PortfolioOverlayLink
										to={tile.codeLink}
										target="_blank"
										rel="noreferrer"
									>
										<PortfolioOverlayLinkDiv
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
										>
											<AiFillEye />
										</PortfolioOverlayLinkDiv>
									</PortfolioOverlayLink>
								</PortfolioOverlayContainer>
							</PortfolioPictureContainer>
							<ApplicationInfo>
								<h3>{tile.title}</h3>
								<ApplicationInfoTag>
									<p>{tile.tags[0]}</p>
								</ApplicationInfoTag>
							</ApplicationInfo>
						</PortfolioTileInner>
					))}
				</PortfolioTileContainer>
			</SectionWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
