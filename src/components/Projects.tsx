import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      description: "Real-time data visualization platform with machine learning insights",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      link: "https://github.com"
    },
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://github.com"
    },
    {
      title: "Social Media App",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
      description: "Real-time social platform with video streaming",
      tech: ["React Native", "Firebase", "WebRTC", "Redux"],
      link: "https://github.com"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Featured Projects</h2>
      
      <div className="relative group">
        <div className="relative aspect-video rounded-lg overflow-hidden border border-green-500/30">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="min-w-full"
              >
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}