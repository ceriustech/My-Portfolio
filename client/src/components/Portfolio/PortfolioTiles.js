import React, { useState, useEffect } from 'react';
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
import { AiFillEye, AiFillInfoCircle } from 'react-icons/ai';
import { urlFor, client } from '../../client';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const PortfolioTile = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [portfolioTIle, setPortfolioTile] = useState([]);
	const [filterPortfolio, setFilterPortfolio] = useState([]);
	const [hovered, setHovered] = useState(false);
	const [overlayText, setOverlayText] = useState(false);

	const maxViewPort = maxView?.desktopM;

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			console.log(data);
			setPortfolioTile(data);
			setFilterPortfolio(data);
		});
	}, []);

	let item = '';

	const handleMouseEnter = (e) => {
		setHovered(true);
	};

	const handleMouseLeave = (e) => {
		setHovered(false);
	};

	const handleOverlayText = (e) => {
		setOverlayText(true);
	};

	const hoverStyle = hovered ? { display: 'block' } : {};

	return (
		<PortfolioTileContainer
			className="app__work-portfolio"
			animate={animateCard}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
		>
			{filterPortfolio.map((tile, index) => (
				<PortfolioTileInner key={index}>
					<PortfolioPictureContainer>
						<PortfolioImage
							key={index}
							className="img"
							image={urlFor(tile.imgUrl)}
							srcset={urlFor(tile.imgUrl)}
							maxView={maxViewPort}
							alt={item.altText}
						/>
						<PortfolioOverlayContainer>
							{hovered && (
								<OverlayHelpText
									id="portfolio__overlay-text"
									style={hoverStyle}
								>
									{(hovered && 'More Info') ||
										(hovered && overlayText ? 'See The App' : '')}
								</OverlayHelpText>
							)}
							<PortfolioOverlayLink
								to={tile.projectLink}
								target="_blank"
								rel="noreferrer"
							>
								<PortfolioOverlayLinkDiv
									whileInView={{ scale: [0, 1] }}
									whileHover={{ scale: [1, 0.9] }}
									transition={{ duration: 0.25 }}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
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
									onMouseEnter={handleMouseEnter && handleOverlayText}
									onMouseLeave={handleMouseLeave}
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
	);
};

export default PortfolioTile;
