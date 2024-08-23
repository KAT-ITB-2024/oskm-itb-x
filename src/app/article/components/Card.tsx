// src/app/article/components/Card.tsx
"use client";

import React from 'react';

interface CardProps {
  id: number;
  title: string;
  createdAt: string;
  author: string;
  views: number;
  likes: number;
  readTime: number;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  createdAt,
  author,
  views,
  readTime,
  description,
  image,
}) => {

  const date = new Date(createdAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = new Date(createdAt).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Kalau misalnya deskripsinya lebih 100 karakter maka diubah jadi "..." lanjutannya
  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div
      key={id}
      className="card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <img
        src={image} // Access the url from the image object
        alt={title}
        className="card-image"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="card-content" style={{ padding: '16px', flex: '1' }}>
        <div className="card-meta" style={{ marginBottom: '8px' }}>
          <span className="card-stats">
            {views} views | {readTime} min read
          </span>
        </div>
        <h2 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          {title}
        </h2>
        <div className="card-details" style={{ marginBottom: '16px' }}>
          <span className="card-date" style={{ fontSize: '0.875rem', color: '#555' }}>
            {`${date} ${time} by `}
          </span>
          <span className="card-author" style={{ fontSize: '0.875rem', color: '#007bff' }}>
            {author}
          </span>
        </div>
        <p className="card-description" style={{ fontSize: '1rem', marginBottom: '16px' }}>
          {truncatedDescription}
        </p>
        <a
          href={`/article/detail/${id}`}
          className="card-read-more"
        >
          {"Read More >>>"}
        </a>
      </div>
    </div>
  );
};

export default Card;
