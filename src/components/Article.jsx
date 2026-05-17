import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      {/* Default parameter ensures a date renders even if missing from data */}
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;