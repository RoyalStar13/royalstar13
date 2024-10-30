import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => Promise<void>;
  onSave: (postId: string) => Promise<void>;
  onComment: (postId: string, text: string) => Promise<void>;
}

export default function Post({ post, onLike, onSave, onComment }: PostProps) {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onComment(post.id, comment);
      setComment('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center p-4">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold">{post.user.username}</span>
      </div>
      
      <div className="relative pb-[100%]">
        <img
          src={post.image}
          alt="Post content"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button 
              className={`hover:text-gray-500 ${post.isLiked ? 'text-red-500' : ''}`}
              onClick={() => onLike(post.id)}
            >
              <Heart className="w-6 h-6" fill={post.isLiked ? 'currentColor' : 'none'} />
            </button>
            <button className="hover:text-gray-500">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-500">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
          <button 
            className={`hover:text-gray-500 ${post.isSaved ? 'text-black' : ''}`}
            onClick={() => onSave(post.id)}
          >
            <Bookmark className="w-6 h-6" fill={post.isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <div className="font-semibold mb-2">{post.likes.toLocaleString()} likes</div>
        
        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{post.user.username}</span>
            {post.caption}
          </p>
          
          {post.comments.length > 0 && (
            <div className="space-y-1">
              {post.comments.map(comment => (
                <p key={comment.id}>
                  <span className="font-semibold mr-2">{comment.user.username}</span>
                  {comment.text}
                </p>
              ))}
            </div>
          )}
          
          <p className="text-gray-400 text-xs uppercase">{post.timeAgo} ago</p>
        </div>

        <form onSubmit={handleSubmitComment} className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0 text-sm"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim() || isSubmitting}
            className="text-blue-500 font-semibold text-sm disabled:opacity-50"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}