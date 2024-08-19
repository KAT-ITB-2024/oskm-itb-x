import React, { useState, useEffect } from 'react';

// Define the Article interface
interface Article {
  id: number;
  title: string;
  dateTime: Date;
  author: string;
  views: number;
  likes: number;
  readTime: number;
  description: string;
  image: string;
}

// Sample article data (Nguji saja)
const articleData: Article[] = [
  {
    id: 1,
    title: 'Orasi Warna-warni 2023 di OSKM ITB, Gaungkan Semangat Berkontribusi',
    dateTime: new Date('2023-07-29T00:00:00'),
    author: 'Lidya Marthadila',
    views: 1563,
    likes: 8,
    readTime: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut turpis felis. Ut porttitor finibus magna, maximus auctor nisi tempus eget...',
    image: '/article-icons/Search_Not_Found.png', 
  },
];

const Page: React.FC = () => {
  const selectedArticle = articleData[0]; // Example: Select the first article

  return (
    <div style={styles.pageContainer}>
      <div style={styles.articleTitle}>
        <h1>{selectedArticle.title}</h1>
      </div>
      <div style={styles.articleStats}>
        <div style={styles.statsItem}>{selectedArticle.dateTime.toDateString()}</div>
        <div style={styles.statsItem}>{selectedArticle.author}</div>
        <div style={styles.statsItem}>{selectedArticle.views}</div>
        <div style={styles.statsItem}>{selectedArticle.readTime} min read</div>
      </div>
      <br/>
      <div style={styles.articleImageContainer}>
        <img src={selectedArticle.image} alt={selectedArticle.title} style={styles.articleImage} />
      </div>
      <br/>
      <div style={styles.articleDescription}>
        <p>{selectedArticle.description}</p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  pageContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundimage: '/article-icons/BiruBackground1.png',
    borderRadius: '16px',
    fontFamily: 'REM, sans-serif',
  },
  articleTitle: {
    fontFamily: 'Mogula, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '20px',
  },
  articleStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '14px',
  },
  statsItem: {
    display: 'inline-block',
  },
  articleImageContainer: {
    textAlign: 'center' as 'center',
    margin: '20px 0',
  },
  articleImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
  },
  articleDescription: {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'justify' as 'justify',
  },
};

export default Page;
