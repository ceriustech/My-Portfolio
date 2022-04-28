import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../client';
import {
	CountdownClockContainer,
	CountdownClockHeader,
	CountdownClockHeaderText,
	CountdownClockInner,
	CountdownClockPlacement,
	CountdownTimer,
	CountdownTimerLabel,
	CountdownLaunchText,
	BackToHomeLink,
} from './CountdownClock.Styles';

const CountdownClock = () => {
	const [appInfo, setAppInfo] = useState([]);

	const { state } = useLocation();
	console.log(state);

	const prevPathAppName = state.previousPath.substring(
		state.previousPath.indexOf(':') + 1 || state.previousPath
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

	console.log(appData);

	const appName = appData[0]?.title || prevPathAppName;
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

	return (
		<CountdownClockContainer>
			<BackToHomeLink to="/">Go to home</BackToHomeLink>
			<CountdownClockHeader>{appName}</CountdownClockHeader>
			<CountdownClockHeaderText>
				Scheduled to release in :
			</CountdownClockHeaderText>
			{calculateTimeLeft !== 0 ? (
				<CountdownClockInner>
					<CountdownClockPlacement>
						<CountdownTimer>{timeLeft.days}</CountdownTimer>
						<CountdownTimerLabel>DAYS</CountdownTimerLabel>
					</CountdownClockPlacement>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}
						</CountdownTimer>
						<CountdownTimerLabel>HR</CountdownTimerLabel>
					</CountdownClockPlacement>
					<CountdownClockPlacement>
						<CountdownTimer>
							{timeLeft.minutes < 10
								? '0' + timeLeft.minutes
								: timeLeft.minutes}
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
				</CountdownClockInner>
			) : (
				<CountdownLaunchText>Launched</CountdownLaunchText>
			)}
		</CountdownClockContainer>
	);
};

export default CountdownClock;
