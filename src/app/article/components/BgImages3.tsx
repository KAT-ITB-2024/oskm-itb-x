"use client";

import React, { useEffect } from "react";

const BgImages1: React.FC = () => {
  useEffect(() => {
    // Scroll event listener for bubbles
    const handleScroll = () => {
      const bubbles = document.querySelectorAll('.bubble-image');
      bubbles.forEach((bubble: any) => {
        const rect = bubble.getBoundingClientRect();
        bubble.style.transform = `translateY(${window.scrollY * -0.5}px) translateX(${Math.sin(window.scrollY * 0.1) * 10}px)`;
        if (rect.bottom < 0) {
          bubble.style.display = 'none'; // Hide bubbles when they move out of bounds
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inline styles for keyframes and animations
  const styles = {
    container: {
      position: "absolute" as "absolute", // Make the container absolute
      top: 0,
      left: -80,
      width: "135%",
      height: "100%", // Expand to cover entire SwiperSlide area
      overflow: "hidden",
      zIndex: 1,
      pointerEvents: "none", // Prevent interaction with the background elements
    },
    seaweedImage: {
      width: "30%", // Seaweed size set to 30% of the width of the container
      position: "absolute" as "absolute",
      bottom: "10%", // Position seaweed at the center-bottom of the container
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    bubbleImage: {
      width: "40px",
      maxWidth: "80px",
      position: "absolute" as "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      animation: "floatBubble 8s linear infinite, bubbleHorizontal 3s ease-in-out infinite",
    },
    turtleImage: {
      position: "absolute" as "absolute",
      top: "30%",
      left: "45%",
      transform: "translateX(-50%)",
      width: "15%",
      zIndex: 1,
      animation: "swimHorizontal 5s infinite ease-in-out",
    },
    fishImage: {
      position: "absolute" as "absolute",
      top: "30%", // Match the position of the turtle
      left: "25%", // Place fish to the left of the turtle
      transform: "translateX(-50%)",
      width: "15%",
      zIndex: 1,
      animation: "swimHorizontal 5s infinite ease-in-out", // Same animation as the turtle
    },
    fishsImage: {
      position: "absolute" as "absolute",
      top: "10%",
      left: "10%",
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
    `,
  };

  return (
    <div style={styles.container}>
      <style>{styles.keyframes}</style>

      {/* Turtle and Fish with Horizontal Animation */}
      <img 
        className="horizontal-animated-object turtle-image" 
        src="/article-icons/turtle.png" 
        alt="Turtle"
        style={styles.turtleImage}
      />
      <img 
        className="horizontal-animated-object fish-image" 
        src="/article-icons/fish.png" 
        alt="Fish"
        style={styles.fishImage}
      />

      {/* Seaweed in the Center-Bottom */}
      <img 
        className="seaweed-image" 
        src="/article-icons/seaweed.png" 
        alt="Seaweed"
        style={styles.seaweedImage}
      />

      {/* Dynamic Bubbles */}
      {[...Array(10)].map((_, i) => (
        <img 
          key={i}
          className="bubble-image" 
          src="/article-icons/bubble.png" 
          alt="Bubble"
          style={styles.bubbleImage}
        />
      ))}

      {/* Fishs and Orange Jellyfish with Vertical Animation */}
      <img 
        className="vertical-animated-object fishs-image" 
        src="/article-icons/fishs.png" 
        alt="Fish School"
        style={styles.fishsImage}
      />
      <img 
        className="vertical-animated-object orangejelly-image" 
        src="/article-icons/orangejelly.png" 
        alt="Orange Jellyfish"
        style={styles.orangejellyImage}
      />
    </div>
  );
};

export default BgImages1;
