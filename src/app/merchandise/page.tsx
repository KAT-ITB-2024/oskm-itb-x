import Image from "next/image";
import { Button } from "~/components/ui/button";
import React from "react";
import MerchandiseSlider from "./components/MerchandiseSlider";
import MerchandiseList from "./components/MerchandiseList";

export const metadata = {
  title: "Merhcandise",
  description: "Merchantdise OSKM ITB 2024",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default function Page() {
  const merchandises = [
    {
      name: "Kaos",
      price: "89k/pcs",
      image: "/components/kaos.webp",
    },
    {
      name: "Enamel",
      price: "16k/pcs",
      image: "/components/enamel.webp",
    },
    {
      name: "Sticker ITB",
      price: "15k/pcs",
      image: "/components/sticker.webp",
    },
    {
      name: "Kipas",
      price: "15k/pcs",
      image: "/components/kipas.webp",
    },
    {
      name: "Sticker Fakultas",
      price: "5k/pcs",
      image: "/components/sticker-fakultas.webp",
    },
    {
      name: "Sticker Sheets",
      price: "10k/pcs",
      image: "/components/sticker-sheets.webp",
    },
    {
      name: "Baseball Cap",
      price: "50k/pcs",
      image: "/components/baseball-cap.webp",
    },
    {
      name: "Notebook",
      price: "35k/pcs",
      image: "/components/notebook.webp",
    },
    {
      name: "Bookmark",
      price: "10k/pcs",
      image: "/components/bookmark.webp",
    },
    {
      name: "Lanyard",
      price: "25k/pcs",
      image: "/components/lanyard.webp",
    },
    {
      name: "Lighter",
      price: "25k/pcs",
      image: "/components/lighter.webp",
    },
    {
      name: "Keychain NIM",
      price: "15k/pcs",
      image: "/components/keychain-nim.webp",
    },
    {
      name: "Keychain Karakter",
      price: "15k/pcs",
      image: "/components/keychain-karakter.webp",
    },
    {
      name: "Totebag",
      price: "49k/pcs",
      image: "/components/totebag.webp",
    },
    {
      name: "Keychain ITB",
      price: "15k/pcs",
      image: "/components/keychain-itb.webp",
    },
  ];

  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[url('/background/merchandise-background.svg')] bg-cover bg-no-repeat">
      <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-32 sm:py-40 ">
        <Image
          src="/components/naga.webp"
          alt="Naga Laut"
          height={500}
          width={500}
          style={{ width: "300px", height: "auto" }}
          className="absolute -left-32 top-64 rotate-12 sm:-left-28 sm:top-72 sm:rotate-0 sm:scale-[1.75]"
          draggable={false}
        />
        <Image
          src="/components/ubur.webp"
          alt="Ubur-ubur"
          height={500}
          width={500}
          style={{ width: "200px", height: "auto" }}
          className="absolute -right-24 top-80 sm:-right-20 sm:top-64 sm:scale-[1.75]"
          draggable={false}
        />
        <div className="relative my-20 flex w-full items-center justify-center">
          <Image
            src="/components/merchandise-ring.svg"
            alt="Merchandise Ring"
            height={0}
            width={0}
            style={{ width: "1000px", height: "auto" }}
            className="absolute"
            draggable={false}
          />
          <h1 className="w-full text-center font-mogula text-4xl font-bold capitalize text-white [text-shadow:_0px_0px_60px_rgb(255_255_255_/_0%)] sm:text-6xl md:text-8xl">
            Collect Your
            <br />
            <span className="inline font-mogula text-5xl sm:text-7xl md:text-9xl">
              Merchandise
            </span>
          </h1>
        </div>
        <div className="z-10 my-10 flex items-center justify-center sm:mb-0 sm:mt-8">
          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-10">
            <li>
              <a
                className="flex flex-col justify-center gap-2 text-center"
                href="bit.ly/POMerchOSKM24"
                target="_blank"
              >
                <h1 className="font-mogula text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_100%)]">
                  Pre-Order
                </h1>
                <Button variant={"merchyellow"} className="font-remd">
                  Order Now &gt;
                </Button>
              </a>
            </li>
            <li>
              <a
                className="flex flex-col justify-center gap-2 text-center"
                href="https://www.instagram.com/ganeshagoods/?hl=en"
                target="_blank"
              >
                <h1 className="font-mogula text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_100%)]">
                  Instagram
                </h1>
                <Button variant={"merchpink"} className="font-remd">
                  @ganeshagoods &gt;
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <MerchandiseSlider merchandises={merchandises} />
        <MerchandiseList merchandises={merchandises} />
      </div>
      <Image
        src="/components/corall.webp"
        className="absolute -left-2 bottom-10 translate-y-24 rotate-0 scale-100 sm:bottom-32 sm:scale-[2]"
        alt="Corall"
        height={500}
        width={500}
        style={{ width: "200px", height: "auto" }}
        draggable={false}
      />
      <Image
        src="/components/corall.webp"
        className="absolute -right-2 bottom-10 translate-y-24 -scale-x-100 sm:bottom-32 sm:-scale-x-[2] sm:scale-y-[2]"
        alt="Corall"
        height={500}
        width={500}
        style={{ width: "200px", height: "auto" }}
        draggable={false}
      />
    </div>
  );
}
