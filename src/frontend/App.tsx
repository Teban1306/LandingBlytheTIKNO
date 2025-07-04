import { Navbar } from './components/common/Navigation/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Gallery } from './components/sections/Gallery/Gallery';
import { Customize } from './components/sections/Customize/Customize';
import { Reviews } from './components/sections/Reviews/Reviews';
import { CTA } from './components/sections/CTA/CTA';
import { Footer } from './components/common/Footer/Footer';
import { FloatingImage } from './components/common/FloatingImage/FloatingImage';
import blythefont from './assets/images/Blythefont.png';

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#fff1f8] to-[#f8f2ff]">
      <div className="relative">
        <Navbar />
        <main className="flex flex-col gap-4">
          <Hero />
          <About />
          <Gallery />
          <Customize />
          <Reviews />
          <CTA />
        </main>
        <Footer className="mt-8" />
        <FloatingImage imagePath={blythefont} altText="Blythe Icon" size={80} className="fixed bottom-4 right-4 z-50" />
      </div>
    </div>
  );
}

export default App;
