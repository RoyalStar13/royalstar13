export interface User {
  id: string;
  username: string;
  avatar: string;
  name?: string;
  isFollowing?: boolean;
}

export interface Story {
  id: string;
  user: User;
  isViewed?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  likes: number;
  caption: string;
  timeAgo: string;
  comments: Comment[];
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timeAgo: string;
  likes: number;
}