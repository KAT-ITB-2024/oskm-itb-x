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
      flexDirection: "column" as "column", // Default vertikal
      position: "absolute" as "absolute",
      bottom: 0,
      left: "20%",  // Menggeser container ke kiri
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
      bottom: "-10%",  // Agak di bawah turtle
      width: "40%",
      zIndex: 2,
      alignSelf: "center", // Tepat di tengah
    },
    turtleImage: {
      position: "absolute" as "absolute",
      bottom: "5%",
      left: "30%",  // Menggeser turtle ke kiri
      width: "35%",
      zIndex: 4,
      animation: "swimVerticalSlow 8s infinite ease-in-out",
    },
    fishImage: {
      position: "relative" as "relative",
      bottom: "10%",
      left: "-40%",  // Menggeser fish lebih ke kiri
      width: "40%",
      zIndex: 4,
      animation: "swimVerticalSlow 8s infinite ease-in-out",
    },
    bluejellyImage: {
      position: "absolute" as "absolute",
      bottom: "5%",
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
    rightCornerCoral: {
      position: "absolute" as "absolute",
      bottom: 0,
      right: 0,
      width: "20%",
      zIndex: 1,
      display: "none", // Disembunyikan pada mobile
    },
    rightCornerCoral2: {
      position: "absolute" as "absolute",
      bottom: 0,
      right: "2%",
      width: "15%",
      zIndex: 1,
      display: "none", // Disembunyikan pada mobile
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

      @media (min-width: 768px) {
        .seaweed-image {
          width: 35%;
        }
        .turtle-image {
          bottom: 15%;
          width: 35%;
        }
        .fish-image {
          bottom: 20%;
          width: 20%;
        }
        .bluejelly-image {
          width: 25%;
        }
        .left-corner-coral,
        .left-corner-coral-2,
        .right-corner-coral,
        .right-corner-coral-2 {
          width: 25%;
          display: block; /* Menampilkan elemen RightCornerCoral hanya pada non-mobile */
        }
      }

      @media (max-width: 768px) {
        .seaweed-image {
          width: 30%;
        }
        .turtle-image {
          bottom: 12%;
          width: 30%;
        }
        .fish-image {
          bottom: 15%;
          width: 15%;
        }
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
        }
        .turtle-image {
          bottom: 10%;
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
