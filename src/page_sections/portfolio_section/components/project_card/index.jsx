import { forwardRef } from 'react';

const ProjectCard = forwardRef(({ project }, ref) => {
	const {
		title,
		description,
		image,
		alt,
		className: projectClassName,
	} = project;

	return (
		<div ref={ref} className={`${projectClassName} group`}>
			<img src={image} alt={alt} />

			<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="absolute bottom-0 left-0 right-0 p-4">
					<h3>{title}</h3>
					{description && <p>{description}</p>}
				</div>
			</div>
		</div>
	);
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
