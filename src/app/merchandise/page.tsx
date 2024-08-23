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
    <div className="relative flex flex-col items-center overflow-hidden bg-[url('/background/merchandise-background.svg')] bg-cover bg-no-repeat">
      <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-32 sm:py-40 ">
        <Image
          src="/components/naga.svg"
          alt="Naga Laut"
          height={0}
          width={0}
          style={{ width: "300px", height: "auto" }}
          className="absolute -left-32 top-64 rotate-12 sm:-left-28 sm:top-72 sm:rotate-45 sm:scale-[1.75]"
        />
        <Image
          src="/components/ubur.svg"
          alt="Ubur-ubur"
          height={0}
          width={0}
          style={{ width: "200px", height: "auto" }}
          className="absolute -right-24 top-80 sm:-right-20 sm:top-64 sm:scale-[1.75]"
        />
        <div className="relative my-20 flex w-full items-center justify-center">
          <Image
            src="/components/merchandise-ring.svg"
            alt="Merchandise Ring"
            height={0}
            width={0}
            style={{ width: "1000px", height: "auto" }}
            className="absolute"
          />
          <h1 className="w-full text-center text-4xl font-bold capitalize text-white [text-shadow:_0px_0px_60px_rgb(255_255_255_/_0%)] sm:text-6xl md:text-8xl">
            Collect Your
            <br />
            <span className="inline text-5xl sm:text-7xl md:text-9xl">
              Merchandise
            </span>
          </h1>
        </div>
        <div className="z-10 my-10 flex items-center justify-center sm:mb-0 sm:mt-8">
          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-10">
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_100%)]">
                  Tokopedia
                </h1>
                <Button variant={"merchgreen"}>Ganesha Goods &gt;</Button>
              </a>
            </li>
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_100%)]">
                  Pre-Order
                </h1>
                <Button variant={"merchyellow"}>Order Now &gt;</Button>
              </a>
            </li>
            <li>
              <a className="flex flex-col justify-center gap-2 text-center">
                <h1 className="text-3xl text-[#FEFDA3] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_100%)]">
                  Instagram
                </h1>
                <Button variant={"merchpink"}>@ganeshagoods &gt;</Button>
              </a>
            </li>
          </ul>
        </div>
        <MerchandiseSlider merchandises={merchandises} />
        <MerchandiseList merchandises={merchandises} />
      </div>
      <Image
        src="/components/corall.svg"
        className="absolute -left-10 bottom-10 translate-y-24 rotate-0 scale-100 sm:bottom-32 sm:left-24 sm:scale-[2]"
        alt="Corall"
        height={0}
        width={0}
        style={{ width: "200px", height: "auto" }}
      />
      <Image
        src="/components/corall.svg"
        className="absolute -right-10 bottom-10 translate-y-24 -scale-x-100 sm:bottom-32 sm:right-24 sm:-scale-x-[2] sm:scale-y-[2]"
        alt="Corall"
        height={0}
        width={0}
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}
