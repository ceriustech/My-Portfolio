const TitleHeader = ({ title }) => {
	return (
		<div className="flex flex-col items-center mb-10">
			<div className="hero-badge">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default TitleHeader;
