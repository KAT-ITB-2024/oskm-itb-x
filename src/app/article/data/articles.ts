import { useEffect, useState } from "react";
import { getAllArticles } from "~/lib/contentful/api";

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  views: number;
  likes: number;
  readTime: number;
  image: { url: string };
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return articles;
};
