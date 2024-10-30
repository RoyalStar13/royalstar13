import React from 'react';

const suggestions = [
  { id: 1, username: 'photography_pro', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', relation: 'Followed by traveler + 2 more' },
  { id: 2, username: 'adventure.time', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150', relation: 'Followed by artist + 8 more' },
  { id: 3, username: 'foodie_adventures', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', relation: 'New to Instagram' },
  { id: 4, username: 'art.daily', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', relation: 'Followed by photographer + 4 more' },
];

export default function Suggestions() {
  return (
    <div className="fixed w-[320px] pt-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
            alt="Your profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">yourusername</div>
            <div className="text-gray-500 text-sm">Your Name</div>
          </div>
        </div>
        <button className="text-blue-500 text-sm font-semibold">Switch</button>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 font-semibold">Suggestions For You</span>
          <button className="text-sm font-semibold">See All</button>
        </div>
        
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={suggestion.avatar}
                  alt={suggestion.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{suggestion.username}</div>
                  <div className="text-gray-500 text-xs">{suggestion.relation}</div>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-semibold">Follow</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-xs text-gray-400">
        © 2024 PHOTOGRAM FROM STACKBLITZ
      </div>
    </div>
  );
}