import Image from "next/image";
import { Button } from "~/components/ui/button";
import React from "react";
import MerchandiseSlider from "./components/MerchandiseSlider";
import MerchandiseList from "./components/MerchandiseList";

export default function Page() {
  const merchandises = [
    {
      name: "Kaos",
      price: "89k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Enamel",
      price: "16k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Sticker ITB",
      price: "15k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Kipas",
      price: "15k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Sticker Fakultas",
      price: "5k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Sticker Sheets",
      price: "10k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Baseball Cap",
      price: "50k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Notebook",
      price: "35k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Bookmark",
      price: "10k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Lanyard",
      price: "25k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Lighter",
      price: "25k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Keychain NIM",
      price: "15k/pcs",
      image: "/components/kaos-putih.svg",
    },
    {
      name: "Totebag",
      price: "49k/pcs",
      image: "/components/kaos-putih.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[url('/background/merchandise-background.svg')] bg-cover">
      <div className="relative mt-24 flex min-h-screen w-full flex-col justify-center ">
        <Image
          src="/components/naga.svg"
          className="absolute left-0 top-20"
          alt="Naga"
          width={300}
          height={400}
        />
        <Image
          src="/components/ubur.svg"
          className="absolute right-0 top-20"
          alt="Ubur"
          width={220}
          height={280}
        />
        <div className="relative flex w-full items-center justify-center">
          <Image
            src="/components/merchandise-ring.svg"
            className="absolute"
            alt="Ubur"
            width={800}
            height={700}
          />
          <h1 className="z-10 text-center text-8xl font-bold text-white">
            Collect Your <br />
            <span className="text-9xl">Merchandise</span>
          </h1>
        </div>
        <div className="my-16 flex items-center justify-center">
          <ul className="flex flex-row gap-10">
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_60px_rgb(255_255_255_/_100%)]">
                  Tokopedia
                </h1>
                <Button variant={"merchgreen"}>Ganesha Goods &gt;</Button>
              </a>
            </li>
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_60px_rgb(255_255_255_/_100%)]">
                  Pre-Order
                </h1>
                <Button variant={"merchyellow"}>Order Now &gt;</Button>
              </a>
            </li>
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_60px_rgb(255_255_255_/_100%)]">
                  Instagram
                </h1>
                <Button variant={"merchpink"}>@ganeshagoods &gt;</Button>
              </a>
            </li>
          </ul>
        </div>
        <MerchandiseSlider merchandises={merchandises} />
      </div>
      <MerchandiseList merchandises={merchandises} />
    </div>
  );
}
