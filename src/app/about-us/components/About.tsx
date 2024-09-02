"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    const mountain = document.getElementById("mountain");
    const initialTop = mountain?.offsetTop;
    console.log(initialTop);
    const handleScroll = () => {
      const value = window.scrollY;
      if (mountain && initialTop) {
        mountain.style.top = value * 0.5 + initialTop + "px";
        // console.log(mountain.style.bottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#3d72e4]">
      <div className="absolute bottom-0 h-20 md:h-40 bg-[#3d72e4] inset-x-0 z-10"></div>
      <div className="relative z-10 aspect-[786/1056] w-full lg:hidden">
        <Image
          src="/about-us/ombak-bg-mobile.png"
          alt="ombak"
          fill
          className="w-full h-full"
          draggable={false}
        />
      </div>
      <div className="relative z-10 hidden aspect-[4536/3414] w-full lg:block">
        <Image
          src="/about-us/ombak-bg-large.png"
          alt="ombak"
          fill
          className="h-full w-full"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <motion.div
        id="mountain"
        className="absolute left-1/2 top-[15%] lg:top-[25%] z-0 w-full -translate-x-1/2 px-5 lg:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center font-mogula text-3xl text-white [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
          About Us
        </h1>
        <p className="mx-auto mt-6 w-full lg:w-[60%] text-center font-rem text-xs text-white sm:text-sm md:text-base lg:mt-32 lg:text-lg xl:text-xl">
          KAT ITB 2024 mengambil konsep Global Citizen sebagai pondasi
          keberjalannya. Diturunkan dari SDG nomor 4, Quality Education, KAT ITB
          2024 membawakan prinsip Think Globally Act Locally untuk membangun
          karakter, merubah paradigma, dan menggaungkan keberdampakan mahasiswa
          dalam ranah lokal dengan pemikiran global. Melalui KAT ITB 2024
          sebagai bentala jelajah cakrawala, mahasiswa baru ITB 2024 akan
          mengarungi samudra dan menyelam dalam lautan pengetahuan yang luas
          untuk pengembangan diri serta inkubasi talenta bangsa sebagai
          calon-calon pemimpin
        </p>
      </motion.div>
    </div>
  );
}
