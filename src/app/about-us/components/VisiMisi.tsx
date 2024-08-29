import Image from "next/image";

export default function VisiMisi() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#3d72e4] to-transparent md:h-40"></div>
      {/* Visi */}
      <div className="ml-6 mt-10 flex items-center md:ml-20 lg:mt-20 xl:ml-44">
        <div className="basis-3/5 text-white sm:basis-2/3">
          <h1 className="font-mogula text-3xl [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
            Visi
          </h1>
          <p className="mt-5 text-left font-rem text-xs sm:text-sm md:text-base lg:mt-10 lg:text-lg xl:text-xl">
            KAT ITB sebagai bentala jelajah cakrawala pembentuk masyarakat
            global untuk akselerasi investasi bangsa menuju Indonesia maju
          </p>
        </div>
        <div className="basis-2/5 sm:basis-1/3">
          <Image
            src="/about-us/penyu.webp"
            alt="penyu"
            width={1086}
            height={960}
            className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80"
            draggable={false}
          />
        </div>
      </div>
      {/* Misi */}
      <div className="ml-6 mr-6 mt-24 flex items-center md:mr-20 xl:mr-44">
        <div className="flex basis-1/3 justify-end">
          <Image
            src="/about-us/ubur-ubur.webp"
            alt="ubur-ubur"
            width={946}
            height={1028}
            className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72"
            draggable={false}
          />
        </div>
        <div className="basis-2/3 text-end text-white">
          <h1 className="font-mogula text-3xl [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
            Misi
          </h1>
          <ul className="mt-5 text-right font-rem text-xs sm:text-sm md:text-base lg:mt-10 lg:text-lg xl:text-xl">
            <li>
              KAT ITB 2024 dapat membentuk masyarakat yang mampu think
              globally dan act locally.
            </li>
            <li className="my-3">
              KAT ITB 2024 dapat menanamkan rasa sense of belonging dan sense
              of community.
            </li>
            <li>
              KAT ITB 2024 dapat menciptakan lingkungan yang kontributif dan
              kolaboratif serta mendukung pengembangan diri setiap insan yang
              terlibat di dalamnya.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
