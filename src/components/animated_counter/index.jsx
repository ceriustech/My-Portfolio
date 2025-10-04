import { COUNTER_ITEMS } from '../../constants';

const AnimatedCounter = () => {
	return (
		<div id="counter" className="padding-x-lg xl:mt-0 mt-32">
			<div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
				{COUNTER_ITEMS.map((item, index) => (
					<div
						key={index}
						className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
					>
						<div className="text-white-50 text-4xl md:text-5xl font-bold mb-2">
							{`${item.value}${item.suffix}`}
						</div>
						<div className="text-white-50 text-xs  md:text-lg">
							{item.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnimatedCounter;
