import ProjectCard from './components/project_card';
import TitleHeader from '../../components/title_header';
import { PROJECT_CARDS } from './constants';

// const PortfolioSection = () => {
// 	return (
// 		<section id="work" className="app-showcase section-padding">
// 			<div className="w-full">
// 				<TitleHeader title="💼 App Showcase" />
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[260px]">
// 					{PROJECT_CARDS.map((project) => (
// 						<ProjectCard key={project.id} project={project} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// Temporarily simplify to isolate the issue
const PortfolioSection = () => {
	return (
		<section id="work" className="app-showcase section-padding">
			<div className="w-full">
				<TitleHeader title="💼 App Showcase" />
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{PROJECT_CARDS.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
