import React from 'react';

export default function News(props) {
  const { title, publishedAt, description, urlToImage, url } = props.content;
  return (
    <section className="newsPanel">
      <h1>{title}</h1>
      <p>
        <time>{publishedAt}</time>
      </p>
      <img src={urlToImage} alt={title} />
      <p>{description}</p>
      <button type="submit">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Details
        </a>
      </button>
    </section>
  );
}
