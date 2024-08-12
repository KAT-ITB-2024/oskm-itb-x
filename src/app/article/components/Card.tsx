// src/app/article/components/Card.tsx
import React from 'react';

interface CardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  author: string;
  views: number;
  readTime: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  date,
  time,
  author,
  views,
  readTime,
  description,
  image,
}) => {
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
            {views} | {readTime}
          </span>
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-details">
          <span className="card-date">{date}</span> {time} by{' '}
          <span className="card-author">{author}</span>
        </div>
        <p className="card-description">{description}</p>
        <a href="#" className="card-read-more">
          {" Read More>>> "}
        </a>
      </div>
    </div>
  );
};

export default Card;
