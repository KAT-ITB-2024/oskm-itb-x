"use client";

import React, { useEffect, useState } from "react";

const BgAnimation1: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bubbles = Array.from({ length: 7 }).map((_, i) => {
    const size = 100 + i * 50; // Gradually increasing sizes from 100px to 400px
    const position = Math.random() * 80 + 10; // Random position, avoiding edges

    const styles = {
      bubble: {
        position: "absolute" as "absolute",
        width: `${size}px`,
        height: `${size}px`,
        left: `${position}%`,
        bottom: `${scrollY * 0.3 - i * 200}px`, // Adjust based on scroll
        animation: `moveX${i} 7s ease-in-out infinite alternate, moveY${i} 5s ease-in-out infinite alternate`,
        zIndex: -1,
        opacity: 0.8,
      },
    };

    return (
      <img
        key={i}
        className="bubble-image"
        src="/article-icons/bubble.png"
        alt="Bubble"
        style={styles.bubble}
      />
    );
  });

  return (
    <div style={containerStyles}>
      <style>{inlineCSS}</style>
      {bubbles}
    </div>
  );
};

const containerStyles = {
  position: "absolute" as "absolute",
  top: "100vh", // Start bubbles just below the initial viewport height
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden" as "hidden",
  pointerEvents: "none" as "none", // Allow interactions with other elements
  zIndex: -1, // Behind the content
};

const inlineCSS = `
  @keyframes moveX0 {
    0% { transform: translateX(0); }
    100% { transform: translateX(50px); }
  }
  @keyframes moveY0 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100px); }
  }
  @keyframes moveX1 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-60px); }
  }
  @keyframes moveY1 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-120px); }
  }
  @keyframes moveX2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(40px); }
  }
  @keyframes moveY2 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-140px); }
  }
  @keyframes moveX3 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-30px); }
  }
  @keyframes moveY3 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-160px); }
  }
  @keyframes moveX4 {
    0% { transform: translateX(0); }
    100% { transform: translateX(70px); }
  }
  @keyframes moveY4 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-180px); }
  }
  @keyframes moveX5 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50px); }
  }
  @keyframes moveY5 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-200px); }
  }
  @keyframes moveX6 {
    0% { transform: translateX(0); }
    100% { transform: translateX(60px); }
  }
  @keyframes moveY6 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-220px); }
  }
`;

export default BgAnimation1;
