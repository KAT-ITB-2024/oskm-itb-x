"use client";

import { useState } from "react";
import SponsorCard from "./SponsorCard";
import SponsorVideoModal from "./SponsorVideoModal";
import { largeSponsor, mediumSponsor, smallSponsor, xlargeSponsor } from "../constants";

const videoMap = {
  paragon: "https://drive.google.com/file/d/19Pd87gCNGoUN_iGkglpa6jCts-WMLg1v/preview",
  emina: "https://drive.google.com/file/d/1Mi0xlJ_dpxpa636w9pUjUps4BA03pP1k/preview",
  kahf: "https://drive.google.com/file/d/1v-7SYWonKyQNly4_Pi8yMWVuxApUtkBa/preview",
  gojek: "https://drive.google.com/file/d/10n-MbKGaFrPpuyZTI7rOoppc9Q5VRE-U/preview",
  gery: "https://drive.google.com/file/d/1vJBZCMRNc5caStBJ4aCSi_Pp7fB-yrMj/preview",
  lm: "https://drive.google.com/file/d/1dnjPELx8a1nXlPOro5gJfF9J7QaVCHE3/preview",
  hidden: "",
};

type SponsorVideo = keyof typeof videoMap;

const SponsorList = () => {
  const [openedSponsor, setOpenedSponsor] = useState<SponsorVideo>("hidden");

  return (
    <>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {xlargeSponsor.map((sponsor, index) => (
            <SponsorCard
              key={index}
              src={sponsor.src}
              alt={sponsor.alt}
              onOpen={sponsor.hasVideo ? () => setOpenedSponsor(sponsor.alt as SponsorVideo) : undefined}
              size="xlarge"
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {largeSponsor.map((sponsor, index) => (
            <SponsorCard
              key={index}
              src={sponsor.src}
              alt={sponsor.alt}
              onOpen={sponsor.hasVideo ? () => setOpenedSponsor(sponsor.alt as SponsorVideo) : undefined}
              size="large"
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-3">
          {mediumSponsor.map((sponsor, index) => (
            <SponsorCard
              key={index}
              src={sponsor.src}
              alt={sponsor.alt}
              onOpen={sponsor.hasVideo ? () => setOpenedSponsor(sponsor.alt as SponsorVideo) : undefined}
              size="medium"
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-2">
          {smallSponsor.map((sponsor, index) => (
            <SponsorCard
              key={index}
              src={sponsor.src}
              alt={sponsor.alt}
              size="small"
            />
          ))}
        </div>
      </div>
      {openedSponsor !== "hidden" && (
        <SponsorVideoModal
          onClose={() => setOpenedSponsor("hidden")}
          src={videoMap[openedSponsor] ?? ""}
        />
      )}
    </>
  );
};

export default SponsorList;
