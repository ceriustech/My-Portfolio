import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../../client';

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
		<div className="countdown-clock-container">
			{calculateTimeLeft !== 0 ? (
				<div className="countdown-clock">
					<div className="countdown-clock-placement">
						<h2>{appName}</h2>
						<p id="timer-days" className="countdown-lock-number">
							{timeLeft.days}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">Day</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">HR</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.minutes < 10
								? '0' + timeLeft.minutes
								: timeLeft.minutes}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">MIN</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.seconds < 10
								? '0' + timeLeft.seconds
								: timeLeft.seconds}
						</p>
						<p className="countdown-clock-label">SEC</p>
					</div>
				</div>
			) : (
				<p className="countdown-clock-launched">Launched</p>
			)}
		</div>
	);
};

export default Countdown;
