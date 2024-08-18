// src/app/page.tsx
import SearchBar from "src/app/article/list/SearchBar";

export default function Page() {
  return (
    <div className="pagetsx-article-background" >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="/article">
        <button className="prev-button">
        </button>
      </a>
      <div style={{ marginLeft: "40px" }}>
        <h2>List of Articles</h2>
      </div>

      <SearchBar />
    </div>
  );
}
