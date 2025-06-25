import { Navbar } from './components/common/Navigation/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { Features } from './components/sections/Features/Features';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { Pricing } from './components/sections/Pricing/Pricing';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/common/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
