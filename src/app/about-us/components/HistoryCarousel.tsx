"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

interface Era {
  title: string;
  preview?: string;
  text: string;
}

const history: Era[] = [
  {
    title: "Sebelum 2000-an",
    preview:
      "Pada era ini, OSKM ITB merupakan ajang kaderisasi terpusat yang kental dengan agenda-agenda pergerakan.",
    text: "Pada era ini, OSKM ITB merupakan ajang kaderisasi terpusat yang kental dengan agenda-agenda pergerakan sesuai dengan kondisi ekonomi sosial politik pada zaman itu.",
  },
  {
    title: "Tahun 2000",
    preview:
      "Muncul permasalahan terkait legalitas OSKM karena adanya pandangan bahwa kaderisasi di OSKM ITB mengandung unsur kekerasan.",
    text: "Muncul permasalahan terkait legalitas OSKM karena adanya pandangan bahwa kaderisasi di OSKM ITB mengandung unsur kekerasan. Sehingga, penyelenggaraan OSKM ITB ilegal dan kehadiran peserta sangat minim.",
  },
  {
    title: "Tahun 2002",
    preview:
      "Pada tahun ini, OSKM ITB pun akhirnya dilegalkan dengan beberapa perubahan.",
    text: "Pada tahun ini, OSKM ITB pun akhirnya dilegalkan dengan beberapa perubahan seperti peniadaan acara swasta dan pendekatan kekerasan yang diganti dengan pendekatan disiplin.",
  },
  {
    title: "Tahun 2005",
    text: "OSKM kembali di bawah bayang-bayang permasalahan legalitas.",
  },
  {
    title: "Tahun 2006",
    preview:
      "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Pengenalan Satuan Akademik dan Kemahasiswaan (PSAK) ITB.",
    text: "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Pengenalan Satuan Akademik dan Kemahasiswaan (PSAK) ITB.\n\nOSKM dilakukan secara ilegal dan hanya diikuti 136 mahasiswa. Ancaman DO pun menghantui Ketua Kabinet pada saat itu, Ketua OSKM, dan peserta yang mengikutinya.",
  },
  {
    title: "Tahun 2007",
    preview:
      "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Penerimaan Mahasiswa Baru (PMB) ITB.",
    text: "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Penerimaan Mahasiswa Baru (PMB) ITB.\n\nOSKM dilegalkan kembali dengan perubahan konsep dan metode karena pertimbangan agar angkatan 2007 dapat berinteraksi dengan seniornya.",
  },
  {
    title: "Tahun 2009",
    text: "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Pengenalan Ruang dan Orientasi KM (PROKM) ITB.",
  },
  {
    title: "Tahun 2010",
    text: "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Inisiasi Keluarga Mahasiswa (INKM) ITB.",
  },
  {
    title: "Tahun 2014",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "Simfoni Pergerakan Untuk Indonesia".',
  },
  {
    title: "Tahun 2015",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "OSKM ITB 2015 sebagai penyadaran akan identitas insan akademis masa depan bangsa".',
  },
  {
    title: "Tahun 2016",
    preview:
      "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Inisiasi Terpusat Keluarga Mahasiswa (INTEGRASI) ITB.",
    text: 'Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Inisiasi Terpusat Keluarga Mahasiswa (INTEGRASI) ITB dengan membawakan visi "KAT ITB 2016 yang melahirkan perintis gerakan berdasarkan empati".',
  },
  {
    title: "Tahun 2017",
    preview:
      "Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Orientasi Studi Keluarga Mahasiswa (OSKM) ITB.",
    text: 'Pada tahun ini, acara penerimaan mahasiswa baru pada KM ITB diselenggarakan dengan nama Orientasi Studi Keluarga Mahasiswa (OSKM) ITB dengan membawakan visi "Mewujudkan mozaik pergerakan untuk Indonesia".',
  },
  {
    title: "Tahun 2018",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "Sebagai sarana inisiasi pembentuk mahasiswa nirmala pemrakarsa pembangunan bangsa".',
  },
  {
    title: "Tahun 2019",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "OSKM ITB 2019 sebagai sarana inisiasi semangat bermimpi untuk Indonesia".',
  },
  {
    title: "Tahun 2020",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "Terciptanya mahasiswa dengan keunikannya masing-masing senantiasa mendefinisikan perannya dan bertanggung jawab terhadap peran tersebut".',
  },
  {
    title: "Tahun 2021",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "KAT ITB sebagai ruang inspirasi bernavigasi budaya dalam mewujudkan kesadaran berkontribusi untuk Indonesia".',
  },
  {
    title: "Tahun 2022",
    text: 'Pada tahun ini, OSKM ITB diselenggarakan dengan dengan membawakan visi "Sarana Inisiasi Perubahan Progresif sebagai langkah awal membangun bangsa".',
  },
];

const BubbleHistory = ({
  title,
  preview,
  text,
  isActive,
  onReadMoreClick,
}: {
  title: string;
  preview?: string;
  text: string;
  isActive: boolean;
  onReadMoreClick: () => void;
}) => {
  return (
    <div
      className={`relative mx-auto size-48 text-center text-white duration-500 md:size-56 lg:size-72 xl:size-80 2xl:size-96 ${
        isActive ? "scale-125" : ""
      }`}
    >
      <Image
        src="/about-us/bubble-history.png"
        alt="bubble"
        width={826}
        height={826}
        className="absolute z-0"
      />
      <div className="absolute left-1/2 top-1/2 z-10 w-32 -translate-x-1/2 -translate-y-1/2 md:w-36 lg:w-44">
        <h1 className="text-xs [text-shadow:4px_4px_20px_#FF8CD9BF] md:text-base lg:text-xl">
          {title}
        </h1>
        <p className="mt-2 text-[8px] lg:mt-3 lg:text-xs">{preview ?? text}</p>
        <Button
          variant={"pink"}
          className="mt-2 h-5 rounded-sm px-1 text-[6px] font-normal lg:mt-3 lg:h-7 lg:text-[8px]"
          onClick={onReadMoreClick}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

const CardHistory = ({
  title,
  text,
  onBackClick,
}: {
  title: string;
  text: string;
  onBackClick: () => void;
}) => {
  return (
    <div className="relative flex min-h-full flex-col justify-between p-4">
      <div className="absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-[#FFFEFE33] to-[#FFFEFE99] py-2 opacity-50 shadow-[0px_0px_3.84px_0px_#FFFFFF]"></div>
      <div className="relative z-10 px-2 text-white">
        <h1 className="text-center text-lg [text-shadow:4px_4px_20px_#FF8CD9BF] md:text-xl lg:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-justify text-xs sm:text-sm md:text-base lg:text-lg">
          {text}
        </p>
        <div className="flex justify-center">
          <Button
            variant={"pink"}
            className="mt-4 h-8 rounded-sm text-xs font-normal sm:text-sm md:text-base"
            onClick={onBackClick}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function HistoryCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedEraIndex, setSelectedEraIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleReadMoreClick = (index: number) => {
    setSelectedEraIndex(index);
  };

  const handleBackClick = () => {
    setSelectedEraIndex(null);
  };

  return (
    <div className="relative">
      <Image
        src="/about-us/ikan-pindang.png"
        alt="ikan pindang"
        width={185}
        height={250}
        className="absolute top-28 w-20 md:w-24 lg:w-32"
      />
      <Image
        src="/about-us/ikan-pindang-2.png"
        alt="ikan pindang"
        width={131}
        height={195}
        className="absolute bottom-0 right-0 w-20 md:w-24 lg:w-32"
      />
      <Image
        src="/about-us/coral.png"
        alt="coral"
        width={1512}
        height={676}
        className="absolute -bottom-10"
      />
      <div className="mt-32 px-5">
        <h1 className="text-center text-3xl text-white [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
          Sejarah OSKM
        </h1>
      </div>
      <div className="mb-28 mt-10 flex items-center justify-center lg:mt-14">
        {selectedEraIndex === null ? (
          <Swiper
            key={selectedEraIndex === null ? "bubble" : "detail"}
            spaceBetween={40}
            slidesPerView={2}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.activeIndex);
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {history.map((item, index) => (
              <SwiperSlide key={index}>
                <BubbleHistory
                  title={item.title}
                  preview={item.preview}
                  text={item.text}
                  isActive={index === activeIndex}
                  onReadMoreClick={() => handleReadMoreClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative flex w-full items-center justify-center">
            {/* Left Navigation Arrow */}
            <div className="absolute left-3 z-20 sm:left-6 md:left-9 lg:left-12">
              <button
                className="swiper-button-prev-custom"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slidePrev();
                  }
                }}
              >
                <Image
                  src="/about-us/next-button.png"
                  alt="Prev"
                  width={85}
                  height={85}
                  className="size-8 rotate-180 md:size-10 lg:size-12"
                />
              </button>
            </div>
            <Swiper
              key={selectedEraIndex !== null ? "detail" : "bubble"}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setSelectedEraIndex(swiper.activeIndex)
              }
              initialSlide={selectedEraIndex}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              className="w-3/4"
            >
              {history.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardHistory
                    title={item.title}
                    text={item.text}
                    onBackClick={handleBackClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Right Navigation Arrow */}
            <div className="absolute right-3 z-20 sm:right-6 md:right-9 lg:right-12">
              <button
                className="swiper-button-next-custom"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideNext();
                  }
                }}
              >
                <Image
                  src="/about-us/next-button.png"
                  alt="Next"
                  width={85}
                  height={85}
                  className="size-8 md:size-10 lg:size-12"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
