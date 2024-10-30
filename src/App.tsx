import React, { useState, useEffect } from 'react';
import { Power, Terminal, User, Book, Code, Mail, Laptop } from 'lucide-react';
import Welcome from './components/Welcome';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ShutdownModal from './components/ShutdownModal';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [activeSection, setActiveSection] = useState('welcome');
  const [showShutdownModal, setShowShutdownModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
      setActiveSection('about');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handlePowerOff = () => {
    setIsPoweredOn(false);
    setTimeout(() => {
      document.documentElement.classList.add('shutdown');
    }, 1000);
  };

  if (!isPoweredOn) {
    return (
      <div className="fixed inset-0 bg-black transition-all duration-1000">
        <div className="text-green-500 text-center mt-[40vh] font-mono">
          System shutting down...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isBooting ? (
        <Welcome />
      ) : (
        <div className="flex">
          {/* Sidebar */}
          <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-800 flex flex-col items-center py-8 border-r border-green-500/30">
            <div className="space-y-8">
              <button 
                onClick={() => setShowShutdownModal(true)}
                className="p-3 rounded-lg hover:bg-red-500/20 text-red-500 transition-all"
              >
                <Power className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => setActiveSection('about')}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === 'about' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'hover:bg-green-500/10 text-gray-400'
                }`}
              >
                <User className="w-6 h-6" />
              </button>

              <button 
                onClick={() => setActiveSection('education')}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === 'education' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'hover:bg-green-500/10 text-gray-400'
                }`}
              >
                <Book className="w-6 h-6" />
              </button>

              <button 
                onClick={() => setActiveSection('skills')}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === 'skills' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'hover:bg-green-500/10 text-gray-400'
                }`}
              >
                <Terminal className="w-6 h-6" />
              </button>

              <button 
                onClick={() => setActiveSection('projects')}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === 'projects' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'hover:bg-green-500/10 text-gray-400'
                }`}
              >
                <Code className="w-6 h-6" />
              </button>

              <button 
                onClick={() => setActiveSection('contact')}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === 'contact' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'hover:bg-green-500/10 text-gray-400'
                }`}
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 ml-20 p-8">
            <header className="flex items-center space-x-4 mb-8">
              <Laptop className="w-8 h-8 text-green-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                John Doe | Software Engineer
              </h1>
            </header>

            <div className="max-w-6xl mx-auto">
              {activeSection === 'about' && <About />}
              {activeSection === 'education' && <Education />}
              {activeSection === 'skills' && <Skills />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'contact' && <Contact />}
            </div>
          </main>

          {showShutdownModal && (
            <ShutdownModal
              onConfirm={handlePowerOff}
              onCancel={() => setShowShutdownModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;