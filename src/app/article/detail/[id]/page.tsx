import React from 'react';
import MiniArticleCarousel from 'src/app/article/components/MiniArticleCarousel'; // Import the MiniArticleCarousel

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

// Sample article data (for testing)
const articleData: Article[] = [
  {
    id: 1,
    title: 'Orasi Warna-warni 2023 di OSKM ITB, Gaungkan Semangat Berkontribusi',
    dateTime: new Date('2023-07-29T00:00:00'),
    author: 'Lidya Marthadila',
    views: 1563,
    likes: 5000,
    readTime: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut turpis felis. Ut porttitor finibus magna, maximus auctor nisi tempus eget...',
    image: '/article-icons/Search_Not_Found.png',
  },
];

const Page: React.FC = () => {
  const selectedArticle = articleData[0]; // Contoh: Article Pertama

  return (
    <>
      <div style={styles.pageContainer}>
        {/* Spacer above the entire page content */}
        <div style={styles.largeSpacer}></div>

        <div>
          <a href="/article/list">
            <button className="prev-button" style={styles.prevButton}/>
          </a>
        </div>

        <div style={styles.articleTitle}>
          <h1>{selectedArticle.title}</h1>
        </div>

        <div style={styles.articleDate}>
          Dibuat <div style={styles.statsItem}>{selectedArticle.dateTime.toDateString()}</div>
        </div>

        <div style={styles.statsContainer}>
          <div style={styles.statsItem}>
            👤 {selectedArticle.author}
          </div>
          <div style={styles.statsItem}>
            👁️ {selectedArticle.views}
          </div>
          <div style={styles.statsItem}>
            ⏳ {selectedArticle.readTime} min read
          </div>
        </div>

        <div style={styles.articleImageContainer}>
          <img src={selectedArticle.image} alt={selectedArticle.title} style={styles.articleImage} />
        </div>

        <div style={styles.articleDescriptionContainer}>
          <div style={styles.articleDescription}>
            <p>{selectedArticle.description}</p>
          </div>
        </div>

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
    fontFamily: 'REM, sans-serif',
  },
  articleTitle: {
    fontFamily: 'Mogula, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    marginBottom: '10px',
    color: '#ffffff', // Make all text white
  },
  articleDate: {
    fontSize: '1rem',
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#ffffff', // Make all text white
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    maxWidth: '90%',
    margin: '0 auto',
    color: '#ffffff', // Make all text white
  },
  statsItem: {
    display: 'inline-block',
    fontSize: '1rem', 
  },
  articleImageContainer: {
    textAlign: 'center' as const,
    margin: '20px 0',
  },
  articleImage: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '20px',
    margin: '0 auto',
  },
  articleDescriptionContainer: {
    width: '75%', // Center the description box
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    margin: '0 auto',
    color: '#ffffff', // Make all text white
  },
  articleDescription: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    textAlign: 'justify' as const,
  },
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  prevButton: {
    width: '50px',
    height: '50px',
  },
  spacer: {
    height: '50px',
  },
  largeSpacer: {
    height: '100px',
  },

  // Media query for mobile responsiveness
  '@media (max-width: 768px)': {
    articleTitle: {
      fontSize: '1.5rem',
    },
    statsContainer: {
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    statsItem: {
      fontSize: '0.875rem',
    },
    articleDescriptionContainer: {
      width: '90%', // Expand to 90% width on smaller screens
    },
    articleDescription: {
      fontSize: '0.9rem',
    },
  },
};

export default Page;
