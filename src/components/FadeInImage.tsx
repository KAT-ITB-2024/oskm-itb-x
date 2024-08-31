"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FadeInImageProps {
  className: string;
  src: string;
  alt: string;
  direction?: "left" | "right";
}

const FadeInImage = ({ className, src, alt, direction }: FadeInImageProps) => {
  const initial = direction === "left" ? { x: -20 } : { x: 20 };

  return (
    <motion.div
      className={className}
      initial={{ x: initial.x, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="h-full w-full object-contain"
        draggable={false}
      />
    </motion.div>
  );
};

export default FadeInImage;
