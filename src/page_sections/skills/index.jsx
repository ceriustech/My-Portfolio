import SkillsBox3D from './components/skillsBox3D';
import TitleHeader from '../../components/title_header';
import { TECH_STACK_ICONS } from '../../constants';

const Skills = () => {
	return (
		<div id="skills" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5 justify-items-center">
				<TitleHeader title="🤝 My skills" />

				{/* 3D Box for larger screens, grid for mobile */}
				<div className="hidden lg:block w-full hover:cursor-grab">
					<SkillsBox3D skills={TECH_STACK_ICONS} />
				</div>

				{/* Your existing grid layout for mobile */}
				<div className="lg:hidden tech-grid">
					{TECH_STACK_ICONS.map((techStackIcon) => (
						<div
							key={techStackIcon.name}
							className=" tech-card overflow-hidden group items-center"
						>
							<div className="tech-card-content">
								<div
									className="tech-icon-wrapper"
									style={{ backgroundColor: techStackIcon.background }}
								>
									<img src={techStackIcon.imgPath} alt={techStackIcon.name} />
								</div>
								<div className="padding-x w-full">
									<p>{techStackIcon.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
