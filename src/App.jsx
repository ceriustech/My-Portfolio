import NavBar from './components/navbar';
import HeroSection from './page_sections/hero_section';
import PortfolioSection from './page_sections/portfolio_section';
import UpcomingAppsShowcase from './page_sections/upcoming_apps_section';
import ExperienceSection from './page_sections/experience_section';

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<PortfolioSection />
			<UpcomingAppsShowcase />
			<ExperienceSection />
		</>
	);
};

export default App;
