import TitleHeader from '../../components/title_header';
import { TECH_STACK_ICONS } from '../../constants';

const Skills = () => {
	return (
		<div id="skills" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader title="🤝 My skills" />
				<div className="tech-grid">
					{TECH_STACK_ICONS.map((techStackIcon) => (
						<div
							key={techStackIcon.name}
							className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
						>
							<div className="tech-card-content">
								<div
									className="tech-icon-wrapper"
									style={{ backgroundColor: techStackIcon.background }}
								>
									<div>
										<img
											className="max-w-25"
											src={techStackIcon.imgPath}
											alt={techStackIcon.name}
										/>
									</div>
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
