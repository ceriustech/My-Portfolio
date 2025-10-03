import NavBar from './components/navbar';
import HeroSection from './page_sections/hero_section';
import PortfolioSection from './page_sections/portfolio_section';
import UpcomingAppsShowcase from './page_sections/upcoming_apps_section';
import ExperienceSection from './page_sections/experience_section';
import Skills from './page_sections/skills';
import About from './page_sections/about';
import Footer from './page_sections/footer';

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ExperienceSection />
			{/* <PortfolioSection /> */}
			<UpcomingAppsShowcase />
			<Skills />
			<About />
			<Footer />
		</>
	);
};

export default App;
