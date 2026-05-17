import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {/* Iterates through posts array to render individual Article components */}
      {posts.map((post) => (
        <Article
          key={post.id} // Essential unique key for React's reconciliation engine
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;