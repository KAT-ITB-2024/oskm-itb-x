"use client";

import React, { useEffect } from "react";

const BgImages2: React.FC = () => {
  useEffect(() => {

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
      pointerEvents: "none",
    },
    fishsImage: {
      position: "absolute" as "absolute",
      top: "10%",
      left: "0%",
      width: "20%",
      zIndex: 0,
      animation: "swimVertical 4s infinite ease-in-out",
    },
    orangejellyImage: {
      position: "absolute" as "absolute",
      top: "50%",
      right: "10%",
      width: "20%",
      zIndex: 0,
      animation: "swimVertical 4s infinite ease-in-out",
    },
    bluejellyImage: {
      position: "absolute" as "absolute",
      top: "70%",
      right: "25%",
      width: "15%",
      zIndex: 0,
      animation: "swimVerticalSlow 8s infinite ease-in-out",
    },
    BubbleonOrangeTentacle: {
      position: "absolute" as "absolute",
      top: "calc(50% - 120px)", // Posisi di atas orangejelly
      right: "calc(10% + 120px)", // Slight offset from orangejelly
      width: "25%",
      zIndex: 0,
      animation: "swimVertical 4s infinite ease-in-out",
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
        .bluejelly-image,
        .BubbleonOrangeTentacle {
          width: 15%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 15%;
        }
      }

      @media (max-width: 480px) {
        .bubble-image {
          width: 15px;
          max-width: 30px;
        }
        .fishs-image {
          width: 12%;
        }
        .orangejelly-image,
        .bluejelly-image,
        .BubbleonOrangeTentacle {
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
        src="/article-icons/pinkjelly.png" 
        alt="Blue Jellyfish"
        style={styles.bluejellyImage}
      />

      {/* Bubble on Orange Jellyfish */}
      <img 
        className="BubbleonOrangeTentacle" 
        src="/article-icons/bubble.png" 
        alt="Bubble on Orange Tentacle"
        style={styles.BubbleonOrangeTentacle}
      />
    </div>
  );
};

export default BgImages2;
