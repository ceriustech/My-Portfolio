import { SOCIAL_MEDIA_ICONS } from '../../constants';

const Footer = () => {
	return (
		<footer className="footer section-padding">
			<div className="footer-container">
				<div className="flex flex-col justify-center">
					<p>Terms & Conditions</p>
				</div>
				<div className="socials">
					{SOCIAL_MEDIA_ICONS.map((data) => (
						<div key={data.name} className="icon">
							<a href={data.url} target="_blank">
								<img src={data.imgPath} alt="social icon" />
							</a>
						</div>
					))}
				</div>
				<div className="flex flex-col justify-center">
					<p className="text-center md:text-end">
						© {new Date().getFullYear()} Bilal Masters Lifengineered. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
