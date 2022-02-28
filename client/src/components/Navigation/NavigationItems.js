import React from 'react';
import { NavigationItem } from '../../styles/components/NavigationItem.Styles';

const NavigationItems = ({ data }) => {
	return <NavigationItem>{data.name}</NavigationItem>;
};

export default NavigationItems;
