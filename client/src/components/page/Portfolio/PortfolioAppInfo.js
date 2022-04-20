import React, { useState, useEffect } from 'react';
import {
	PortfolioAppContainer,
	BackToHomeLink,
	AppInfoContainer,
	AppImageContainer,
	StyledPicture,
	AppContentContainer,
} from '../../../styles/components/page/Portfolio/PortflolioAppInfo.Styles';
import { urlFor, client } from '../../../client';

const PortfolioAppInfo = () => {
	const [appInfo, setAppInfo] = useState([]);

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			setAppInfo(data);
		});
	}, []);

	console.log(appInfo);

	return (
		<PortfolioAppContainer>
			<BackToHomeLink to="/">Back to home</BackToHomeLink>
			<AppInfoContainer>
				<AppImageContainer>
					<StyledPicture />
				</AppImageContainer>
				<AppContentContainer></AppContentContainer>
			</AppInfoContainer>
		</PortfolioAppContainer>
	);
};

export default PortfolioAppInfo;
