import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <Image
        src="/about-us/ombak-bg-mobile.png"
        alt="ombak"
        width={786}
        height={1056}
        className="absolute h-[528px] w-full lg:hidden"
      />
      <Image
        src="/about-us/ombak-bg-large.png"
        alt="ombak"
        width={3024}
        height={2276}
        className="absolute top-20 hidden h-[800px] w-full lg:block"
      />
      <div className="mx-auto mt-52 w-9/12 text-white lg:mt-64 lg:w-7/12">
        <h1 className="text-center text-3xl [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
          About Us
        </h1>
        <p className="mt-14 text-justify text-xs sm:text-sm md:text-base lg:mt-32 lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quasi, atque impedit amet eveniet molestiae earum maiores. Assumenda
          aperiam molestias libero soluta voluptate, fugit corrupti sed ratione
          porro, ullam eos?
        </p>
      </div>
    </div>
  );
}
