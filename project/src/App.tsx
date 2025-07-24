import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import BrandingPack from './components/BrandingPack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero onContactClick={scrollToContact} />
      <HowItWorks />
      <Portfolio />
      <BrandingPack />
      <div ref={contactRef}>
        <Contact isVisible={isContactVisible} />
      </div>
      <Footer />
    </div>
  );
}

export default App;