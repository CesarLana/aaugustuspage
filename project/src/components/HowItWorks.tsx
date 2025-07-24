import React, { useEffect, useState } from 'react';
import { MessageCircle, Lightbulb, Zap, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Let's Connect",
      description: "Client sends message through form or email. We reply in hours to understand your brand, vision, and creative needs.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Script & Ideation",
      description: "We develop original scripts, creative direction, visual styles and get your approval before moving to production.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "AI Production",
      description: "Using tools like Veo, Midjourney, Sora, ElevenLabs, we deliver cinematic-level content fast and flawlessly.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-40 bg-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`text-center mb-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-yellow-600 mb-12 tracking-wider text-shadow hover:scale-105 transition-transform duration-500 cursor-default">
            HOW IT WORKS
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-loose">
            Our streamlined process ensures exceptional results delivered at the speed of AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 delay-${(index + 1) * 200} transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative mb-12">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden group transition-all duration-500 transform ${
                    hoveredStep === index ? 'scale-125 shadow-2xl shadow-yellow-600/50' : 'hover:scale-110'
                  }`}>
                    <Icon className="w-12 h-12 text-black relative z-10 transition-transform duration-300" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Pulsing ring effect */}
                    <div className={`absolute inset-0 rounded-full border-2 border-yellow-600 transition-all duration-1000 ${
                      hoveredStep === index ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                    }`}></div>
                  </div>
                  
                  {/* Step number */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg transition-all duration-300 ${
                    hoveredStep === index ? 'scale-125 shadow-yellow-600/50' : ''
                  }`}>
                    {index + 1}
                  </div>

                  {/* Floating particles around icon */}
                  {hoveredStep === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-600/60 rounded-full animate-ping"
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
                
                <h3 className={`font-serif text-3xl text-yellow-600 mb-6 tracking-wide transition-all duration-300 ${
                  hoveredStep === index ? 'text-yellow-500 scale-105' : ''
                }`}>
                  {step.title}
                </h3>
                
                <p className={`text-gray-300 leading-loose font-light text-lg transition-all duration-300 ${
                  hoveredStep === index ? 'text-white' : ''
                }`}>
                  {step.description}
                </p>

                {/* Arrow connector (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-8 z-10">
                    <ArrowRight className={`w-8 h-8 text-yellow-600/50 transition-all duration-500 ${
                      hoveredStep === index ? 'text-yellow-600 scale-125' : ''
                    }`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block relative mt-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
            <svg className="w-full h-4" viewBox="0 0 800 40">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <line 
                x1="100" y1="20" x2="700" y2="20" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                strokeDasharray="15,10"
                filter="url(#glow)"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;