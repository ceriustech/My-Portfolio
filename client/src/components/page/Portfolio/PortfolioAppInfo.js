import React, { useState, useEffect } from 'react';
import {
	PortfolioAppContainer,
	BackToHomeLink,
	AppInfoContainer,
	AppImageContainer,
	StyledPicture,
	AppContentContainer,
	AppContentHeader,
	AppContentDescText,
	StyledLink,
	AppLink,
} from '../../../styles/components/page/Portfolio/PortflolioAppInfo.Styles';
import { urlFor, client } from '../../../client';
import { useParams } from 'react-router-dom';
import { maxView } from '../../../styles/globalstyles/mediaQueries.styles';

const PortfolioAppInfo = () => {
	const [appInfo, setAppInfo] = useState([]);

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			setAppInfo(data);
		});
	}, []);

	const UrlID = () => {
		const { id } = useParams();
		return id;
	};

	const urlID = UrlID().replace(':', '');

	const appData = appInfo.filter((item) => {
		return item.routeID === urlID;
	});

	const maxViewPort = maxView?.desktopM;

	console.log(appData.projectLink);

	return (
		<PortfolioAppContainer>
			<BackToHomeLink to="/">Back to home</BackToHomeLink>
			<AppInfoContainer>
				{appData.map((item, index) => (
					<React.Fragment key={index}>
						<AppImageContainer>
							<StyledPicture
								image={urlFor(item.imgUrl)}
								srcset={urlFor(item.imgUrl)}
								maxView={maxViewPort}
								alt={item.altText}
							/>
						</AppImageContainer>
						<AppContentContainer>
							<AppContentHeader>{item.title}</AppContentHeader>
							<AppContentDescText>{item.description}</AppContentDescText>
							<AppContentDescText>
								<span>Release Date:</span>
								{item.releaseDate}
							</AppContentDescText>
							<AppContentDescText>
								<span>Released:</span>
								{item.released === true ? 'Yes' : 'No'}
							</AppContentDescText>
							<AppContentDescText>
								<span>See The Site:</span>
								{item.projectLink == undefined ? (
									<StyledLink to="/countdown" rel="noreferrer">
										Click Here
									</StyledLink>
								) : (
									<AppLink
										href={item.projectLink}
										target="_blank"
										rel="noreferrer"
									>
										Click Here
									</AppLink>
								)}
							</AppContentDescText>
							<hr></hr>
						</AppContentContainer>
					</React.Fragment>
				))}
			</AppInfoContainer>
		</PortfolioAppContainer>
	);
};

export default PortfolioAppInfo;
