import styles from "../styles.module.css";
import Image from "next/image";

interface SponsorCardProps {
  src: string;
  alt: string;
  size: "xlarge" | "large" | "medium" | "small";
  onOpen?: () => void;
}

const sizeClasses = {
  xlarge: "w-[14rem] md:w-[17rem] xl:w-[25rem] aspect-[2/1]",
  large: "w-[12rem]  md:w-[15rem] xl:w-[20rem] aspect-[2/1]",
  medium: "w-[8rem]  md:w-[12rem] xl:w-[15rem] aspect-[4/3]",
  small: "w-[6rem]  md:w-[10rem] xl:w-[10rem] aspect-[1/1]",
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
          style={{
            objectFit: "contain",
            WebkitFilter: "drop-shadow(0px 0px 3px #FFFFFF)",
            filter: "drop-shadow(0px 0px 3px #FFFFFF)",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default SponsorCard;
