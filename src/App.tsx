import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
