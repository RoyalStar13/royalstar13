import React from 'react';

export default function Welcome() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-green-500 font-mono space-y-4">
        <div className="animate-pulse mb-8">
          <div className="text-4xl font-bold mb-2">SYSTEM BOOT SEQUENCE</div>
          <div className="h-1 w-48 bg-green-500"></div>
        </div>
        
        <div className="space-y-2 typewriter">
          <p>Initializing system components...</p>
          <p>Loading kernel modules...</p>
          <p>Starting user interface...</p>
          <p className="animate-pulse">Welcome to Portfolio OS v1.0</p>
        </div>
      </div>
    </div>
  );
}