"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import Countdown from "./component/Countdown";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import InfiniteCarousel from "./component/InfiniteCarousel";
import TimelineCard from "./component/TimelineCard";

export default function LandingPage() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const handleTimelineClick = (timeline: string, event: string) => {
    setActiveEvent(event === activeEvent ? null : event);
  };

  const logos = [
    { src: "/landing-page/gojek-logo.png" },
    { src: "/landing-page/wardah-logo.png" },
    { src: "/landing-page/tokped-logo.png" },
    { src: "/landing-page/pertamina-logo.png" },
  ];

  return (
    <div className="bg-[url('/landing-page/bg-landing.png')] bg-cover bg-center pb-20">
      <div className="flex flex-col items-center">
        <Image
          src="/logo/logo-oskm.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12"
        />
        <Image
          src="/landing-page/oskm-word.svg"
          className="-mt-20 w-5/12 md:-mt-32 lg:w-3/12 xl:-mt-36 xl:w-2/12"
          alt="title"
          width={300}
          height={300}
        />
      </div>
      <div className="relative bottom-[-160px]">
        <Image
          src="/landing-page/penyu.png"
          alt="penyu"
          width={500}
          height={500}
          className="absolute left-0 z-0 w-5/12 md:w-4/12 lg:w-3/12"
        />
        <Image
          src="/landing-page/pindang.png"
          alt="pindang"
          width={500}
          height={500}
          className="absolute right-0 z-0 w-5/12 md:w-4/12 lg:w-3/12"
        />
      </div>

      <div className="relative z-10 mb-32">
        <Countdown targetDate="2024-08-08T23:59:59" />
        <div className="flex flex-row justify-center gap-x-4 font-rem">
          <Button variant={"pink"} className="relative z-10 p-4 md:text-xl">
            <IoMdDownload className="mr-2 h-4 w-4" />
            Download Guidebook
          </Button>
          <Button variant={"pink"} className="relative z-10 p-4 md:text-xl">
            Explore Ocean Now!
          </Button>
        </div>
      </div>

      <div className="relative z-10 mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Timeline ITB KAT 2024
        </h1>
        <div className="flex flex-col items-center font-mogula text-[#C5FFF3] text-shadow-blue">
          <div className="flex justify-center gap-x-20 lg:gap-x-64 xl:gap-x-72">
            <div
              className="flex cursor-pointer flex-col items-center md:w-4/12 lg:w-3/12"
              onClick={() => handleTimelineClick("diklat", "Diklat Terpusat")}
            >
              <Image
                src="/landing-page/icon-dikpus.svg"
                alt="1"
                width={500}
                height={500}
              />
              <p className="text-lg font-bold md:text-xl lg:text-2xl">
                Diklat Terpusat
              </p>
              <p className="font-rem text-sm lg:text-lg">6-7 & 13 Juli 2024</p>
            </div>
            <div
              className="flex cursor-pointer flex-col items-center md:w-4/12 lg:w-3/12"
              onClick={() => handleTimelineClick("showcase", "ITB Showcase")}
            >
              <Image
                src="/landing-page/icon-showcase.svg"
                alt="2"
                width={500}
                height={500}
              />
              <p className="text-lg font-bold md:text-xl lg:text-2xl">
                ITB Showcase
              </p>
              <p className="font-rem text-sm lg:text-lg">20 Agustus 2024</p>
            </div>
          </div>
          <div
            className="flex w-4/12 cursor-pointer flex-col items-center lg:w-3/12 xl:w-2/12"
            onClick={() => handleTimelineClick("oskm", "OSKM")}
          >
            <Image
              src="/landing-page/icon-oskm.svg"
              alt="3"
              width={500}
              height={500}
            />
            <p className="text-lg font-bold md:text-xl lg:text-2xl">OSKM</p>
            <p className="font-rem text-sm lg:text-lg">6-9 Agustus 2024</p>
          </div>
        </div>
      </div>
      <div className="relative -top-[120px] md:-top-[240px] xl:-top-[360px]">
        <Image
          src="/landing-page/ikan-oren.svg"
          alt="penyu"
          width={500}
          height={500}
          className="absolute left-0 z-0 w-5/12 md:w-4/12 lg:w-3/12"
        />
        <Image
          src="/landing-page/penyu-2.svg"
          alt="pindang"
          width={500}
          height={500}
          className="absolute right-0 z-0 w-5/12 md:w-4/12 lg:w-3/12"
        />
      </div>
      <div className="relative z-10 mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Sponsors
        </h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
      <div className="relative -top-[100px] md:-top-[120px] xl:-top-[150px]">
        <Image
          src="/landing-page/ikan-pindang.svg"
          alt="ikan-pindang"
          width={500}
          height={500}
          className="absolute left-0 z-0 w-5/12 md:w-4/12 lg:w-3/12"
        />
        <Image
          src="/landing-page/ubur-2.svg"
          alt="ubur-ubur"
          width={500}
          height={500}
          className="absolute -top-[20px] right-0 z-0 w-4/12 md:w-3/12 lg:-top-[40px] xl:-top-[60px] xl:w-2/12"
        />
      </div>
      <div className="relative z-10 mb-32">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Media Partners
        </h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="medium" />
          <InfiniteCarousel logos={logos} direction="left" size="large" />
          <InfiniteCarousel logos={logos} direction="right" size="small" />
        </div>
      </div>
      <div className="relative top-[-60px]">
        <Image
          src="/landing-page/ikan-naga.svg"
          alt="ikan-naga"
          width={500}
          height={500}
          className="absolute left-0 z-10 w-5/12 md:w-4/12 xl:w-3/12"
        />
        <Image
          src="/landing-page/ubur-pink.svg"
          alt="ubur-pink"
          width={500}
          height={500}
          className="absolute right-0 z-10 w-5/12 md:w-4/12 xl:w-3/12"
        />
      </div>
      <div className="relative z-0 flex flex-col items-center">
        <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
          Our Tenants
        </h1>
        <div className="relative flex w-9/12 flex-col items-center justify-center rounded-lg border-[0.1px] bg-gradient-to-r shadow-[0px_0px_20px_#FFFFFF] md:w-6/12 lg:py-10 xl:w-4/12">
          {/* Transparent Background Layer */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-center font-mogula text-2xl text-[#0010A4] md:text-3xl lg:text-4xl xl:text-5xl">
              Calling Out All Tenants
            </h1>
            <div className="my-4 font-rem text-white lg:my-8 xl:text-lg">
              <p className="text-center">
                For further information please contact:
              </p>
              <p className="text-center">+62-812-9237-2312</p>
            </div>
            <Button variant="pink" className="px-6 font-rem xl:text-lg">
              Register Now!
            </Button>
          </div>

          {/* Coral Images */}
          <Image
            src="/landing-page/coral_left.svg"
            alt="tenant"
            width={500}
            height={500}
            className="absolute bottom-[-32px] left-[-50px] w-4/12 md:w-3/12"
          />
          <Image
            src="/landing-page/coral_right.svg"
            alt="tenant"
            width={500}
            height={500}
            className="absolute bottom-[-20px] right-[-50px] w-4/12 md:w-3/12"
          />
        </div>
      </div>

      {/* Conditional rendering for the TimelineCard */}
      {activeEvent === "Diklat Terpusat" && (
        <TimelineCard
          event="Diklat Terpusat"
          days={[
            {
              date: "6 Juli 2024",
              dayTitle: "Day 1 - Pengenalan Materi",
              activities: [
                { time: "08.00", description: "Sesi Pembukaan" },
                { time: "10.00", description: "Pengenalan Dosen" },
                { time: "13.00", description: "Praktikum" },
              ],
            },
            {
              date: "7 Juli 2024",
              dayTitle: "Day 2 - Pendalaman Materi",
              activities: [
                { time: "08.00", description: "Materi A" },
                { time: "10.00", description: "Materi B" },
              ],
            },
            {
              date: "13 Juli 2024",
              dayTitle: "Day 3 - Penutupan",
              activities: [
                { time: "08.00", description: "Review & Diskusi" },
                { time: "10.00", description: "Penutupan & Foto Bersama" },
              ],
            },
          ]}
          onClose={() => setActiveEvent(null)}
        />
      )}

      {activeEvent === "ITB Showcase" && (
        <TimelineCard
          event="ITB Showcase"
          days={[
            {
              date: "20 Agustus 2024",
              dayTitle: "Showcase Day",
              activities: [
                { time: "09.00", description: "Pembukaan Showcase" },
                { time: "11.00", description: "Presentasi Tim A" },
                { time: "14.00", description: "Presentasi Tim B" },
                {
                  time: "16.00",
                  description: "Penutupan & Pengumuman Pemenang",
                },
              ],
            },
          ]}
          onClose={() => setActiveEvent(null)}
        />
      )}
      {activeEvent === "OSKM" && (
        <TimelineCard
          event="OSKM"
          days={[
            {
              date: "7 Agustus 2024",
              dayTitle: "Day 1 - Menjadi Mahasiswa",
              activities: [
                { time: "07.30", description: "Opening Ceremony" },
                { time: "10.00", description: "Aktivitas B" },
                { time: "13.00", description: "Aktivitas C" },
              ],
            },
            {
              date: "8 Agustus 2024",
              dayTitle: "Day 2 - Mahasiswa Merdeka",
              activities: [
                { time: "07.30", description: "Aktivitas A" },
                { time: "10.00", description: "Aktivitas B" },
              ],
            },
            {
              date: "9 Agustus 2024",
              dayTitle: "Day 3 - Konsistensi Dalam Belajar",
              activities: [
                { time: "07.30", description: "Aktivitas A" },
                { time: "10.00", description: "Aktivitas B" },
              ],
            },
          ]}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </div>
  );
}
