import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeIn">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-500">Hello, World!</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate software engineer with a love for creating elegant solutions 
            to complex problems. With expertise in full-stack development, I specialize 
            in building scalable web applications using modern technologies.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-400">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-500">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-500">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-green-500/20 text-gray-400 hover:text-green-500 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-green-500/20 text-gray-400 hover:text-green-500 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-green-500/20 text-gray-400 hover:text-green-500 transition-all">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-green-500/30">
          <img 
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}