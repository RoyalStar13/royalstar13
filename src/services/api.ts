import { User, Story, Post } from '../types';

// Simulated database
const users: User[] = [
  { id: '1', username: 'janedoe', name: 'Jane Doe', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { id: '2', username: 'traveler', name: 'Alex Travel', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
  { id: '3', username: 'foodie', name: 'Sam Cook', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
];

const stories: Story[] = users.map(user => ({
  id: `story-${user.id}`,
  user,
  isViewed: false,
}));

const posts: Post[] = [
  {
    id: '1',
    user: users[0],
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600',
    likes: 1234,
    caption: 'Enjoying a beautiful sunset 🌅',
    timeAgo: '2h',
    comments: [],
    isLiked: false,
    isSaved: false,
  },
  {
    id: '2',
    user: users[1],
    image: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=600',
    likes: 842,
    caption: 'Adventure awaits! 🏔️ #travel #explore',
    timeAgo: '5h',
    comments: [],
    isLiked: false,
    isSaved: false,
  },
];

// Simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getStories(): Promise<Story[]> {
    await delay(500);
    return [...stories];
  },

  async getPosts(): Promise<Post[]> {
    await delay(800);
    return [...posts];
  },

  async likePost(postId: string): Promise<void> {
    await delay(300);
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
    }
  },

  async savePost(postId: string): Promise<void> {
    await delay(300);
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.isSaved = !post.isSaved;
    }
  },

  async addComment(postId: string, text: string): Promise<Comment> {
    await delay(500);
    const comment: Comment = {
      id: Date.now().toString(),
      user: users[0], // Current user
      text,
      timeAgo: 'now',
      likes: 0,
    };
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.comments.push(comment);
    }
    return comment;
  },
};