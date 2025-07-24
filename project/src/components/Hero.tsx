import React, { useEffect, useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-stone-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                <Shield className="w-10 h-10 text-yellow-600 drop-shadow-lg" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-20 rounded-sm transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-yellow-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-yellow-600 font-serif text-2xl font-bold tracking-wider text-shadow group-hover:text-yellow-500 transition-colors duration-300">AUGUSTUS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#portfolio" className="text-white hover:text-yellow-600 transition-all duration-300 font-light tracking-wide text-lg relative group">
                WORK
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-white hover:text-yellow-600 transition-all duration-300 font-light tracking-wide text-lg relative group">
                PROCESS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button 
                onClick={onContactClick}
                className="text-white hover:text-yellow-600 transition-all duration-300 font-light tracking-wide text-lg relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-yellow-600 transition-colors duration-300 transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-yellow-600/20 animate-fade-in-up">
              <div className="px-8 py-6 space-y-6">
                <a href="#portfolio" className="block text-white hover:text-yellow-600 transition-colors font-light tracking-wide text-lg">WORK</a>
                <a href="#how-it-works" className="block text-white hover:text-yellow-600 transition-colors font-light tracking-wide text-lg">PROCESS</a>
                <button 
                  onClick={() => {
                    onContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="block text-white hover:text-yellow-600 transition-colors font-light tracking-wide text-lg"
                >
                  CONTACT
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-48 pb-40 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-yellow-600 mb-8 tracking-wider text-shadow hover:scale-105 transition-transform duration-500 cursor-default">
              AUGUSTUS
            </h1>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-yellow-600 mb-16 tracking-wider text-shadow hover:scale-105 transition-transform duration-500 cursor-default">
              STUDIOS
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] mb-16 uppercase">
              Creative Agency Powered by AI
            </h2>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-20 leading-loose font-light">
              We craft cinematic ads and unforgettable brand identities using cutting-edge generative tools. 
              From luxury fashion to bold streetwear, we bring your vision to life with AI precision and creative excellence.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={onContactClick}
              className="group border-2 border-yellow-600 text-yellow-600 px-16 py-6 text-xl font-light tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300 relative overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/25"
            >
              <span className="relative z-10">GET IN TOUCH</span>
              <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;