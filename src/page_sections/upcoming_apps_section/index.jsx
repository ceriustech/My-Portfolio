import { LOGO_ICONS } from '../../constants';

const LogoIcon = ({ icon }) => {
	return (
		<div className="flex-none flex-center marquee-item">
			<img src={icon.imgPath} alt={icon.name} />
		</div>
	);
};

const UpcomingAppsShowcase = () => {
	return (
		<div className="md:my-20 my-10 relative">
			<div className="gradient-edge" />
			<div className="gradient-edge" />

			<div className="marquee h-52">
				<div className="marquee-box md:gap-12 gap-5">
					{LOGO_ICONS.map((icon, index) => (
						<LogoIcon key={index} icon={icon} />
					))}

					{LOGO_ICONS.map((icon, index) => (
						<LogoIcon key={index} icon={icon} />
					))}
				</div>
			</div>
		</div>
	);
};

export default UpcomingAppsShowcase;
