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

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '240px',
        height: '400px',
        padding: '20px 15px',
        borderRadius: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px #64B1F7BF',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        margin: '0 auto',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 15px #64B1F7BF';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 8px #64B1F7BF';
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '200px',    // Set the width to 200px
          height: '300px',   // Set the height to 300px
          objectFit: 'cover', // Ensure the image covers the area without distortion
          borderRadius: '20px',
          boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2)',
          margin: '0 auto',  // Center the image horizontally within the card
        }}
      />
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5px 0' }}>
        <div style={{ fontSize: '12px', color: '#999', margin: '2px 0' }}>
          <span>
            {views} views | {readTime} min read
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'mogula',
            fontSize: '17.75px',
            fontWeight: 400,
            lineHeight: '21.31px',
            textAlign: 'justify',
            textShadow: '3.55px 5.33px 44.39px 0px #64B1F7',
            color: '#0010A4',
            width: '100%',
            height: 'auto',
            margin: 0,
          }}
        >
          {title}
        </h2>
        <div
          style={{
            fontFamily: 'REM',
            fontSize: '10.65px',
            fontWeight: 400,
            lineHeight: '15.98px',
            textAlign: 'left',
            width: '100%',
            color: '#9EA2AD',
            margin: 0,
          }}
        >
          <span>{`${date} ${time} by `}</span>
          <span style={{ color: '#007bff' }}>{author}</span>
        </div>
        <p
          style={{
            fontFamily: 'REM',
            fontSize: '12.43px',
            fontWeight: 400,
            lineHeight: '18.64px',
            textAlign: 'justify',
            color: '#3678FF',
            margin: '16px 0',
            width: '100%',
            height: 'auto',
          }}
        >
          {truncatedDescription}
        </p>
        <a
          href={`/article/detail/${id}`}
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            textAlign: 'right',
            color: '#FB43BD',
            marginTop: '5px',
            position: 'absolute',
            bottom: '8px',
            right: '8px',
          }}
        >
          {"Read More >>>"}
        </a>
      </div>
    </div>
  );
};

export default Card;
