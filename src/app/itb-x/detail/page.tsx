import Image from "next/image";
import CarouselKegiatan from "./components/carousel-kegiatan";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import CardPreview from "./components/card-preview";

export default function DetailPage() {
  const images = [
    "/itb-x/detail/hmif-1.png",
    "/itb-x/detail/hmif-2.jpg",
    "/itb-x/detail/hmif-3.jpg",
    "/itb-x/detail/hmif-4.jpg",
  ];

  const lembagaData = [
    {
      title: "HMIF",
      subtitle: "Himpunan Mahasiswa Informatika",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum ac turpis tempor tristique. Proin sit amet tristique leo. Duis iaculis lorem sit amet turpis auctor suscipit. Suspendisse potenti. Proin commodo nisl at nulla scelerisque, eu tempor elit finibus. Duis tristique ex metus, ut imperdiet quam commodo non. Sed sodales nibh in urna condimentum convallis. Praesent et blandit ipsum. Aliquam arcu metus, posuere sit amet urna vel, gravida pulvinar magna. In hac habitasse platea dictumst. Maecenas vitae faucibus lacus. Cras ultricies, velit id molestie malesuada, est ipsum aliquet neque, eget efficitur justo arcu eget sapien. Etiam auctor quis urna ac pulvinar. Suspendisse porta suscipit luctus. Donec nec rutrum justo, vel molestie ante. ",
      image: "/itb-x/detail/logo-hmif.png",
    },
    {
      title: "HIMAFI",
      subtitle: "Himpunan Mahasiswa Fisika",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum ac turpis tempor tristique. Proin sit amet tristique leo. Duis iaculis lorem sit amet turpis auctor suscipit. Suspendisse potenti. Proin commodo nisl at nulla scelerisque, eu tempor elit finibus. Duis tristique ex metus, ut imperdiet quam commodo non. Sed sodales nibh in urna condimentum convallis. Praesent et blandit ipsum. Aliquam arcu metus, posuere sit amet urna vel, gravida pulvinar magna. In hac habitasse platea dictumst. Maecenas vitae faucibus lacus. Cras ultricies, velit id molestie malesuada, est ipsum aliquet neque, eget efficitur justo arcu eget sapien. Etiam auctor quis urna ac pulvinar. Suspendisse porta suscipit luctus. Donec nec rutrum justo, vel molestie ante.",
      image: "/itb-x/detail/himafi-logo.png",
    },
    {
      title: "HMS",
      subtitle: "Himpunan Mahasiswa Sipil",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum ac turpis tempor tristique. Proin sit amet tristique leo. Duis iaculis lorem sit amet turpis auctor suscipit. Suspendisse potenti. Proin commodo nisl at nulla scelerisque, eu tempor elit finibus. Duis tristique ex metus, ut imperdiet quam commodo non. Sed sodales nibh in urna condimentum convallis. Praesent et blandit ipsum. Aliquam arcu metus, posuere sit amet urna vel, gravida pulvinar magna. In hac habitasse platea dictumst. Maecenas vitae faucibus lacus. Cras ultricies, velit id molestie malesuada, est ipsum aliquet neque, eget efficitur justo arcu eget sapien. Etiam auctor quis urna ac pulvinar. Suspendisse porta suscipit luctus. Donec nec rutrum justo, vel molestie ante.",
      image: "/itb-x/detail/hms-logo.png",
    },
    {
      title: "HMTI",
      subtitle: "Himpunan Mahasiswa Teknik Industri",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum ac turpis tempor tristique. Proin sit amet tristique leo. Duis iaculis lorem sit amet turpis auctor suscipit. Suspendisse potenti. Proin commodo nisl at nulla scelerisque, eu tempor elit finibus. Duis tristique ex metus, ut imperdiet quam commodo non. Sed sodales nibh in urna condimentum convallis. Praesent et blandit ipsum. Aliquam arcu metus, posuere sit amet urna vel, gravida pulvinar magna. In hac habitasse platea dictumst. Maecenas vitae faucibus lacus. Cras ultricies, velit id molestie malesuada, est ipsum aliquet neque, eget efficitur justo arcu eget sapien. Etiam auctor quis urna ac pulvinar. Suspendisse porta suscipit luctus. Donec nec rutrum justo, vel molestie ante.",
      image: "/itb-x/detail/hmti-logo.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-20">
      <div className="mx-10 mt-20 flex flex-col items-center justify-center gap-y-20 lg:mx-16 xl:mx-24">
        {/* images carousel */}
        <div>
          <CarouselKegiatan images={images} />
        </div>
        {/* hari jadi */}
        <div className="flex w-full flex-col items-center rounded-[40px] bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-8 font-mogula text-3xl text-white lg:py-12 lg:text-4xl">
          <p>Hari Jadi</p>
          <p>10 November 1982</p>
        </div>
        {/* about us */}
        <div>
          <div className="mb-6 flex flex-row items-center justify-between">
            <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
            <h1 className="font-mogula text-3xl text-white lg:text-4xl xl:text-5xl">
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
            <p className="relative z-10 h-[600px] overflow-y-scroll rounded-[40px] bg-[url('/itb-x/bg-desc.jpg')] bg-cover bg-center px-6 py-8 text-justify font-rem text-[#0010A4] lg:rounded-[80px] lg:px-8 lg:py-10">
              Himpunan Mahasiswa Informatika atau HMIF ITB merupakan sebuah
              lembaga yang mewadahi dua program studi yaitu Teknik Informatika
              serta Sistem dan Teknologi Informasi. Kedua program studi ini
              bernaung pada HMIF ITB didasarkan pada rumpun keilmuan yang
              dimilikinya yaitu Keilmuan Informatika atau Keinformatikaan. HMIF
              ITB tidak hanya bergerak untuk mengembangkan softskill warganya,
              namun juga hardskill-nya. HMIF memiliki Departemen Technology dan
              Inkubator IT yang siap untuk menjadi motor gerak dalam dunia
              keprofesian. Jadi, ketika warga telah lulus dari ITB, kami
              berharap lulusan kami dapat siap secara softskill dan hardskill.
              Himpunan Mahasiswa Informatika atau HMIF ITB merupakan sebuah
              lembaga yang mewadahi dua program studi yaitu Teknik Informatika
              serta Sistem dan Teknologi Informasi. Kedua program studi ini
              bernaung pada HMIF ITB didasarkan pada rumpun keilmuan yang
              dimilikinya yaitu Keilmuan Informatika atau Keinformatikaan. HMIF
              ITB tidak hanya bergerak untuk mengembangkan softskill warganya,
              namun juga hardskill-nya. HMIF memiliki Departemen Technology dan
              Inkubator IT yang siap untuk menjadi motor gerak dalam dunia
              keprofesian. Jadi, ketika warga telah lulus dari ITB, kami
              berharap lulusan kami dapat siap secara softskill dan hardskill.
            </p>
          </div>
        </div>
        {/* visi */}
        <div>
          <div className="mb-6 flex flex-row items-center justify-between">
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
            <p className="relative z-10 h-[600px] overflow-y-scroll rounded-[40px] bg-[url('/itb-x/bg-desc.jpg')] bg-cover bg-center px-6 py-8 text-justify font-rem text-[#0010A4] lg:rounded-[80px] lg:px-8 lg:py-10">
              Himpunan Mahasiswa Informatika atau HMIF ITB merupakan sebuah
              lembaga yang mewadahi dua program studi yaitu Teknik Informatika
              serta Sistem dan Teknologi Informasi. Kedua program studi ini
              bernaung pada HMIF ITB didasarkan pada rumpun keilmuan yang
              dimilikinya yaitu Keilmuan Informatika atau Keinformatikaan. HMIF
              ITB tidak hanya bergerak untuk mengembangkan softskill warganya,
              namun juga hardskill-nya. HMIF memiliki Departemen Technology dan
              Inkubator IT yang siap untuk menjadi motor gerak dalam dunia
              keprofesian. Jadi, ketika warga telah lulus dari ITB, kami
              berharap lulusan kami dapat siap secara softskill dan hardskill.
              Himpunan Mahasiswa Informatika atau HMIF ITB merupakan sebuah
              lembaga yang mewadahi dua program studi yaitu Teknik Informatika
              serta Sistem dan Teknologi Informasi. Kedua program studi ini
              bernaung pada HMIF ITB didasarkan pada rumpun keilmuan yang
              dimilikinya yaitu Keilmuan Informatika atau Keinformatikaan. HMIF
              ITB tidak hanya bergerak untuk mengembangkan softskill warganya,
              namun juga hardskill-nya. HMIF memiliki Departemen Technology dan
              Inkubator IT yang siap untuk menjadi motor gerak dalam dunia
              keprofesian. Jadi, ketika warga telah lulus dari ITB, kami
              berharap lulusan kami dapat siap secara softskill dan hardskill.
            </p>
          </div>
        </div>
        {/* alamat */}
        <div className="flex flex-col items-center justify-center text-center font-rem text-lg text-white lg:text-xl xl:text-2xl">
          <p>Gedung Labtek V Lt. Dasar dan Lt. 4</p>
          <p>Jl. Ganesha No.10, Lb. Siliwangi,</p>
          <p>Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
        </div>
        {/* medsos */}
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/itb-x/medsos-icon.svg"
            alt="medsos"
            width={200}
            height={200}
            className="w-4/5 lg:w-full"
            draggable={false}
          />
          <Image
            src="/itb-x/medsos-icon.svg"
            alt="medsos"
            width={200}
            height={200}
            className="w-4/5 lg:w-full"
            draggable={false}
          />
          <Image
            src="/itb-x/medsos-icon.svg"
            alt="medsos"
            width={200}
            height={200}
            className="w-4/5 lg:w-full"
            draggable={false}
          />
        </div>
        {/* lembaga carousel */}
        <div className="flex w-full items-center justify-center">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="mx-6">
              {lembagaData.map((lembaga, index) => (
                <CarouselItem
                  key={index}
                  className="p-8 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <CardPreview
                      title={lembaga.title}
                      subtitle={lembaga.subtitle}
                      desc={lembaga.desc}
                      image={lembaga.image}
                    />
                  </div>
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
