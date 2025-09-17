import { forwardRef } from 'react';

const ProjectCard = forwardRef(({ project, className }, ref) => {
	const {
		title,
		image,
		alt,
		backgroundColor,
		className: projectClassName,
	} = project;

	return (
		<div ref={ref} className={`${projectClassName} ${className || ''}`}>
			<div className="image-wrapper" style={{ backgroundColor }}>
				<img src={image} alt={alt} />
			</div>
			<div className="text-content">
				<h2>{title}</h2>
			</div>
		</div>
	);
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
