import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { getandShowCounterData } from './utils';
import { COUNTER_ITEMS } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
	const counterRef = useRef(null);
	const countersRef = useRef([]);

	useGSAP(() => {
		getandShowCounterData(countersRef, counterRef, gsap);
	}, []);

	return (
		<div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
			<div className="mx-auto grid-4-cols">
				{COUNTER_ITEMS.map((item, index) => (
					<div
						key={index}
						ref={(el) => el && (countersRef.current[index] = el)}
						className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
					>
						<div className="counter-number text-white-50 text-5xl font-bold mb-2">
							0 {item.suffix}
						</div>
						<div className="text-white-50 text-lg">{item.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnimatedCounter;
