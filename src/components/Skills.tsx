import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 }
    ],
    "Backend": [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 70 }
    ],
    "DevOps": [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 65 }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div 
            key={category}
            className="bg-gray-800 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-4">{category}</h3>
            
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transform origin-left transition-transform duration-1000"
                      style={{ width: `${skill.level}%`, transform: 'scaleX(0)', animation: 'growBar 1.5s ease forwards' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}