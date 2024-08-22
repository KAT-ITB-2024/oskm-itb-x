// src/app/article/components/Card.tsx
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

  return (
    <div
      key={id}
      className="card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <img src={image} alt={title} className="card-image" style={{ width: '100%', height: 'auto' }} />
      <div className="card-content" style={{ padding: '16px' }}>
        <div className="card-meta">
          <span className="card-stats">
            {views} views | {readTime} read
          </span>
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-details">
          <span className="card-date">{`${date} ${time} by `}</span>
          <span className="card-author">{author}</span>
        </div>
        <p className="card-description">{description}</p>
        <a className="card-read-more">
        {/* <a href={buttonlink} className="card-read-more"> */}
          {"Read More >>>"}
        </a>
      </div>
    </div>
  );
};

export default Card;
