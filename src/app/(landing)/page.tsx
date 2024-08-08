import { Button } from "~/components/ui/button";
import Countdown from "./component/Countdown";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import InfiniteCarousel from "./component/InfiniteCarousel";

export default function LandingPage() {
  const logos = [
    { src: "/landing-page/gojek-logo.png" },
    { src: "/landing-page/wardah-logo.png" },
    { src: "/landing-page/tokped-logo.png" },
    { src: "/landing-page/pertamina-logo.png" },
  ];

  return (
    <div className="h-[4083px] bg-blue-400">
      <div className="flex flex-col items-center">
        <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
        <Image
          src="/landing-page/oskm-word.svg"
          className="-mt-6"
          alt="title"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Countdown targetDate="2024-08-08T23:59:59" />
        <div className="flex flex-row justify-center gap-x-4">
          <Button variant={"pink"}>
            <IoMdDownload className="mr-2 h-4 w-4" />
            Download Guidebook
          </Button>
          <Button variant={"pink"}>Explore Ocean Now!</Button>
        </div>
      </div>
      <div>
        <h1 className="text-center">Timeline ITB KAT 2024</h1>
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-x-20">
            <div className="flex flex-col items-center">
              <Image
                src="/landing-page/icon-dikpus.svg"
                alt="1"
                width={100}
                height={100}
              />
              <p>Diklat Terpusat</p>
              <p>6-7 & 13 Juli 2024</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/landing-page/icon-showcase.svg"
                alt="2"
                width={100}
                height={100}
              />
              <p>ITB Showcase</p>
              <p>20 Agustus 2024</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/landing-page/icon-oskm.svg"
              alt="3"
              width={100}
              height={100}
            />
            <p>OSKM</p>
            <p>6-9 Agustus 2024</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center">Our Sponsors</h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
      <div>
        <h1 className="text-center">Our Media Partners</h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
    </div>
  );
}
