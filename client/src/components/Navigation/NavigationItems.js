import React from 'react';
import {
	NavigationItem,
	NavDot,
	ListLink,
} from '../../styles/components/globalcomponents/NavigationItem.Styles';
import { size } from '../../styles/globalstyles/mediaQueries.styles';
import useWindowSize from '../../custom_hooks/useWindowSize';

const NavigationItems = ({ data }) => {
	const windowSize = useWindowSize();

	const viewportWidth = Number(size.tablet.replace('px', ''));

	const link =
		data?.inPageLink !== '' ? `${data?.inPageLink}` : data?.routedLink;

	return (
		<>
			{windowSize.width > viewportWidth && (
				<NavigationItem>
					<NavDot />
					<ListLink to={link}>{data.name}</ListLink>
				</NavigationItem>
			)}
			{windowSize.width <= viewportWidth && (
				<NavigationItem>
					<ListLink to={link}>{data.name}</ListLink>
				</NavigationItem>
			)}
		</>
	);
};

export default NavigationItems;
