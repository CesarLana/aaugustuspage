import React from 'react';
import { Shield, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4 mb-12 md:mb-0 group">
            <div className="relative transform transition-transform duration-300 group-hover:scale-110">
              <Shield className="w-10 h-10 text-yellow-600 drop-shadow-lg" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-20 rounded-sm transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-yellow-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-yellow-600 font-serif text-2xl font-bold tracking-wider text-shadow group-hover:text-yellow-500 transition-colors duration-300">AUGUSTUS STUDIOS</span>
              <p className="text-gray-500 text-sm mt-1">AI-Powered Creative Agency</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 group transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/50"
            >
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 group transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/50"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 group transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/50"
            >
              <Twitter className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-12 text-center">
          <p className="text-gray-500 leading-relaxed">
            © 2025 Augustus Studios. All rights reserved. | Crafted with AI precision and creative excellence.
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-600/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;