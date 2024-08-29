import React from "react";
import Image from "next/image";

interface UKMVideoProps {
  isExternalSource: boolean;
  videoSrc?: string;
}

function UKMVideo(props: UKMVideoProps) {
  const { isExternalSource, videoSrc } = props;
  if (!isExternalSource) {
    return (
      <video width={"100%"} height={200} controls className="rounded-[14px]">
        <source src={videoSrc} type="video/mp4" />
        Browser Anda tidak mendukung video tag.
      </video>
    );
  }

  return (
    <div className="bg-[radial-gradient(159.68%_159.68%_at_50%_50%, rgba(162,_248,_243,_0.75)_0%, rgba(245,_245,_245,_0.75)_100%)] relative my-4 w-[80vw] grow overflow-hidden rounded-[14px] border-0 border-none md:w-[65vw] lg:w-[75vw]">
      {videoSrc ? (
        <iframe
          width={"100%"}
          height={200}
          src={videoSrc}
          allowFullScreen
          className="z-[5] h-[200px] rounded-[14px] border-0 border-none md:h-[280px] lg:h-[600px]"
        />
      ) : (
        <div className="z-[5] h-[200px] overflow-hidden rounded-[14px] border-0 border-none bg-[#95e8e9] md:h-[280px] lg:h-[600px]"></div>
      )}
      <Image
        src={"/itb-x/icon-ukm/ukm_video_wave_ul.png"}
        alt="Wave background"
        width={160}
        height={120}
        className="absolute -left-12 -top-11 z-[10] rotate-[180deg] -scale-y-110 scale-x-[120%] lg:-left-5 lg:-top-6 lg:-scale-y-[2.4] lg:scale-x-[2.4]"
      />
      <Image
        src={"/itb-x/icon-ukm/ukm_video_wave_br.png"}
        alt="Wave background"
        width={160}
        height={160}
        className="absolute -bottom-11 -right-12 z-[10] rotate-[15deg] scale-125 md:scale-[140%] lg:-bottom-3 lg:-right-0 lg:scale-[2.4]"
      />
    </div>
  );
}

export default UKMVideo;
