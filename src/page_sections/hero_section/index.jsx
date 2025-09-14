import Button from '../../components/button';
import HeroExperience from '../../components/models/hero_experience';
import AnimatedCounter from '../../components/animated_counter';

import { HERO_TEXT_TITLE_WORDS } from '../../constants';

const WordSlider = ({ words }) => {
	return (
		<div className="slide">
			<div className="wrapper">
				{words.map((word) => (
					<div
						key={word.text}
						className="flex items-center md:gap-3 gap-1 pb-2"
					>
						<img
							src={word.image}
							alt={word.text}
							className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
						/>
						<span>{word.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};

const HeroSection = () => {
	return (
		<section id="hero" className="relative overflow-hidden">
			<div className="absolute top-0 left-0 z-10">
				<img src="/images/bg.png" alt="background" />
			</div>
			<div className="hero-layout">
				{/* LEFT: Hero Content */}
				<header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
					<div className="flex flex-col gap-7">
						<div className="hero-text">
							<h1>Making Impact</h1>
							<h1>
								Through <WordSlider words={HERO_TEXT_TITLE_WORDS} />
							</h1>
							<h1>That Deliver Results </h1>
						</div>
						<p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
							Hello, I’m Bilal, an engineer looking to build software that'll
							have a positive impact.
						</p>
						<Button
							id="button"
							className="md:w-80 md:h-16 w-60 h-12"
							text="See my work"
						/>
					</div>
				</header>
				{/* RIGHT: 3D Model or Visual */}
				<figure>
					<div className="hero-3d-layout">
						<HeroExperience />
					</div>
				</figure>
			</div>
			<AnimatedCounter />
		</section>
	);
};

export default HeroSection;
