import React from 'react';
import { CountdownWrapper } from './Countdown.Styles';
import CountdownClock from '../../CountdownClock/CountdownClock';

const Countdown = () => {
	return (
		<CountdownWrapper>
			<CountdownClock />
		</CountdownWrapper>
	);
};

export default Countdown;
