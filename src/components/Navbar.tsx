import React from 'react';
import { Home, Search, PlusSquare, Film, User, Heart, Send } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold">Photogram</div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full"><Home className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><Send className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><PlusSquare className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><Search className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><Heart className="w-6 h-6" /></button>
            <button className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}