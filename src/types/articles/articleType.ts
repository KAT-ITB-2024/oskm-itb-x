export interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  views: number;
  likes: number;
  readTime: number;
  image: { url: string };
}
