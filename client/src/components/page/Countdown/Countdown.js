import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../../client';
import {
	CountdownClockContainer,
	CountdownClockHeader,
	CountdownClock,
	CountdownClockPlacement,
	CountdownTimer,
	CountdownTimerLabel,
	CountdownLaunchText,
} from './Countdown.Styles';

const Countdown = () => {
	const [appInfo, setAppInfo] = useState([]);

	const { state } = useLocation();

	const prevPathAppName = state.previousPath.substring(
		state.previousPath.indexOf(':') + 1
	);

	useEffect(() => {
		const query = '*[_type == "portfolio"]';

		client.fetch(query).then((data) => {
			setAppInfo(data);
		});
	}, []);

	const appData = appInfo.filter((item) => {
		return item.routeID === prevPathAppName;
	});

	const appName = appData[0]?.title;
	const calculateTimeLeft = () => {
		const launchDate = new Date(
			`${appData[0]?.releaseDate} 23:59:59 GMT-0500 (CST)`
		).getTime();

		const now = new Date().getTime();

		const distance = launchDate - now;

		let timeLeft = {};

		if (distance > 0) {
			timeLeft = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((distance / 1000 / 60) % 60),
				seconds: Math.floor((distance / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	}, [timeLeft]);

	console.log(appData[0]?.releaseDate);

	return (
		<CountdownClockContainer>
			<CountdownClockHeader>{appName}</CountdownClockHeader>
			{calculateTimeLeft !== 0 ? (
				<CountdownClock>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.days}
							<span>:</span>
						</CountdownTimer>
						<CountdownTimerLabel>Day</CountdownTimerLabel>
					</CountdownClockPlacement>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}
							<span>:</span>
						</CountdownTimer>
						<CountdownTimerLabel>HR</CountdownTimerLabel>
					</CountdownClockPlacement>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.minutes < 10
								? '0' + timeLeft.minutes
								: timeLeft.minutes}
							<span>:</span>
						</CountdownTimer>
						<CountdownTimerLabel>MIN</CountdownTimerLabel>
					</CountdownClockPlacement>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.seconds < 10
								? '0' + timeLeft.seconds
								: timeLeft.seconds}
						</CountdownTimer>
						<CountdownTimerLabel>SEC</CountdownTimerLabel>
					</CountdownClockPlacement>
				</CountdownClock>
			) : (
				<CountdownLaunchText>Launched</CountdownLaunchText>
			)}
		</CountdownClockContainer>
	);
};

export default Countdown;
