import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from './components/project_card';

import { PROJECT_CARDS } from './constants';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
	const sectionRef = useRef(null);
	const cardRefs = useRef([]);

	useGSAP(() => {
		// Animation for the main section
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 }
		);

		cardRefs.current.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: 'top bottom-=100',
					},
				}
			);
		});
	}, []);

	// return (
	// 	<div id="work" ref={sectionRef} className="app-showcase">
	// 		<div className="w-full">
	// 			<div className="showcaselayout">
	// 				{PROJECT_CARDS.map((project, index) => (
	// 					<ProjectCard
	// 						key={project.id}
	// 						project={project}
	// 						ref={(el) => el && (cardRefs.current[index] = el)}
	// 					/>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</div>
	// );

	return (
		<section className="portfolio">
			<div className="w-full">
				<h1 className="text-4xl font-bold text-center mb-8">App Showcase</h1>
				<div className="showcaselayout">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						{/* Large item */}
						<div
							ref={(el) => (cardRefs.current[0] = el)}
							className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Nature"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-2xl font-bold text-white">
										Explore Nature
									</h3>
									<p className="text-white">
										Discover the beauty of the natural world
									</p>
								</div>
							</div>
						</div>

						{/* Two small items */}
						<div
							ref={(el) => (cardRefs.current[1] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Food"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">
										Culinary Delights
									</h4>
								</div>
							</div>
						</div>

						<div
							ref={(el) => (cardRefs.current[2] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Technology"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">
										Tech Innovations
									</h4>
								</div>
							</div>
						</div>

						{/* Three medium items */}
						<div
							ref={(el) => (cardRefs.current[3] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Travel"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">
										Travel Adventures
									</h4>
								</div>
							</div>
						</div>

						<div
							ref={(el) => (cardRefs.current[4] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Art"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">
										Artistic Expressions
									</h4>
								</div>
							</div>
						</div>

						{/* Bottom cards */}
						<div
							ref={(el) => (cardRefs.current[5] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Sport"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">Swimming</h4>
								</div>
							</div>
						</div>

						<div
							ref={(el) => (cardRefs.current[6] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Sport"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">Chess</h4>
								</div>
							</div>
						</div>

						<div
							ref={(el) => (cardRefs.current[7] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Sport"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">Football</h4>
								</div>
							</div>
						</div>

						<div
							ref={(el) => (cardRefs.current[8] = el)}
							className="relative overflow-hidden rounded-2xl shadow-lg group"
						>
							<img
								src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Sport"
								className="w-full h-48 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h4 className="text-xl font-bold text-white">Cricket</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
