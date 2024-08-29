"use client";

import React from "react";

const BgImages1: React.FC = () => {
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
    oceanContainer: {
      position: "absolute" as "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "690px",
      zIndex: 0,
      overflow: "hidden",
    },
    waveImage: {
      position: "absolute" as "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "40%",
      zIndex: 0,
    },
    responsiveContainer: {
      display: "flex",
      flexDirection: "column" as "column",
      position: "absolute" as "absolute",
      bottom: 0,
      left: "20%",
      width: "60%",
      height: "auto",
      zIndex: 4,
      alignItems: "center",

      '@media(min-width: 768px)': {
        flexDirection: "column" as "column",
      },

      '@media(max-width: 767px)': {
        flexDirection: "row" as "row",
      },
    },
    seaweedImage: {
      position: "absolute" as "absolute",
      bottom: "-10%",
      width: "40%",
      zIndex: 2,
      alignSelf: "center",
    },
    turtleImage: {
      position: "relative" as "relative",
      transform: "translateY(15%)",
      left: "30%",
      width: "35%",
      zIndex: 4,
      animation: "swimVerticalSlow 6s infinite ease-in-out, swimHorizontal 10s infinite linear",
    },
    fishImage: {
      position: "relative" as "relative",
      bottom: "10%",
      left: "-40%",
      width: "25%",
      zIndex: 4,
      animation: "swimVerticalFast 4s infinite ease-in-out, swimHorizontal 8s infinite linear reverse",
    },
    bluejellyImage: {
      position: "absolute" as "absolute",
      bottom: "5%",
      right: "35%",
      width: "10%",
      zIndex: 1,
      animation: "swimVerticalSlow 8s infinite ease-in-out, swimDiagonal 12s infinite linear",
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
    rightCornerCoral: {
      position: "absolute" as "absolute",
      bottom: 0,
      right: "10%",
      width: "18%",
      zIndex: 1,
      display: "block",
    },
    rightCornerCoral2: {
      position: "absolute" as "absolute",
      bottom: 0,
      right: "20%",
      width: "15%",
      zIndex: 1,
      display: "block",
    },
    keyframes: `
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

      @keyframes swimVerticalFast {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-30px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes swimHorizontal {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(30px);
        }
        100% {
          transform: translateX(0);
        }
      }

      @keyframes swimDiagonal {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(-20px, -20px);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      @media (min-width: 768px) {
        .seaweed-image {
          width: 35%;
        }
        .turtle-image {
          transform: translateY(-8%);
          width: 35%;
        }
        .fish-image {
          bottom: 20%;
          width: 18%;
        }
        .bluejelly-image {
          width: 25%;
        }
        .left-corner-coral,
        .left-corner-coral-2,
        .right-corner-coral,
        .right-corner-coral-2 {
          width: 25%;
          display: block;
        }
      }

      @media (max-width: 768px) {
        .seaweed-image {
          width: 30%;
        }
        .turtle-image {
          transform: translateY(-6%);
          width: 30%;
        }
        .fish-image {
          bottom: 15%;
          width: 14%;
        }
        .bluejelly-image {
          width: 15%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 15%;
        }
        .right-corner-coral {
          right: 4%;
          width: 17%;
        }
        .right-corner-coral-2 {
          right: -3%;
          width: 14%;
        }
      }

      @media (max-width: 480px) {
        .seaweed-image {
          width: 25%;
        }
        .turtle-image {
          transform: translateY(-5%);
          width: 25%;
        }
        .fish-image {
          bottom: 12%;
          width: 12%;
        }
        .bluejelly-image {
          width: 12%;
        }
        .left-corner-coral,
        .left-corner-coral-2 {
          width: 12%;
        }
        .right-corner-coral {
          right: 3%;
          width: 15%;
        }
        .right-corner-coral-2 {
          right: -5%;
          width: 12%;
        }
      }
    `,
  };

  return (
    <div style={styles.container}>
      <style>{styles.keyframes}</style>

      {/* Ocean container with wave and marine life */}
      <div style={styles.oceanContainer}>
        <img
          src="/article-icons/pagetsx-article-wave.png"
          alt="Wave Image"
          style={styles.waveImage}
        />

        {/* Responsive container for seaweed, turtle, and fish */}
        <div style={styles.responsiveContainer}>
          <img
            className="turtle-image"
            src="/article-icons/turtle.png"
            alt="Turtle"
            style={styles.turtleImage}
          />
          <img
            className="seaweed-image"
            src="/article-icons/seaweed.png"
            alt="Seaweed"
            style={styles.seaweedImage}
          />
          <img
            className="fish-image"
            src="/article-icons/fish.png"
            alt="Fish"
            style={styles.fishImage}
          />
        </div>
      </div>

      <img
        className="left-corner-coral"
        src="/article-icons/leftcornercoral.png"
        alt="Left Corner Coral"
        style={styles.leftCornerCoral}
      />
      <img
        className="left-corner-coral-2"
        src="/article-icons/anema.png"
        alt="Left Corner Coral 2"
        style={styles.leftCornerCoral2}
      />

      <img
        className="right-corner-coral"
        src="/article-icons/rightcornercoral.png"
        alt="Right Corner Coral"
        style={styles.rightCornerCoral}
      />
      <img
        className="right-corner-coral-2"
        src="/article-icons/anema.png"
        alt="Right Corner Coral 2"
        style={styles.rightCornerCoral2}
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
