export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  views: number;
  likes: number;
  readTime: number;
  image: { url: string };
}
