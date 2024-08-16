import Image from "next/image";

export default function VisiMisi() {
  return (
    <div className="relative">
      {/* Visi */}
      <div className="ml-6 mt-44 flex items-center md:ml-20 lg:mt-96 xl:ml-44">
        <div className="basis-3/5 text-white sm:basis-2/3">
          <h1 className="text-3xl [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
            Visi
          </h1>
          <p className="mt-5 text-justify text-xs sm:text-sm md:text-base lg:mt-10 lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nemo sunt quam unde sequi ea ad nam quisquam rerum aliquid adipisci
            assumenda
          </p>
        </div>
        <div className="basis-2/5 sm:basis-1/3">
          <Image
            src="/about-us/penyu.png"
            alt="penyu"
            width={1086}
            height={960}
            className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72"
          />
        </div>
      </div>
      {/* Misi */}
      <div className="ml-6 mr-6 mt-24 flex items-center md:mr-20 xl:mr-44">
        <div className="flex basis-1/3 justify-end">
          <Image
            src="/about-us/ubur-ubur.png"
            alt="ubur-ubur"
            width={946}
            height={1028}
            className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72"
          />
        </div>
        <div className="basis-2/3 text-end text-white">
          <h1 className="text-3xl [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
            Misi
          </h1>
          <p className="mt-5 text-justify text-xs sm:text-sm md:text-base lg:mt-10 lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nemo sunt quam unde sequi ea ad nam quisquam rerum aliquid adipisci
            assumenda
          </p>
        </div>
      </div>
    </div>
  );
}
