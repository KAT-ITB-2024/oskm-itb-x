"use client";

import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { IoMdSearch } from "react-icons/io";

interface Merchandise {
  name: string;
  price: string;
  image: string;
}

export default function MerchandiseList({
  merchandises,
}: {
  merchandises: Merchandise[];
}) {
  const [query, setQuery] = React.useState("");
  const [filteredMerch, setFilteredMerch] = React.useState<Merchandise[]>([]);

  React.useEffect(() => {
    const filtered = merchandises.filter((merch) =>
      merch.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredMerch(filtered);
  }, [merchandises, query]);
  return (
    <div className="relative flex w-full flex-col items-center justify-items-center">
      <h1 className="mb-10 text-center font-mogula text-3xl text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_100%)] sm:text-6xl">
        List of Merchandise
      </h1>
      <div className="z-10 mx-24 mb-10 flex w-2/3 items-center gap-x-4 rounded-md border border-input bg-white px-3 py-3">
        <IoMdSearch className="text-2xl text-gray-400" />
        <input
          type="text"
          placeholder="Cari merchandise di sini..."
          className="w-full bg-transparent font-rem outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="relative flex justify-center sm:mb-32">
        {filteredMerch.length > 0 ? (
          <ul className="z-10 flex flex-row flex-wrap justify-center">
            {filteredMerch.map((item, index) => (
              <li
                key={"merch" + index}
                className="flex flex-col justify-center"
              >
                <div className="relative flex h-[400px] w-[350px] justify-center bg-[url('/components/bubble-2.svg')] bg-cover lg:w-[450px]">
                  <div className="relative flex justify-center text-4xl sm:text-5xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={400}
                      width={400}
                      className="h-auto w-auto"
                      draggable={false}
                    />
                    <h1 className="absolute right-0 top-10 font-mogula font-normal text-[#FFBF51] [text-shadow:_3px_3px_7px_rgb(255_191_81_/_50%)]">
                      {item.name}
                    </h1>
                    <div className="absolute bottom-5 flex flex-col justify-center gap-4">
                      <h1 className="font-mogula text-[#FB43BD] [text-shadow:_3px_3px_14px_rgb(32_41_56_/_100%)]">
                        {item.price}
                      </h1>
                      <div className="flex justify-center">
                        <Button variant={"yellow"} className="font-rem">
                          Buy Now!
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="z-10 mx-12 mb-52 mt-16 flex flex-col items-center gap-4 sm:w-1/2">
            <Image
              src="/components/gurita.webp"
              alt="Item Not Found"
              height={500}
              width={500}
              style={{ width: "160px", height: "auto" }}
              className="sm:mb-14 sm:scale-[2]"
              draggable={false}
            />
            <h1 className="text-center font-mogula text-3xl text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)] sm:text-5xl">
              Pencarian Tidak Ditemukan...
            </h1>
            <p className="text-wrap text-justify font-rem text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)]">
              Oh tidak... Tampaknya kamu mencari sesuatu yang tersembunyi di
              kedalaman. Cobalah kata kunci lain atau kembali ke permukaan untuk
              melanjutkan pencarianmu!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
