"use client";

import React, { useEffect } from "react";
import EllipsLembaga from "./EllipsLembaga";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "~/lib/slugify";

interface CardProps {
  nama: string;
  logo_path?: string;
  type?: string;
}

function Card(props: CardProps) {
  const [className, setClassName] = React.useState<string>(
    "mb-8 mt-6 h-[40px] w-[90%] font-mogula text-[20px] text-center leading-[2.4rem] text-[#05A798]",
  );
  const { nama, logo_path, type } = props;
  const name_length = nama.length;

  useEffect(() => {
    const checkNameLength = () => {
      let text_size = "24px";
      if (name_length < 16) {
        text_size = "text-[26px] md:text-[28px] lg:text-[30px]";
      } else if (name_length < 22) {
        text_size = "text-[24px] md:text-[26px] lg:text-[28px]";
      } else if (name_length < 28) {
        text_size = "text-[20px] md:text-[23px] lg:text-[26px]";
      } else if (name_length < 40) {
        text_size = "text-[16px] md:text-[20px] lg:text-[21px]";
      } else {
        text_size = "text-[14px] md:text-[17px] lg:text-[20px]";
      }
      return text_size;
    };

    const handleResize = () => {
      setClassName(
        `mb-8 mt-6 h-[40px] w-[90%] font-mogula text-center leading-[2.4rem] text-[#05A798] ${checkNameLength()}`,
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize handling
    return () => window.removeEventListener("resize", handleResize);
  }, [name_length]);

  if (!type) {
    return (
      <Link
        href={`/itb-x/detail/${slugify(nama)}`}
        className="relative my-1 h-[370px] w-[270px] justify-self-center overflow-hidden rounded-[3.25rem] bg-[radial-gradient(109.4%_109.4%_at_50%_50%,_rgba(162,_248,_243,_0.75)_0%,_rgba(245,_245,_245,_0.75)_100%)] px-4 backdrop-blur-md lg:h-[420px] lg:min-w-[300px] lg:max-w-[300px]"
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <p id="nama_lembaga" className={className}>
            {nama}
          </p>
          <div className="mt-1 lg:mt-8">
            <EllipsLembaga imgSrc={logo_path ? logo_path : undefined} />
          </div>
          <Image
            src="/itb-x/ombak-right.png"
            alt="Ombak"
            width={500}
            height={368}
            className="absolute bottom-0 left-0 z-[1] -translate-x-[40px] translate-y-[82px] rotate-[165deg] scale-[1.8] object-fill lg:-translate-x-[40px] lg:translate-y-[110px] lg:scale-[1.4] lg:scale-x-[1.7]"
          />
        </div>
      </Link>
    );
  } else {
    // UKM Card
    return (
      <div className="relative my-1 h-[370px] w-[270px] justify-self-center overflow-hidden rounded-[3.25rem] bg-[radial-gradient(109.4%_109.4%_at_50%_50%,_rgba(162,_248,_243,_0.75)_0%,_rgba(245,_245,_245,_0.75)_100%)] px-4 backdrop-blur-md lg:h-[420px] lg:min-w-[300px] lg:max-w-[300px]">
        <div className="flex flex-col items-center gap-2 py-4">
          <p id="nama_lembaga" className={className}>
            {nama}
          </p>
          <div className="mt-1 lg:mt-8">
            <EllipsLembaga />
          </div>
          <Image
            src="/itb-x/ombak-right.png"
            alt="Ombak"
            width={500}
            height={368}
            className="absolute bottom-0 left-0 z-[1] -translate-x-[40px] translate-y-[82px] rotate-[165deg] scale-[1.8] object-fill lg:-translate-x-[40px] lg:translate-y-[110px] lg:scale-[1.4] lg:scale-x-[1.7]"
          />
        </div>
      </div>
    );
  }
}

export default Card;
