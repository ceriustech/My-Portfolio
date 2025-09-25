import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import ProjectCard from './components/project_card';
import TitleHeader from '../../components/title_header';
import { PROJECT_CARDS } from './constants';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
	const sectionRef = useRef(null);
	const cardRefs = useRef([]);

	useGSAP(() => {
		// Animation for the main section
		gsap.set(sectionRef.current, { opacity: 1 });

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
					duration: 2,
					delay: 0.1 * index,
					scrollTrigger: {
						trigger: card,
						start: 'top bottom-=100',
					},
				}
			);
		});
	}, []);

	return (
		<section id="work" className="app-showcase">
			<div className="w-full">
				<TitleHeader title="💼 App Showcase" />
				<div className="showcaselayout">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[260px]">
						{PROJECT_CARDS.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								ref={(el) => el && (cardRefs.current[index] = el)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
