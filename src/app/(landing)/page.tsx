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
    <div className="h-[4200px] bg-blue-600">
      <div className="flex flex-col items-center">
        <Image
          src="/logo/logo-oskm.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12"
        />
        <Image
          src="/landing-page/oskm-word.svg"
          className="-mt-20 w-5/12 md:-mt-32 lg:w-3/12 xl:-mt-36 xl:w-2/12"
          alt="title"
          width={300}
          height={300}
        />
      </div>
      <div className="mb-32">
        <Countdown targetDate="2024-08-08T23:59:59" />
        <div className="flex flex-row justify-center gap-x-4 font-rem">
          <Button variant={"pink"} className="p-4 md:text-xl">
            <IoMdDownload className="mr-2 h-4 w-4" />
            Download Guidebook
          </Button>
          <Button variant={"pink"} className="p-4 md:text-xl">
            Explore Ocean Now!
          </Button>
        </div>
      </div>
      <div className="mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Timeline ITB KAT 2024
        </h1>
        <div className="flex flex-col items-center font-mogula text-[#C5FFF3] text-shadow-blue">
          <div className="flex justify-center gap-x-20 lg:gap-x-64 xl:gap-x-72">
            <div className="flex flex-col items-center md:w-4/12 lg:w-3/12">
              <Image
                src="/landing-page/icon-dikpus.svg"
                alt="1"
                width={500}
                height={500}
              />
              <p className="text-lg font-bold md:text-xl lg:text-2xl">
                Diklat Terpusat
              </p>
              <p className="font-rem text-sm lg:text-lg">6-7 & 13 Juli 2024</p>
            </div>
            <div className="flex flex-col items-center md:w-4/12 lg:w-3/12">
              <Image
                src="/landing-page/icon-showcase.svg"
                alt="2"
                width={500}
                height={500}
              />
              <p className="text-lg font-bold md:text-xl lg:text-2xl">
                ITB Showcase
              </p>
              <p className="font-rem text-sm lg:text-lg">20 Agustus 2024</p>
            </div>
          </div>
          <div className="flex w-4/12 flex-col items-center lg:w-3/12 xl:w-2/12">
            <Image
              src="/landing-page/icon-oskm.svg"
              alt="3"
              width={500}
              height={500}
            />
            <p className="text-lg font-bold md:text-xl lg:text-2xl">OSKM</p>
            <p className="font-rem text-sm lg:text-lg">6-9 Agustus 2024</p>
          </div>
        </div>
      </div>
      <div className="mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Sponsors
        </h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
      <div className="mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Media Partners
        </h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Tenants
        </h1>
        <div className="relative flex w-9/12 flex-col items-center justify-center rounded-lg border-[0.1px] bg-gradient-to-r from-blue-300 to-blue-500 p-6 shadow-[0px_4px_10px_rgba(255,255,255,0.5)] md:w-6/12 lg:py-10 xl:w-4/12">
          <h1 className="text-center font-mogula text-2xl text-[#0010A4] md:text-3xl lg:text-4xl xl:text-5xl">
            Calling Out All Tenants
          </h1>
          <div className="my-4 font-rem text-white lg:my-8 xl:text-lg">
            <p className="text-center">
              For further information please contact:
            </p>
            <p className="text-center">+62-812-9237-2312</p>
          </div>
          <Button variant="pink" className="px-6 font-rem xl:text-lg">
            Register Now!
          </Button>
          <Image
            src="/landing-page/coral_left.svg"
            alt="tenant"
            width={500}
            height={500}
            className="absolute bottom-[-32px] left-[-50px] w-4/12 md:w-3/12"
          />
          <Image
            src="/landing-page/coral_right.svg"
            alt="tenant"
            width={500}
            height={500}
            className="absolute bottom-[-20px] right-[-50px] w-4/12 md:w-3/12"
          />
        </div>
      </div>
    </div>
  );
}
