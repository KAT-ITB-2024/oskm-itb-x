// src/app/page.tsx
import SearchBar from "src/app/article/list/SearchBar";

export default function Page() {
  return (
    <div style={{
      backgroundColor: '#000D7680', // Apply semi-transparent background color
      backgroundImage: 'url("/article-icons/BiruBackground1.png")', // Set the background image
      backgroundSize: 'cover', // Ensure the background image covers the entire div
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // Prevent the background from repeating
      padding: '20px', // Add padding to ensure content does not touch the edges
      color: 'white', // Set text color to white for better readability
    }}>
      <div
        
      >
        <h2>List of Articles</h2>
        <br />
      </div>
      <SearchBar />
    </div>
  );
}
