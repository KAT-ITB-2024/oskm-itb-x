import styles from "../styles.module.css";
import Image from "next/image";

interface SponsorCardProps {
  src: string;
  alt: string;
  size: "xlarge" | "large" | "medium" | "small";
  onOpen?: () => void;
}

const sizeClasses = {
  xlarge: "w-40 md:w-64 xl:w-[25rem] aspect-[2/1]",
  large: "w-36  md:w-60 xl:w-[20rem] aspect-[2/1]",
  medium: "w-28  md:w-40 xl:w-[15rem] aspect-[4/3]",
  small: "w-20  md:w-28 xl:w-[10rem] aspect-[1/1]",
};

const SponsorCard = ({ src, alt, size, onOpen }: SponsorCardProps) => {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center p-4 ${styles.glassmorphism} ${sizeClasses[size]} ${onOpen ? "cursor-pointer" : ""}`}
      onClick={onOpen}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default SponsorCard;
