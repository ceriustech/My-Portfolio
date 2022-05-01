import React from 'react';
import Picture from '../../components/Picture';
import {
	NavigationHeader,
	NavigationContainer,
	NavItems,
} from '../../styles/containers/Navigation.Styles';
import { navigationItem } from '../../constants/navigation.data';
import NavigationItems from '../../components/Navigation/NavigationItems';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { images } from '../../constants/Images';
import {
	size,
	maxView,
	minView,
} from '../../styles/globalstyles/mediaQueries.styles';
import useWindowSize from '../../custom_hooks/useWindowSize';

const Navigation = () => {
	const windowSize = useWindowSize();

	const viewportWidth = Number(size.tablet.replace('px', ''));

	console.log(windowSize.width);

	return (
		<>
			<NavigationHeader role="navigation" aria-label="Main">
				<NavigationContainer>
					<Picture
						srcset={images.logo}
						maxView={maxView.mobileL}
						minView={minView.desktopM}
						image={images.logo}
						altText="logo"
						displayFlexValue={'flex'}
						alignItemValue={'center'}
						widthValue={'70px'}
					/>
					{windowSize.width > viewportWidth && (
						<NavItems>
							{navigationItem.map((item) => (
								<NavigationItems data={item} key={item.id} />
							))}
						</NavItems>
					)}
					{windowSize.width <= viewportWidth && (
						<MobileNavigation>
							{navigationItem.map((item) => (
								<NavigationItems data={item} key={item.id} />
							))}
						</MobileNavigation>
					)}
				</NavigationContainer>
			</NavigationHeader>
		</>
	);
};

export default Navigation;
