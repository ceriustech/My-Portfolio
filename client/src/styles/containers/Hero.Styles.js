import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { images } from '../../constants/Images';
import {
	maxView,
	minView,
	miscMaxView,
} from '../globalstyles/mediaQueries.styles';

const dtMediumMin = minView?.desktopM;
const laptopMax = maxView?.laptop;
const mobileLargeMax = maxView?.mobileL;
const miscSmall = miscMaxView?.miscSmall;

export const HeroContainer = styled.section`
	position: relative;
	background: url(${images.bgIMG});
	background-size: cover;
	background-position: center;
	background-repeat: repeat;
	height: 100vh;

	@media screen and ${laptopMax} {
		height: 1100px;
	}
`;

export const HeroContainerInnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	width: 100%;
	height: 100%;
	flex-direction: row;
	padding: 6rem 2rem 0rem;
  
  @media screen and ${dtMediumMin} {
    padding-top: 8rem;
  }

  @media screen and ${laptopMax} {
    flex-direction: column;
  }

  @media screen and ${mobileLargeMax} {
    padding: 6rem 1rem 2rem;
  }
}
`;

export const HeroHeaderInfo = styled(motion.div)`
	display: flex;
	flex: 0.65 1;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 100%;
	margin: 0 2rem;

	@media screen and ${laptopMax} {
		width: 100%;
		margin-right: 0rem;
	}
`;
