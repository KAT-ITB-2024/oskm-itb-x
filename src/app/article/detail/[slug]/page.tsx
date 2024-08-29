"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MiniArticleCarousel from 'src/app/article/components/MiniArticleCarousel';
import { getArticle } from '~/lib/contentful/api';
import { Article } from '~/types/articles/articleType';

const Page: React.FC = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    getArticle({slug: slug as string}).then((data) => {
      setArticle(data);
    })
  }, []);

  useEffect(() => {
    console.log(article);
  }, [article]);

  return (
    <>
      <div style={styles.pageContainer}>
        {/* Overlay dengan warna dan opacity 40% */}
        <div style={styles.overlay}></div>

        {/* Spacer above the entire page content */}
        <div style={styles.largeSpacer}></div>

        {/* Tombol Go Back yang bisa diposisikan bebas */}
        <div style={styles.goBackContainer}>
          <a href="/article/list">
            <button className="GoBackButton" style={styles.goBackButton}/>
          </a>
        </div>

        {
          article && (
            <>
              <div style={styles.articleTitle}>
                <h1>{article.title}</h1>
              </div>

              <div style={styles.articleDate}>
                Dibuat{' '}
                <div style={styles.statsItem}>
                  {`${new Date(article.createdAt).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} ${new Date(article.createdAt).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}`} WIB
                </div>
              </div>

              <div style={styles.statsContainer}>
                <div style={styles.statsItem}>
                  <img src="/article-icons/author.png" alt="Author" style={styles.statsIcon} /> {article.author}
                </div>
                <div style={styles.statsItem}>
                  <img src="/article-icons/views_eye.png" alt="Views" style={styles.statsIcon} /> {article.views}
                </div>
                <div style={styles.statsItem}>
                  <img src="/article-icons/timer.png" alt="Read Time" style={styles.statsIcon} /> {(article.readTime / 60).toFixed(0)} min read
                </div>
              </div>

              <div style={styles.articleImageContainer}>
                <img src={article.image.url} alt={article.title} style={styles.articleImage} />
              </div>

              <div style={styles.articleDescriptionContainer}>
                <div style={styles.articleDescription}>
                  <p>{article.description}</p>
                </div>
              </div>
            </>
          )
        }

        {/* Spacer before the button */}
        <div style={styles.spacer}/>

        {/* MiniArticleCarousel Component */}
        <MiniArticleCarousel />

        {/* Spacer below the button */}
        <div style={styles.spacer}/>

      </div>
    </>
  );
};

// Styles Page disimpan disini biar enak diatur sebelum diletakkan di Global.css//
const styles = {
  pageContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundImage: `url('/article-icons/BiruBackground1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'REM, sans-serif',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center', 
    position: 'relative' as const, // penting untuk overlay
  },
  overlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000D76',
    opacity: 0.4, // Opacity 40%
    zIndex: 0, // pastikan overlay berada di bawah konten
  },
  goBackContainer: {
    position: 'absolute' as const,
    top: '20px',  // Contoh: posisikan 20px dari atas
    left: '20px', // Contoh: posisikan 20px dari kiri
    zIndex: 3, // Pastikan berada di atas overlay
  },
  goBackButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  articleTitle: {
    fontFamily: 'Mogula, sans-serif',
    fontSize: '64px',
    fontWeight: '400',
    lineHeight: '76.8px',
    textAlign: 'center' as const,
    marginBottom: '10px',
    color: '#ffffff', 
    zIndex: 2, // Konten di atas overlay
  },
  articleDate: {
    fontSize: '1rem',
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#ffffff', 
    zIndex: 2,
  },
  statsContainer: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px', 
    gap: '8px',
    borderRadius: '10cm',
    height: '32px',
    background: 'linear-gradient(166.31deg, rgba(255, 254, 254, 0.36) 9.26%, rgba(255, 202, 224, 0.48) 89.28%)',
    boxShadow: '0px 0px 10px 0px #FFFFFF',
    margin: '20px 0', 
    color: '#ffffff',
    zIndex: 2,
  },
  statsItem: {
    display: 'inline-flex', 
    alignItems: 'center',
    fontSize: '1rem',
  },
  statsIcon: {
    width: '20px', 
    height: '20px', 
    marginRight: '8px', 
  },
  articleImageContainer: {
    textAlign: 'center' as const,
    margin: '20px 0',
    zIndex: 2,
  },
  articleImage: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '20px',
    margin: '0 auto',
  },
  articleDescriptionContainer: {
    width: '75%', 
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    margin: '0 auto',
    color: '#ffffff', 
    zIndex: 2,
  },
  articleDescription: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    textAlign: 'justify' as const,
  },
  spacer: {
    height: '50px',
  },
  largeSpacer: {
    height: '100px',
  },

  '@media (max-width: 768px)': {
    statsContainer: {
      flexDirection: 'column', 
      borderRadius: '10cm', 
      width: '100%',
    },
    statsItem: {
      fontSize: '0.875rem',
    },
    articleTitle: {
      fontSize: '1.5rem',
    },
    articleDescriptionContainer: {
      width: '90%', 
    },
    articleDescription: {
      fontSize: '0.9rem',
    },
  },
};

export default Page;
