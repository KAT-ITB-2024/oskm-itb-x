import Image from "next/image";

const SponsorVideoModal = ({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[250]">
      <div className="w-full h-full bg-black/70" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 aspect-video w-[80%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#A2F8F3]">
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <iframe
            src={src}
            allow="autoplay"
            className="h-full w-full"
          ></iframe>
        </div>
        <Image
          src={"/landing-page/coral_left.webp"}
          width={1000}
          height={1000}
          alt="coral"
          className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-[20%] md:w-[12rem]"
        />
        <Image
          src={"/landing-page/coral_right.webp"}
          width={500}
          height={500}
          alt="coral"
          className="absolute bottom-0 right-0 translate-x-1/3 translate-y-[10%] md:w-[12rem]"
        />
      </div>
    </div>
  );
};

export default SponsorVideoModal;
