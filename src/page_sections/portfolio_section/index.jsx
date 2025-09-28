import { useRef } from 'react';

import ProjectCard from './components/project_card';
import TitleHeader from '../../components/title_header';
import { PROJECT_CARDS } from './constants';

const PortfolioSection = () => {
	const cardRefs = useRef([]);

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
