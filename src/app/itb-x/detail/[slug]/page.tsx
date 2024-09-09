import Image from "next/image";
import CarouselKegiatan from "./components/carousel-kegiatan";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import {
  hmps,
  ukmAgama,
  ukmKajian,
  ukmMedia,
  ukmOlahragaKesehatan,
  ukmPendidikan,
  ukmSeniBudaya,
} from "../../data/data_lembaga";
import { slugify } from "~/lib/slugify";
import Card from "../../list-lembaga/components/Card";

export const metadata = {
  title: "ITB - X",
  description: "ITB - X",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default function DetailPage({ params }: { params: { slug: string } }) {
  const pageData =
    hmps.find((hmp) => slugify(hmp.nama_lembaga) === params.slug) ??
    ukmAgama.find((ukm) => slugify(ukm.nama_lembaga) === params.slug) ??
    ukmKajian.find((ukm) => slugify(ukm.nama_lembaga) === params.slug) ??
    ukmMedia.find((ukm) => slugify(ukm.nama_lembaga) === params.slug) ??
    ukmOlahragaKesehatan.find(
      (ukm) => slugify(ukm.nama_lembaga) === params.slug,
    ) ??
    ukmPendidikan.find((ukm) => slugify(ukm.nama_lembaga) === params.slug) ??
    ukmSeniBudaya.find((ukm) => slugify(ukm.nama_lembaga) === params.slug);

  const lembagaData = hmps
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map((himpunan) => {
      return {
        name: himpunan.nama_lembaga,
        fakultas: himpunan.fakultas,
        photoPath: himpunan.foto_kegiatan[0],
        link: `/itb-x/detail/${slugify(himpunan.nama_lembaga)}`,
      };
    });

  const isShowVisi = pageData?.visi !== undefined && pageData?.visi !== "-";

  return (
    <main className="min-h-screen bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-20">
      <div className="mx-10 mt-20 flex flex-col items-center justify-center gap-y-20 lg:mx-16 xl:mx-24">
        {/* images carousel */}
        <div>
          <CarouselKegiatan hmps={pageData!} />
        </div>
        {/* hari jadi */}
        <div className="flex w-full flex-col items-center rounded-[40px] bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-8 font-mogula text-3xl text-white lg:py-12 lg:text-4xl">
          <p>Hari Jadi</p>
          <p>{pageData?.hari_jadi}</p>
        </div>
        {/* about us */}
        <div className="w-full">
          <div className="mb-6 flex w-full flex-row items-center justify-between">
            <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
            <h1 className="text-center font-mogula text-3xl text-white lg:text-4xl xl:text-5xl">
              About Us
            </h1>
            <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
          </div>
          <div className="relative overflow-hidden rounded-[40px] bg-[#A2F8F3] p-6 lg:p-8">
            {/* ombak-left positioned absolutely */}
            <Image
              src="/itb-x/ombak-left.png"
              alt="ombak-left"
              width={600}
              height={600}
              className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40"
              draggable={false}
            />
            {/* ombak-right positioned absolutely */}
            <Image
              src="/itb-x/ombak-right.png"
              alt="ombak-right"
              width={600}
              height={600}
              className="absolute -right-20 -top-20 md:-right-40 md:-top-40"
              draggable={false}
            />
            <p className="relative z-10 max-h-[600px] overflow-y-scroll rounded-[40px] bg-[url('/itb-x/bg-desc.jpg')] bg-cover bg-center px-6 py-8 text-justify font-rem text-[#0010A4] lg:rounded-[80px] lg:px-8 lg:py-10">
              {pageData?.deskripsi}
            </p>
          </div>
        </div>
        {/* visi */}
        {isShowVisi && (
          <div className="w-full">
            <div className="mb-6 flex w-full flex-row items-center justify-between">
              <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
              <h1 className="font-mogula text-3xl text-white lg:text-4xl xl:text-5xl">
                Visi
              </h1>
              <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
            </div>
            <div className="relative overflow-hidden rounded-[40px] bg-[#A2F8F3] p-6 lg:p-8">
              {/* ombak-left positioned absolutely */}
              <Image
                src="/itb-x/ombak-left.png"
                alt="ombak-left"
                width={600}
                height={600}
                className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40"
                draggable={false}
              />
              {/* ombak-right positioned absolutely */}
              <Image
                src="/itb-x/ombak-right.png"
                alt="ombak-right"
                width={600}
                height={600}
                className="absolute -right-20 -top-20 md:-right-40 md:-top-40"
                draggable={false}
              />
              <p className="relative z-10 max-h-[600px] overflow-y-scroll rounded-[40px] bg-[url('/itb-x/bg-desc.jpg')] bg-cover bg-center px-6 py-8 text-justify font-rem text-[#0010A4] lg:rounded-[80px] lg:px-8 lg:py-10">
                {pageData?.visi}
              </p>
            </div>
          </div>
        )}
        {/* alamat */}
        <div className="flex max-w-96 flex-col items-center justify-center text-center font-rem text-lg font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] lg:text-xl xl:text-2xl">
          <p className="pb-4">Alamat Sekretariat</p>
          <div className="rounded-xl bg-sky-400 px-10 py-3">
            <p>{pageData?.alamat_sekretariat}</p>
          </div>
        </div>
        {/* medsos */}
        <div className="flex flex-col items-center justify-between font-rem text-lg font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] lg:text-xl">
          <p className="pb-4 xl:text-2xl">Sosial Media</p>
          <div className="rounded-xl bg-sky-400 px-10 py-3">
            {pageData?.media_sosial
              .split("\n")
              .map((medsos, index) => <p key={index}>{medsos}</p>)}
          </div>
        </div>
        {/* lembaga carousel */}
        <div className="flex w-full items-center justify-center">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="sm:mx-6">
              {lembagaData.map((lembaga, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center sm:justify-start sm:p-8 md:basis-1/2 lg:basis-1/3"
                >
                  <Card nama={lembaga.name} logo_path={lembaga.photoPath} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
