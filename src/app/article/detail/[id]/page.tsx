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
            <img src="/article-icons/author.png" alt="Author" style={styles.statsIcon} /> {selectedArticle.author}
          </div>
          <div style={styles.statsItem}>
            <img src="/article-icons/views_eye.png" alt="Views" style={styles.statsIcon} /> {selectedArticle.views}
          </div>
          <div style={styles.statsItem}>
            <img src="/article-icons/timer.png" alt="Read Time" style={styles.statsIcon} /> {selectedArticle.readTime} min read
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
    display: 'flex', // Menggunakan flexbox
    flexDirection: 'column' as const,
    alignItems: 'center', // Pastikan konten berada di tengah
  },
  articleTitle: {
    fontFamily: 'Mogula, sans-serif',
    fontSize: '64px',
    fontWeight: '400',
    lineHeight: '76.8px',
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
    display: 'flex', // Gunakan flexbox
    justifyContent: 'center', // Pastikan berada di tengah
    alignItems: 'center',
    padding: '0px 16px', // Padding horizontal tetap
    gap: '8px',
    borderRadius: '10cm', // Border-radius 10cm sesuai permintaan
    height: '32px', // Fixed height
    background: 'linear-gradient(166.31deg, rgba(255, 254, 254, 0.36) 9.26%, rgba(255, 202, 224, 0.48) 89.28%)',
    boxShadow: '0px 0px 10px 0px #FFFFFF',
    margin: '20px 0', // Ruang di atas dan bawah
  },
  statsItem: {
    display: 'inline-flex', // Menggunakan inline-flex agar teks dan gambar sejajar
    alignItems: 'center',
    fontSize: '1rem',
  },
  statsIcon: {
    width: '20px', // Lebar icon
    height: '20px', // Tinggi icon
    marginRight: '8px', // Memberi jarak antara icon dan teks
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
    statsContainer: {
      flexDirection: 'column', // Mengubah layout menjadi kolom di perangkat kecil
      borderRadius: '10cm', // Border-radius tetap sama
      width: '100%', // Lebar 100% untuk layar kecil
    },
    statsItem: {
      fontSize: '0.875rem',
    },
    articleTitle: {
      fontSize: '1.5rem',
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
