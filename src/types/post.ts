export interface Post {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  tags?: readonly string[];
  author?: string;
  category?: string;
  readTime?: string;
  content?: string;
  html?: string;
} 