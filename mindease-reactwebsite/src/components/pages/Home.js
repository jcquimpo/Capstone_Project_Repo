import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'


function Home() {
    return (
        <div>
            <HeroSection />
            <h2>This is the HOME PAGE</h2>
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;