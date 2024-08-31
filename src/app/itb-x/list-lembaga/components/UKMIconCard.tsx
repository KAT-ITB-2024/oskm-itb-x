import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UKMIconCard {
  category_name:
    | "Agama"
    | "Pendidikan"
    | "Kajian"
    | "Media"
    | "OlahragaKesehatan"
    | "Seni Budaya";
}

function UKMIconCard(props: UKMIconCard) {
  const { category_name } = props;

  function getIconSrc() {
    switch (category_name) {
      case "Agama":
        return "/itb-x/icon-ukm/icon_ukm_agama.png";
      case "Pendidikan":
        return "/itb-x/icon-ukm/icon_ukm_pendidikan.png";
      case "Kajian":
        return "/itb-x/icon-ukm/icon_ukm_kajian.png";
      case "Media":
        return "/itb-x/icon-ukm/icon_ukm_media.png";
      case "OlahragaKesehatan":
        return "/itb-x/icon-ukm/icon_ukm_olahraga-kesehatan.png";
      case "Seni Budaya":
        return "/itb-x/icon-ukm/icon_ukm_senibudaya.png";
    }
  }

  return (
    <div className="flex h-[245px] w-[142px] flex-col gap-y-2 lg:h-[460px] lg:w-[250px]">
      <Image
        src={getIconSrc()}
        alt={`${category_name} logo`}
        width={320}
        height={320}
        quality={60}
        className="h-[142px] w-[142px] lg:h-[250px] lg:w-[250px]"
      />
      <div className="relative flex w-full flex-col items-center justify-center gap-y-4 overflow-hidden rounded-[15px] bg-[#36aaf7] px-2 py-6 shadow-[0_0_10.39px_0px_#00000040_inset] lg:gap-x-8">
        <Image
          src={"/itb-x/icon-ukm/card-wave.jpg"}
          alt={"card wave background"}
          width={142}
          height={142}
          className="absolute w-full rotate-90 scale-[77%] opacity-[56%] lg:scale-[75%] "
        />
        <div className="z-[15] flex flex-col items-center justify-center gap-y-1 lg:gap-y-6">
          <p
            className={`text-center ${category_name === "OlahragaKesehatan" ? "text-[18px] lg:text-[24px]" : "text-[20px] lg:text-[36px]"} leading-[24px] text-[#0010A4] `}
          >
            {category_name === "OlahragaKesehatan"
              ? "Olahraga & Kesehatan"
              : category_name}
          </p>
          <Link
            href={`/itb-x/list-lembaga/ukm/${category_name}`}
            className="flex items-center justify-center rounded-[4px] bg-[#EE1192] px-3 py-2 font-rem transition-colors duration-300 hover:bg-[#cc0e7d]"
          >
            <p className="font-rem text-[10px] font-normal text-white md:text-[12px] lg:text-[16px]">
              Explore Now!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UKMIconCard;
