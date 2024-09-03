import { Button } from "~/components/ui/button";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import InfiniteCarousel from "./component/InfiniteCarousel";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import {
  largeMedpar,
  mediumMedpar,
  smallMedpar,
  xlargeMedpar,
} from "./constants";

import FadeInImage from "~/components/FadeInImage";
import Link from "next/link";
import SponsorList from "./component/SponsorList";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./component/Countdown"), {
  ssr: false,
});

export default function LandingPage() {
  const daysDikpus = [
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
  ];

  const daysITBShowcase = [
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
  ];

  const daysOSKM = [
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
  ];

  return (
    <div className="overflow-hidden bg-[url('/landing-page/bg-landing.webp')] bg-cover bg-center">
      <div className="py-20">
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src="/logo/logo-oskm.png"
              alt="logo"
              width={500}
              height={500}
              className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-[20%]"
              draggable={false}
            />
            <Image
              src="/landing-page/oskm-word.svg"
              className="-mt-16 w-5/12 md:-mt-[6rem] lg:w-3/12 xl:w-[15%]"
              alt="title"
              width={300}
              height={300}
              draggable={false}
            />
          </div>
          <div className="relative bottom-[-160px]">
            <FadeInImage
              className="absolute -left-20 top-[4rem] z-0 aspect-square w-[60%] md:left-0 md:top-0 md:w-4/12 lg:w-3/12"
              src="/landing-page/penyu.webp"
              alt="penyu"
              direction="left"
            />
            <FadeInImage
              className="absolute -right-10 top-[4rem] z-0 aspect-square w-5/12 md:right-0 md:top-0 md:w-4/12 lg:w-3/12"
              src="/landing-page/pindang.png"
              alt="pindang"
              direction="right"
            />
          </div>

          <div className="relative z-10 mx-10 -mt-5 mb-32 md:-mt-10">
            <Countdown targetDate="2024-09-04T09:00:00" />
            <div className="flex flex-col items-center justify-center gap-y-4 font-rem md:flex-row md:gap-x-4">
              <Link href={"https://drive.google.com/drive/u/0/home"}>
                <Button
                  variant={"secondary"}
                  className="relative z-10 md:text-[1rem]"
                >
                  <IoMdDownload className="mr-2 h-4 w-4" />
                  The Book
                </Button>
              </Link>
              <Link href={"https://app.oskmitb.com/"}>
                <Button
                  variant={"pink"}
                  className="relative z-10 md:text-[1rem]"
                >
                  Explore Ocean Now!
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 mx-12 mb-32">
            <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
              Timeline ITB KAT 2024
            </h1>
            <div className="flex flex-col items-center font-mogula text-[#C5FFF3] text-shadow-blue">
              <div className="flex flex-col justify-center gap-x-20 md:flex-row lg:gap-x-64 xl:gap-x-72">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex cursor-pointer flex-col items-center md:w-4/12 lg:w-3/12">
                      <Image
                        src="/landing-page/icon-dikpus.webp"
                        alt="1"
                        width={500}
                        height={500}
                        draggable={false}
                      />
                      <div className="text-center">
                        <p className="text-2xl font-bold lg:text-3xl">
                          Diklat Terpusat
                        </p>
                        <p className="font-rem text-sm lg:text-lg">
                          6-7 & 13 Juli 2024
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="relative h-[300px] w-full overflow-x-hidden overflow-y-scroll rounded-2xl bg-[url('/landing-page/timeline-detail/bg-dialog.webp')] bg-cover p-6 shadow-lg scrollbar-thin scrollbar-track-[#99E0FF] scrollbar-thumb-[#0010A4] lg:h-[360px] lg:w-8/12 xl:h-[420px] xl:w-6/12">
                      <div className="my-2 text-center font-mogula text-2xl text-[#99E0FF] md:text-3xl xl:text-4xl">
                        Diklat Terpusat
                      </div>

                      <div className="relative flex items-center justify-center gap-6 px-6 font-rem">
                        {/* Time Area */}
                        <div className="flex w-fit flex-col">
                          {daysDikpus.map((day, index) => (
                            <div key={index}>
                              <div className="flex items-center">
                                <h2 className="relative flex h-[60px] items-center text-xs md:h-[72px] md:text-base xl:text-lg">
                                  <Image
                                    src="/landing-page/timeline-detail/ombak_left.webp"
                                    alt="ombak"
                                    width={120}
                                    height={120}
                                    className="absolute left-[-20px] top-[-12px] w-8/12 md:left-[-40px] md:top-[-36px]"
                                    draggable={false}
                                  />
                                  <span className="flex w-32 justify-end rounded-full bg-[#000D76] py-2 pr-4 font-mogula text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-48">
                                    {day.date}
                                  </span>
                                </h2>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((activity, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                  >
                                    <span className="ml-20">
                                      {activity.time}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Vertical Line with Circles */}
                        <div className="flex w-[2px] flex-col bg-[#000D76] lg:w-[3px]">
                          {daysDikpus.map((day, index) => (
                            <div
                              key={index}
                              className="relative flex flex-col items-center"
                            >
                              {/* Large circle */}
                              <div className="flex h-[60px] items-center md:h-[72px]">
                                <div className="relative flex h-16 w-16 flex-col items-center justify-center">
                                  <div className="h-2/5 w-2/5 rounded-full bg-[#000D76] md:h-1/2 md:w-1/2"></div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center md:h-[48px]"
                                  >
                                    <div className="h-3 w-3 rounded-full bg-[#000D76]"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Activity Area */}
                        <div className="w-1/2">
                          {daysDikpus.map((day, index) => (
                            <div key={index}>
                              <div className="relative flex items-center">
                                <h2 className="flex h-[60px] items-center text-xs text-blue-800 md:h-[72px] md:text-base xl:text-lg">
                                  <span className="relative flex w-32 justify-start rounded-full bg-[#000D76] py-2 pl-4 font-mogula text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-72 xl:w-96">
                                    {day.dayTitle}
                                    <Image
                                      src="/landing-page/timeline-detail/ombak_1.webp"
                                      alt="ombak"
                                      width={120}
                                      height={120}
                                      className="absolute right-[-36px] top-[-18px] w-8/12 md:right-[-36px] md:top-[-30px] md:w-4/12 xl:top-[-44px]"
                                      draggable={false}
                                    />
                                  </span>
                                </h2>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((activity, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center font-rem text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                  >
                                    <span>{activity.description}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                {/* ITB Showcase Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex w-full cursor-pointer flex-col items-center md:w-4/12 lg:w-3/12">
                      <Image
                        src="/landing-page/icon-oskm.webp"
                        alt="3"
                        width={400}
                        height={400}
                        draggable={false}
                      />
                      <div className="text-center">
                        <p className="text-2xl font-bold lg:text-3xl">OSKM</p>
                        <p className="font-rem text-sm lg:text-lg">
                          7-9 Agustus 2024
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="relative h-[300px] w-full overflow-x-hidden overflow-y-scroll rounded-2xl bg-[url('/landing-page/timeline-detail/bg-dialog.webp')] bg-cover p-6 shadow-lg scrollbar-thin scrollbar-track-[#99E0FF] scrollbar-thumb-[#0010A4] lg:h-[360px] lg:w-8/12 xl:h-[420px] xl:w-6/12">
                      <div className="my-2 text-center font-mogula text-2xl text-[#99E0FF] md:text-3xl xl:text-4xl">
                        OSKM
                      </div>

                      <div className="relative flex items-center justify-center gap-6 px-6 font-rem">
                        {/* Time Area */}
                        <div className="flex w-fit flex-col">
                          {daysOSKM.map((day, index) => (
                            <div key={index}>
                              <div className="flex items-center">
                                <h2 className="relative flex h-[60px] items-center text-xs md:h-[72px] md:text-base xl:text-lg">
                                  <Image
                                    src="/landing-page/timeline-detail/ombak_left.webp"
                                    alt="ombak"
                                    width={120}
                                    height={120}
                                    className="absolute left-[-20px] top-[-12px] w-8/12 md:left-[-40px] md:top-[-36px]"
                                    draggable={false}
                                  />
                                  <span className="flex w-32 justify-end rounded-full bg-[#000D76] py-2 pr-4 font-mogula text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-48">
                                    {day.date}
                                  </span>
                                </h2>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((activity, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                  >
                                    <span className="ml-20">
                                      {activity.time}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Vertical Line with Circles */}
                        <div className="flex w-[2px] flex-col bg-[#000D76] lg:w-[3px]">
                          {daysOSKM.map((day, index) => (
                            <div
                              key={index}
                              className="relative flex flex-col items-center"
                            >
                              {/* Large circle */}
                              <div className="flex h-[60px] items-center md:h-[72px]">
                                <div className="relative flex h-16 w-16 flex-col items-center justify-center">
                                  {index === 0 ? (
                                    <Image
                                      src="/landing-page/timeline-detail/ubur.svg"
                                      alt="ubur"
                                      width={100}
                                      height={100}
                                      className="absolute"
                                      draggable={false}
                                    />
                                  ) : (
                                    <div className="h-2/5 w-2/5 rounded-full bg-[#000D76] md:h-1/2 md:w-1/2"></div>
                                  )}
                                </div>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center md:h-[48px]"
                                  >
                                    <div className="h-3 w-3 rounded-full bg-[#000D76]"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Activity Area */}
                        <div className="w-1/2">
                          {daysOSKM.map((day, index) => (
                            <div key={index}>
                              <div className="relative flex items-center">
                                <h2 className="flex h-[60px] items-center text-xs text-blue-800 md:h-[72px] md:text-base xl:text-lg">
                                  <span className="relative flex w-32 justify-start rounded-full bg-[#000D76] py-2 pl-4 text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-72 xl:w-96">
                                    {day.dayTitle}
                                    <Image
                                      src="/landing-page/timeline-detail/ombak_1.webp"
                                      alt="ombak"
                                      width={120}
                                      height={120}
                                      className="absolute right-[-36px] top-[-18px] w-8/12 md:right-[-40px] md:top-[-30px] md:w-4/12 xl:top-[-44px]"
                                      draggable={false}
                                    />
                                  </span>
                                </h2>
                              </div>
                              <div className="space-y-2">
                                {day.activities.map((activity, idx) => (
                                  <div
                                    key={idx}
                                    className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                  >
                                    <span>{activity.description}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {/* OSKM Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex cursor-pointer flex-col items-center md:w-4/12 lg:w-3/12">
                    <Image
                      src="/landing-page/icon-showcase.webp"
                      alt="2"
                      width={500}
                      height={500}
                      draggable={false}
                    />
                    <div className="text-center">
                      <p className="text-2xl font-bold lg:text-3xl">
                        ITB Showcase
                      </p>
                      <p className="font-rem text-sm lg:text-lg">
                        20 Agustus 2024
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="relative h-[300px] w-full overflow-x-hidden overflow-y-scroll rounded-2xl bg-[url('/landing-page/timeline-detail/bg-dialog.webp')] bg-cover p-6 shadow-lg scrollbar-thin scrollbar-track-[#99E0FF] scrollbar-thumb-[#0010A4] lg:h-[360px] lg:w-8/12 xl:h-[420px] xl:w-6/12">
                    <div className="my-2 text-center font-mogula text-2xl text-[#99E0FF] md:text-3xl xl:text-4xl">
                      ITB Showcase
                    </div>

                    <div className="relative flex items-center justify-center gap-6 px-6 font-rem">
                      {/* Time Area */}
                      <div className="flex w-fit flex-col">
                        {daysITBShowcase.map((day, index) => (
                          <div key={index}>
                            <div className="flex items-center">
                              <h2 className="relative flex h-[60px] items-center text-xs md:h-[72px] md:text-base xl:text-lg">
                                <Image
                                  src="/landing-page/timeline-detail/ombak_left.webp"
                                  alt="ombak"
                                  width={120}
                                  height={120}
                                  className="absolute left-[-20px] top-[-12px] w-8/12 md:left-[-40px] md:top-[-36px]"
                                  draggable={false}
                                />
                                <span className="flex w-32 justify-end rounded-full bg-[#000D76] py-2 pr-4 font-mogula text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-48">
                                  {day.date}
                                </span>
                              </h2>
                            </div>
                            <div className="space-y-2">
                              {day.activities.map((activity, idx) => (
                                <div
                                  key={idx}
                                  className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                >
                                  <span className="ml-20">{activity.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Vertical Line with Circles */}
                      <div className="flex w-[2px] flex-col bg-[#000D76] lg:w-[3px]">
                        {daysITBShowcase.map((day, index) => (
                          <div
                            key={index}
                            className="relative flex flex-col items-center"
                          >
                            {/* Large circle */}
                            <div className="flex h-[60px] items-center md:h-[72px]">
                              <div className="relative flex h-16 w-16 flex-col items-center justify-center">
                                <div className="h-2/5 w-2/5 rounded-full bg-[#000D76] md:h-1/2 md:w-1/2"></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {day.activities.map((_, idx) => (
                                <div
                                  key={idx}
                                  className="flex h-[40px] items-center md:h-[48px]"
                                >
                                  <div className="h-3 w-3 rounded-full bg-[#000D76]"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Activity Area */}
                      <div className="w-1/2">
                        {daysITBShowcase.map((day, index) => (
                          <div key={index}>
                            <div className="relative flex items-center">
                              <h2 className="flex h-[60px] items-center text-xs text-blue-800 md:h-[72px] md:text-base xl:text-lg">
                                <span className="relative flex w-32 justify-start rounded-full bg-[#000D76] py-2 pl-4 text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-72 xl:w-96">
                                  {day.dayTitle}
                                  <Image
                                    src="/landing-page/timeline-detail/ombak_1.webp"
                                    alt="ombak"
                                    width={120}
                                    height={120}
                                    className="absolute right-[-36px] top-[-18px] w-8/12 md:right-[-40px] md:top-[-30px] md:w-4/12 xl:top-[-44px]"
                                    draggable={false}
                                  />
                                </span>
                              </h2>
                            </div>
                            <div className="space-y-2">
                              {day.activities.map((activity, idx) => (
                                <div
                                  key={idx}
                                  className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                                >
                                  <span>{activity.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative -top-[120px] md:-top-[240px] xl:-top-[360px]">
            <FadeInImage
              className="absolute left-0 z-0 aspect-square w-5/12 md:w-4/12 lg:w-3/12"
              src="/landing-page/ikan-oren.webp"
              alt="ikan-oren"
              direction="left"
            />
            <FadeInImage
              className="absolute right-0 z-0 aspect-square w-5/12 md:w-4/12 lg:w-3/12"
              src="/landing-page/penyu-2.webp"
              alt="penyu"
              direction="right"
            />
          </div>
          <div className="relative z-10 mb-32">
            <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
              Our Sponsors
            </h1>
            <div className="flex flex-col items-center justify-center">
              <SponsorList />
            </div>
          </div>
          <div className="relative -top-[100px] md:-top-[120px] xl:-top-[150px]">
            <FadeInImage
              src="/landing-page/ikan-pindang.webp"
              alt="ikan-pindang"
              className="absolute left-0 z-0 aspect-square w-5/12 md:w-4/12 lg:w-3/12"
              direction="left"
            />
            <FadeInImage
              src="/landing-page/ubur-2.webp"
              alt="ubur-ubur"
              className="absolute -top-[20px] right-0 z-0 aspect-square w-4/12 md:w-3/12 lg:-top-[40px] xl:-top-[60px] xl:w-2/12"
              direction="right"
            />
          </div>
        </div>
        <div className="mx-auto mb-32 w-full max-w-[100rem]">
          <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
            Our Media Partners
          </h1>
          <div className="flex flex-col items-center justify-center gap-1 md:gap-3 lg:gap-5">
            <InfiniteCarousel
              items={xlargeMedpar}
              direction="left"
              size="xlarge"
            />
            <InfiniteCarousel
              items={largeMedpar}
              direction="right"
              size="large"
            />
            <InfiniteCarousel
              items={mediumMedpar}
              direction="left"
              size="medium"
            />
            <InfiniteCarousel
              items={smallMedpar}
              direction="right"
              size="small"
            />
          </div>
        </div>
        <div className="container">
          <div className="relative top-[-60px] z-0">
            <FadeInImage
              src="/landing-page/ikan-naga.webp"
              alt="ikan-naga"
              className="absolute -left-7 z-10 aspect-square w-5/12 scale-x-[-1] md:left-0 md:w-4/12 xl:w-3/12"
              direction="left"
            />
            <FadeInImage
              src="/landing-page/ubur-pink.webp"
              alt="ubur-pink"
              className="absolute -right-4 z-10 aspect-square w-5/12 md:right-0 md:w-4/12 xl:w-3/12"
            />
          </div>
          <div className="relative z-0 flex flex-col items-center">
            <h1 className="mb-6 text-center font-mogula text-3xl text-white text-shadow-pink md:text-4xl xl:text-5xl">
              Our Tenants
            </h1>
            <div className="relative flex w-full flex-col items-center justify-center rounded-lg border-[0.1px] bg-gradient-to-r py-6 shadow-[0px_0px_20px_#FFFFFF] md:w-6/12 lg:py-10 xl:w-4/12">
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
                  <p className="text-center">+62-815-922-3926</p>
                </div>
                <Link href={"https://wa.me/+628159223926"} target="_blank">
                  <Button variant="pink" className="px-6 font-rem xl:text-lg">
                    Register Now!
                  </Button>
                </Link>
              </div>

              {/* Coral Images */}
              <Image
                src="/landing-page/coral_left.webp"
                alt="tenant"
                width={500}
                height={500}
                className="absolute bottom-[-32px] left-[-50px] w-4/12 md:w-3/12"
                draggable={false}
              />
              <Image
                src="/landing-page/coral_right.webp"
                alt="tenant"
                width={500}
                height={500}
                className="absolute bottom-[-20px] right-[-50px] w-4/12 md:w-3/12"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
