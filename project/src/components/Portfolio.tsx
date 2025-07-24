import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean[]>([false, false, false]);
  const [hoveredThumbnail, setHoveredThumbnail] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Portfolio videos - replace these URLs with your actual video content
  const portfolioVideos = [
    {
      id: 1,
      title: "Luxury Fashion Campaign",
      description: "AI-generated cinematic commercial for premium fashion brand showcasing the future of luxury advertising",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
    },
    {
      id: 2,
      title: "Tech Product Launch",
      description: "Dynamic product showcase with AI-powered visual effects and cutting-edge motion graphics",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
    },
    {
      id: 3,
      title: "Brand Identity Reveal",
      description: "Sophisticated brand transformation and logo animation with cinematic storytelling elements",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % portfolioVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + portfolioVideos.length) % portfolioVideos.length);
  };

  const togglePlay = (index: number) => {
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying[index]) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(prev => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  return (
    <section id="portfolio" className="py-40 bg-gradient-to-b from-gray-900 to-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`text-center mb-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-full px-8 py-3 mb-12 backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300 transform hover:scale-105">
            <Eye className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-600 text-sm font-medium tracking-wider">✨ OUR WORK</span>
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-600 mb-12 tracking-wider text-shadow hover:scale-105 transition-transform duration-500 cursor-default">
            PORTFOLIO
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-5xl mx-auto leading-loose font-light">
            Discover our latest AI-powered creative projects. Each piece showcases the perfect blend 
            of cutting-edge technology and artistic vision.
          </p>
        </div>

        {/* Video Carousel */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative max-w-6xl mx-auto">
            {/* Main Video Display */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/50 backdrop-blur-sm border-2 border-yellow-600/20 shadow-2xl hover:border-yellow-600/40 transition-all duration-500 transform hover:scale-105 hover:shadow-yellow-600/25">
              <video
                id={`video-${currentVideo}`}
                className="w-full h-full object-cover"
                poster={portfolioVideos[currentVideo].thumbnail}
                controls={false}
                onPlay={() => setIsPlaying(prev => {
                  const newState = [...prev];
                  newState[currentVideo] = true;
                  return newState;
                })}
                onPause={() => setIsPlaying(prev => {
                  const newState = [...prev];
                  newState[currentVideo] = false;
                  return newState;
                })}
              >
                <source src={portfolioVideos[currentVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                <button
                  onClick={() => togglePlay(currentVideo)}
                  className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-600/50"
                >
                  {isPlaying[currentVideo] ? (
                    <Pause className="w-10 h-10 text-black ml-1" />
                  ) : (
                    <Play className="w-10 h-10 text-black ml-2" />
                  )}
                </button>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevVideo}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/50 backdrop-blur-sm border-2 border-yellow-600/30 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-black transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/50"
              >
                <ChevronLeft className="w-8 h-8 text-yellow-600 group-hover:text-black" />
              </button>
              
              <button
                onClick={nextVideo}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/50 backdrop-blur-sm border-2 border-yellow-600/30 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-black transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/50"
              >
                <ChevronRight className="w-8 h-8 text-yellow-600 group-hover:text-black" />
              </button>

              {/* Video Counter */}
              <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm border border-yellow-600/30 rounded-full px-4 py-2">
                <span className="text-yellow-600 font-medium text-sm">
                  {currentVideo + 1} / {portfolioVideos.length}
                </span>
              </div>
            </div>

            {/* Video Information */}
            <div className="mt-12 text-center">
              <h3 className="font-serif text-4xl text-yellow-600 mb-6 tracking-wide hover:text-yellow-500 transition-colors duration-300 cursor-default">
                {portfolioVideos[currentVideo].title}
              </h3>
              <p className="text-gray-300 text-xl leading-loose font-light max-w-3xl mx-auto">
                {portfolioVideos[currentVideo].description}
              </p>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-6 mt-16">
              {portfolioVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentVideo 
                      ? 'bg-yellow-600 scale-125 shadow-lg shadow-yellow-600/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className={`mt-20 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolioVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideo(index)}
                onMouseEnter={() => setHoveredThumbnail(index)}
                onMouseLeave={() => setHoveredThumbnail(null)}
                className={`relative aspect-video rounded-2xl overflow-hidden transition-all duration-500 transform ${
                  index === currentVideo 
                    ? 'ring-4 ring-yellow-600 scale-105 shadow-2xl shadow-yellow-600/25' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100 hover:shadow-xl'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredThumbnail === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg font-semibold truncate mb-1">
                    {video.title}
                  </h4>
                  <div className="w-full bg-gray-600 h-1 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-yellow-600 transition-all duration-500 ${
                        index === currentVideo ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Hover overlay */}
                {hoveredThumbnail === index && (
                  <div className="absolute inset-0 bg-yellow-600/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;