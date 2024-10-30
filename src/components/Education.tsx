import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "MIT",
      year: "2016-2020",
      description: "Focus on Software Engineering and Data Structures"
    },
    {
      degree: "High School Diploma",
      school: "Tech High School",
      year: "2012-2016",
      description: "Computer Science Major"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Education Timeline</h2>
      
      <div className="relative border-l-2 border-green-500/30 pl-8 ml-8 space-y-12">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="relative group"
          >
            <div className="absolute -left-[41px] -top-1 w-6 h-6 bg-gray-900 border-2 border-green-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
            
            <div className="absolute -left-[120px] top-0 hidden group-hover:block animate-fadeIn">
              <Calendar className="w-5 h-5 text-green-500" />
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/30 transform group-hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-400">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
              
              <p className="text-gray-300">{edu.description}</p>
              
              <div className="absolute right-4 bottom-4">
                <GraduationCap className="w-6 h-6 text-green-500/50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}