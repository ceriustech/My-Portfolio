import React from 'react';
import { NavigationContainer } from '../../styles/containers/Navigation.Styles';
import {
	Picture,
	Source,
	Image,
} from '../../styles/globalstyles/images.styles';
import { navigationItem } from '../../constants/navigation.data';
import NavigationItems from '../../components/Navigation/NavigationItems';
import { images } from '../../constants/Images';

const Navigation = () => {
	return (
		<>
			{/* <img src={images.logo} alt="logo" /> */}
			<Picture>
				<Source srcset={images.mobile} media="min-width: 768px" />
				<Image src={images.logo} alt="logo" />
			</Picture>
			<NavigationContainer>
				{navigationItem.map((item) => (
					<NavigationItems data={item} key={item.id} />
				))}
			</NavigationContainer>
		</>
	);
};

export default Navigation;
