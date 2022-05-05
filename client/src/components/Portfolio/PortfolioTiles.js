import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
} from './PortfolioTile.Styles';
import {
	PortfolioButtonFilterContainer,
	PortfolioButton,
} from './PortfolioButtonFilter.Styles';
import { AiFillEye, AiFillInfoCircle } from 'react-icons/ai';
import { urlFor, client } from '../../client';
import { maxView } from '../../styles/globalstyles/mediaQueries.styles';

const PortfolioTile = () => {
	const [portfolioTIle, setPortfolioTile] = useState([]);
	const [filterPortfolio, setFilterPortfolio] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [hovered, setHovered] = useState(false);
	const [overlayText, setOverlayText] = useState(false);
	const [overlayAppText, setOverlayAppText] = useState(false);

	const maxViewPort = maxView?.desktopM;

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			setPortfolioTile(data);
			setFilterPortfolio(data);
		});
	}, []);

	const handlePortfoliofilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === 'All') {
				setFilterPortfolio(portfolioTIle);
			} else {
				setFilterPortfolio(
					portfolioTIle.filter((work) => work.tags.includes(item))
				);
			}
		}, 500);
	};

	const handleMouseEnter = (e) => {
		setHovered(true);
	};

	const handleMouseLeave = (e) => {
		setHovered(false);
	};

	const handleOverlayTextStart = (e) => {
		setOverlayText(true);
	};

	const handleOverlayTextEnd = (e) => {
		setOverlayText(false);
	};

	const handleOverlayAppTextStart = (e) => {
		setOverlayAppText(true);
	};

	const handleOverlayAppTextEnd = (e) => {
		setOverlayAppText(false);
	};

	const hoverStyle = hovered ? { display: 'block' } : {};

	return (
		<React.Fragment>
			<PortfolioButtonFilterContainer>
				{[
					'All',
					'Frontend',
					'Fullstack',
					'Web3',
					'React JS',
					'Next JS',
					'Node',
					'Go',
				].map((item, index) => (
					<PortfolioButton
						key={index}
						className={activeFilter === item ? 'item-active' : ''}
						onClick={() => handlePortfoliofilter(item)}
					>
						{item}
					</PortfolioButton>
				))}
			</PortfolioButtonFilterContainer>
			{/* <PortfolioButtonFilter
				handleFilter={handlePortfoliofilter(item)}
				activeButton={}
			/> */}
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
								altText={tile.altText}
							/>
							<PortfolioOverlayContainer>
								{hovered && (
									<OverlayHelpText
										id="portfolio__overlay-text"
										style={hoverStyle}
									>
										{(overlayText && 'More Info') ||
											(overlayAppText ? 'See The App' : '')}
									</OverlayHelpText>
								)}
								<Link to={`/portfolio/:${tile.routeID}`} rel="noreferrer">
									<PortfolioOverlayLinkDiv
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
										onHoverStart={handleOverlayTextStart}
										onHoverEnd={handleOverlayTextEnd}
									>
										<AiFillInfoCircle />
									</PortfolioOverlayLinkDiv>
								</Link>
								{tile.projectLink === undefined ? (
									<Link
										to="/countdown"
										state={{ appTitle: tile.routeID }}
										rel="noreferrer"
									>
										<PortfolioOverlayLinkDiv
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											onMouseEnter={handleMouseEnter}
											onMouseLeave={handleMouseLeave}
											onHoverStart={handleOverlayAppTextStart}
											onHoverEnd={handleOverlayAppTextEnd}
										>
											<AiFillEye />
										</PortfolioOverlayLinkDiv>
									</Link>
								) : (
									<PortfolioOverlayLink
										href={tile.projectLink}
										target="_blank"
										rel="noreferrer"
									>
										<PortfolioOverlayLinkDiv
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											onMouseEnter={handleMouseEnter}
											onMouseLeave={handleMouseLeave}
											onHoverStart={handleOverlayAppTextStart}
											onHoverEnd={handleOverlayAppTextEnd}
										>
											<AiFillEye />
										</PortfolioOverlayLinkDiv>
									</PortfolioOverlayLink>
								)}
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
		</React.Fragment>
	);
};

export default PortfolioTile;
