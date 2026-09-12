import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Architecture from './components/Architecture';
import Workflow from './components/Workflow';
import Privacy from './components/Privacy';
import Demo from './components/Demo';
import Gallery from './components/Gallery';
import Research from './components/Research';
import Technology from './components/Technology';
import Security from './components/Security';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Architecture />
      <Workflow />
      <Privacy />
      <Demo />
      <Gallery />
      <Research />
      <Technology />
      <Security />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

