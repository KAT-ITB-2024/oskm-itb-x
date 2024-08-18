import Image from "next/image";

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-20">
      <div className="mx-10 mt-20 flex flex-col items-center justify-center gap-y-20 lg:mx-16 xl:mx-24">
        {/* images carousel */}
        <div></div>
        {/* hari jadi */}
        <div className="flex w-full flex-col items-center rounded-[40px] bg-[url('/itb-x/bg-detail.png')] bg-cover bg-center py-8 font-mogula text-3xl text-white lg:py-12 lg:text-4xl">
          <p>Hari Jadi</p>
          <p>10 November 1982</p>
        </div>
        {/* about us */}
        <div>
          <div className="mb-6 flex flex-row items-center justify-between">
            <div className="h-8 w-24 rounded-2xl bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:w-4/12 lg:w-5/12"></div>
            <h1 className="font-mogula text-3xl text-white lg:text-4xl">
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
            />
            {/* ombak-right positioned absolutely */}
            <Image
              src="/itb-x/ombak-right.png"
              alt="ombak-right"
              width={600}
              height={600}
              className="absolute -right-20 -top-20 md:-right-40 md:-top-40"
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
            <h1 className="font-mogula text-3xl text-white lg:text-4xl">
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
            />
            {/* ombak-right positioned absolutely */}
            <Image
              src="/itb-x/ombak-right.png"
              alt="ombak-right"
              width={600}
              height={600}
              className="absolute -right-20 -top-20 md:-right-40 md:-top-40"
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
          />
          <Image
            src="/itb-x/medsos-icon.svg"
            alt="medsos"
            width={200}
            height={200}
            className="w-4/5 lg:w-full"
          />
          <Image
            src="/itb-x/medsos-icon.svg"
            alt="medsos"
            width={200}
            height={200}
            className="w-4/5 lg:w-full"
          />
        </div>
        {/* lembaga carousel */}
        <div></div>
      </div>
    </main>
  );
}
