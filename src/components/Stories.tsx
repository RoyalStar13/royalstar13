import React from 'react';
import { useStories } from '../hooks/useApi';

export default function Stories() {
  const { stories, loading } = useStories();

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
        <div className="flex space-x-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-1 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
              <div className="w-12 h-2 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full p-[2px] ${
              story.isViewed 
                ? 'bg-gray-200' 
                : 'bg-gradient-to-tr from-yellow-400 to-pink-600'
            }`}>
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img
                  src={story.user.avatar}
                  alt={story.user.username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-gray-500">{story.user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}