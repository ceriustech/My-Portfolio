import React from 'react';
import {
	PortfolioButtonFilterContainer,
	PortfolioButton,
} from '../../styles/components/PortfolioButtonFilter/PortfolioButtonFilter.Styles';

const PortfolioButtonFilter = ({ handlePortfolioFilter }) => {
	return (
		<PortfolioButtonFilterContainer>
			{[
				'All',
				'Frontend',
				'Fullstack',
				'Web3',
				'React.js',
				'Next.js',
				'Node',
				'Go',
			].map((item, index) => (
				<PortfolioButton key={index} onClick={handlePortfolioFilter}>
					{item}
				</PortfolioButton>
			))}
		</PortfolioButtonFilterContainer>
	);
};

export default PortfolioButtonFilter;
