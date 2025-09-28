import TitleHeader from '../../components/title_header';
import GlowCard from '../../components/glow_card';
import { EXPERIENCE_CARDS_DATA } from '../../constants';

const ExperienceSection = () => {
	return (
		<section
			id="experience"
			className="flex-center md:mt-10 mt-50 section-padding xl:px-0"
		>
			<div className="w-full h-full md:px-20 px-5">
				<TitleHeader title="💼 My Career Overview" />
				<div className="mt-20 relative">
					<div className="relative z-50 xl:space-y-32 space-y-10">
						{EXPERIENCE_CARDS_DATA.map((card) => (
							<div key={card.id} className="exp-card-wrapper">
								<div className="xl:w-2/6">
									<GlowCard card={card}>
										<div>
											<h2></h2>
										</div>
									</GlowCard>
								</div>
								<div className="xl:w-4/6">
									<div className="flex items-start">
										<div className="timeline-wrapper">
											<div className="timeline" />
											<div className="gradient-line w-1 h-full" />
										</div>
										<div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
											<div className="timeline-logo">
												<img
													className="max-w-12"
													src={card.logoPath}
													alt="logo"
												/>
											</div>
											<div>
												<h1 className="font-semibold text-3xl">{card.title}</h1>
												<p className="my-5 text-white-50">
													🗓️&nbsp;{card.date}
												</p>
												<p className="text-[#839CB5] italic">
													Responsibilities
												</p>
												<ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
													{card.responsibilities.map(
														(responsibility, index) => (
															<li key={index} className="text-lg">
																{responsibility}
															</li>
														)
													)}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
