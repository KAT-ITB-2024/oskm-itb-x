import { type Document } from "@contentful/rich-text-types";

export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: {
    json: Document;
  }
  author: string;
  createdAt: string;
  views: number;
  likes: number;
  readTime: number;
  image: { url: string };
}
