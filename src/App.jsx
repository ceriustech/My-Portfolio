import NavBar from './components/navbar';
import HeroSection from './page_sections/hero_section';
import PortfolioSection from './page_sections/portfolio_section';
import ExperienceSection from './page_sections/experience_section';

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<PortfolioSection />
			<ExperienceSection />
		</>
	);
};

export default App;
