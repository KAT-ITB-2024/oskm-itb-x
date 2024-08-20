"use client";

import React, { useEffect } from "react";

const BgImages1: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bubbles = document.querySelectorAll('.bubble-image');
      bubbles.forEach((bubble: any) => {
        const rect = bubble.getBoundingClientRect();
        bubble.style.transform = `translateY(${window.scrollY * -0.5}px) translateX(${Math.sin(window.scrollY * 0.1) * 10}px)`;
        if (rect.bottom < 0) {
          bubble.style.display = 'none'; 
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      width: "120%",
      height: "100%",
      overflow: "hidden",
      zIndex: 6,
      pointerEvents: "none",
    },
    seaweedImage: {
      width: "35%",
      position: "absolute" as "absolute",
      bottom: "calc(5% - 40px)", // Lowered by 40px
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
    },
    turtleImage: {
      position: "absolute" as "absolute",
      bottom: "calc(10% - 40px)", // Lowered by 40px
      left: "45%",
      transform: "translateX(-50%)",
      width: "35%",
      zIndex: 2,
      animation: "swimHorizontal 5s infinite ease-in-out",
    },
    fishImage: {
      position: "absolute" as "absolute",
      bottom: "calc(15% - 40px)", // Lowered by 40px
      left: "25%",
      transform: "translateX(-50%)",
      width: "20%",
      zIndex: 2,
      animation: "swimHorizontal 5s infinite ease-in-out",
    },
    fishsImage: {
      position: "absolute" as "absolute",
      top: "10%",
      left: "0%",
      width: "20%",
      zIndex: 1,
      animation: "swimVertical 4s infinite ease-in-out",
    },
    orangejellyImage: {
      position: "absolute" as "absolute",
      top: "50%",
      right: "10%",
      width: "20%",
      zIndex: 1,
      animation: "swimVertical 4s infinite ease-in-out",
    },
    bluejellyImage: {
      position: "absolute" as "absolute",
      top: "70%",
      right: "25%",
      width: "15%",
      zIndex: 1,
      animation: "swimVerticalSlow 8s infinite ease-in-out",
    },
    leftCornerCoral: {
      position: "absolute" as "absolute",
      bottom: 0,
      left: 0,
      width: "20%",
      zIndex: 1,
    },
    leftCornerCoral2: {
      position: "absolute" as "absolute",
      bottom: 0,
      left: "2%",
      width: "15%",
      zIndex: 1,
    },
    bubbleImage: {
      width: "40px",
      maxWidth: "80px",
      position: "absolute" as "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 5,
      animation: "floatBubble 8s linear infinite, bubbleHorizontal 3s ease-in-out infinite",
    },
    keyframes: `
      @keyframes swimHorizontal {
        0% {
          transform: translateX(-50%) translateY(0);
        }
        50% {
          transform: translateX(-50%) translateY(-10px);
        }
        100% {
          transform: translateX(-50%) translateY(0);
        }
      }

      @keyframes swimVertical {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes swimVerticalSlow {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes floatBubble {
        0% {
          bottom: -50px;
          opacity: 0.8;
          transform: translateX(-50%) scale(1) translateY(0);
        }
        50% {
          transform: translateX(-50%) scale(1.1) translateY(-100px);
        }
        100% {
          bottom: 100vh;
          opacity: 0;
          transform: translateX(-50%) scale(1) translateY(-200px);
        }
      }

      @keyframes bubbleHorizontal {
        0%, 100% {
          transform: translateX(-50%);
        }
        50% {
          transform: translateX(-45%);
        }
      }

      @media (min-width: 1024px) {
        .seaweed-image {
          width: 35%;
          bottom: calc(5% - 40px);
        }
        .turtle-image {
          bottom: calc(10% - 40px);
          left: 45%;
          width: 35%;
        }
        .fish-image {
          bottom: calc(15% - 40px);
          left: 25%;
          width: 20%;
        }
        .bubble-image {
          width: 50px;
          max-width: 100px;
        }
        .fishs-image {
          width: 25%;
        }
        .orangejelly-image,
        .bluejelly-image {
          width: 25%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 25%;
        }
      }

      @media (max-width: 768px) {
        .seaweed-image {
          width: 30%;
          bottom: calc(5% - 40px);
        }
        .turtle-image {
          bottom: calc(8% - 40px);
          left: 40%;
          width: 30%;
        }
        .fish-image {
          bottom: calc(12% - 40px);
          left: 20%;
          width: 15%;
        }
        .bubble-image {
          width: 20px;
          max-width: 40px;
        }
        .fishs-image {
          width: 15%;
        }
        .orangejelly-image,
        .bluejelly-image {
          width: 15%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 15%;
        }
      }

      @media (max-width: 480px) {
        .seaweed-image {
          width: 25%;
          bottom: calc(3% - 40px);
        }
        .turtle-image {
          bottom: calc(5% - 40px);
          left: 35%;
          width: 25%;
        }
        .fish-image {
          bottom: calc(10% - 40px);
          left: 15%;
          width: 12%;
        }
        .bubble-image {
          width: 15px;
          max-width: 30px;
        }
        .fishs-image {
          width: 12%;
        }
        .orangejelly-image,
        .bluejelly-image {
          width: 12%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 12%;
        }
      }
    `,
  };

  return (
    <div style={styles.container}>
      <style>{styles.keyframes}</style>

      <img 
        className="seaweed-image" 
        src="/article-icons/seaweed.png" 
        alt="Seaweed"
        style={styles.seaweedImage}
      />

      <img 
        className="turtle-image" 
        src="/article-icons/turtle.png" 
        alt="Turtle"
        style={styles.turtleImage}
      />
      <img 
        className="fish-image" 
        src="/article-icons/fish.png" 
        alt="Fish"
        style={styles.fishImage}
      />

      <img 
        className="left-corner-coral" 
        src="/article-icons/leftcornercoral.png" 
        alt="Left Corner Coral"
        style={styles.leftCornerCoral}
      />
      <img 
        className="left-corner-coral-2" 
        src="/article-icons/leftcornercoral2.png" 
        alt="Left Corner Coral 2"
        style={styles.leftCornerCoral2}
      />

      {[...Array(10)].map((_, i) => (
        <img 
          key={i}
          className="bubble-image" 
          src="/article-icons/bubble.png" 
          alt="Bubble"
          style={styles.bubbleImage}
        />
      ))}

      <img 
        className="fishs-image" 
        src="/article-icons/fishs.png" 
        alt="Fish School"
        style={styles.fishsImage}
      />
      <img 
        className="orangejelly-image" 
        src="/article-icons/orangejelly.png" 
        alt="Orange Jellyfish"
        style={styles.orangejellyImage}
      />
      <img 
        className="bluejelly-image" 
        src="/article-icons/bluejelly.png" 
        alt="Blue Jellyfish"
        style={styles.bluejellyImage}
      />
    </div>
  );
};

export default BgImages1;
