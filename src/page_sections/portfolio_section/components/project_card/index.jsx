import { forwardRef } from 'react';

const ProjectCard = forwardRef(({ project }) => {
	const {
		title,
		description,
		image,
		alt,
		className: projectClassName,
		url,
	} = project;

	const urlTarget = url.startsWith('http') ? '_blank' : undefined;
	const noOpenRefer = url.startsWith('http')
		? 'noopener noreferrer'
		: undefined;

	const isMobile =
		typeof window !== 'undefined' &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	if (isMobile) {
		return (
			<a
				href={url}
				target={urlTarget}
				rel={noOpenRefer}
				className={`${projectClassName} group block`}
			>
				<img src={image} alt={alt} />
				<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
					<h3>{title}</h3>
					{description && <p className="text-sm">{description}</p>}
				</div>
			</a>
		);
	}

	return (
		<div className={`${projectClassName} group`}>
			<img src={image} alt={alt} />

			<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
				<div className="absolute bottom-0 left-0 right-0 p-4">
					<a
						className="cursor-pointer"
						href={url}
						target={urlTarget}
						rel={noOpenRefer}
					>
						<h3>{title}</h3>
					</a>
					{description && <p>{description}</p>}
				</div>
			</div>
		</div>
	);
});

export default ProjectCard;
