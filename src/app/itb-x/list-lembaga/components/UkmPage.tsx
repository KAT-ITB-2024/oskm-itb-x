import React from "react";
import UKMVideo from "./UKMVideo";
import UKMIconCard from "./UKMIconCard";

function UkmPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 px-7 pb-10 md:gap-y-4 lg:gap-y-6 lg:pb-20">
      <p className="text-center text-[24px] leading-[28px] text-[#0010A4] md:text-[36px]  md:leading-[52px] lg:text-[56px]">
        Rumpun Unit Kegiatan Mahasiswa (UKM)
      </p>
      <UKMVideo isExternalSource={true} videoSrc="" />
      <div
        id="Ukm_Selections"
        className="grid w-[85vw] grid-cols-3 justify-items-center gap-x-6"
      >
        <UKMIconCard category_name="Agama" />
        <UKMIconCard category_name="Pendidikan" />
        <UKMIconCard category_name="Kajian" />
        <UKMIconCard category_name="Media" />
        <UKMIconCard category_name="Olahraga & Kesehatan" />
        <UKMIconCard category_name="Seni Budaya" />
      </div>
    </div>
  );
}

export default UkmPage;
