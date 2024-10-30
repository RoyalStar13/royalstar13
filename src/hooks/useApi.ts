import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Post, Story } from '../types';

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStories()
      .then(setStories)
      .finally(() => setLoading(false));
  }, []);

  return { stories, loading };
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const likePost = async (postId: string) => {
    await api.likePost(postId);
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.likes + (post.isLiked ? -1 : 1) }
        : post
    ));
  };

  const savePost = async (postId: string) => {
    await api.savePost(postId);
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const addComment = async (postId: string, text: string) => {
    const newComment = await api.addComment(postId, text);
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
  };

  return { posts, loading, likePost, savePost, addComment };
}