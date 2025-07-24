import React, { useEffect, useState } from 'react';
import { Palette, Package, Image, Layers, Sparkles } from 'lucide-react';

const BrandingPack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('branding-pack');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Custom logo creation with multiple variations and brand marks that capture your essence",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Layers,
      title: "Brand Identity",
      description: "Complete visual identity system including typography, colors, and comprehensive guidelines",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Image,
      title: "Visual Assets",
      description: "Icon sets, patterns, textures, and branded graphic elements for all your needs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Product packaging mockups, print-ready designs, and 3D visualizations",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="branding-pack" className="py-40 bg-gradient-to-b from-stone-900 to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-full px-8 py-3 mb-12 backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-600 text-sm font-medium tracking-wider">✨ OPTIONAL ADD-ON</span>
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-yellow-600 mb-12 tracking-wider text-shadow hover:scale-105 transition-transform duration-500 cursor-default">
            BRANDING PACK
          </h2>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-loose font-light">
            For brands needing a new or upgraded identity. Complete brand transformation from concept to execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`bg-black/30 backdrop-blur-sm border-2 border-yellow-600/20 rounded-2xl p-8 text-center hover:border-yellow-600/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/25 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
                  hoveredFeature === index ? 'scale-125 shadow-2xl shadow-yellow-600/50' : ''
                }`}>
                  <Icon className="w-10 h-10 text-black relative z-10" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Rotating ring effect */}
                  {hoveredFeature === index && (
                    <div className="absolute inset-0 border-2 border-yellow-600/50 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                  )}
                </div>
                
                <h3 className={`text-yellow-600 font-semibold mb-4 tracking-wide text-lg transition-all duration-300 ${
                  hoveredFeature === index ? 'text-yellow-500 scale-105' : ''
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`text-gray-400 leading-relaxed font-light transition-all duration-300 ${
                  hoveredFeature === index ? 'text-gray-300' : ''
                }`}>
                  {feature.description}
                </p>

                {/* Floating particles on hover */}
                {hoveredFeature === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-600/60 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border-2 border-yellow-600/30 rounded-3xl p-12 max-w-5xl mx-auto backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/25">
            <h3 className="font-serif text-4xl text-yellow-600 mb-6 tracking-wide">
              Complete Brand Identity System
            </h3>
            <p className="text-gray-300 mb-8 leading-loose text-lg">
              Includes logo design, icon sets, color palettes, packaging mockups, brand guidelines, 
              and everything your brand needs to make a lasting impression in the market.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              {[
                '• Logo Variations',
                '• Color Palettes', 
                '• Typography Systems',
                '• Brand Guidelines',
                '• Packaging Design',
                '• Marketing Materials'
              ].map((item, index) => (
                <span 
                  key={index}
                  className="bg-black/30 px-4 py-2 rounded-full border border-yellow-600/20 hover:border-yellow-600/40 hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandingPack;