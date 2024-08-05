"use client";

import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

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
      <h1 className="text-center text-6xl text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_100%)]">
        List of Merchandise
      </h1>
      <div className="mx-24 my-10 flex w-2/3 items-center gap-x-4 rounded-md border border-input bg-white px-3 py-3">
        <input
          type="text"
          placeholder="Cari merchandise di sini..."
          className="w-full bg-transparent outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mb-32 flex justify-center">
        {filteredMerch.length > 0 ? (
          <ul className="flex flex-row flex-wrap justify-center">
            {filteredMerch.map((item, index) => (
              <>
                <li
                  key={"merch" + index}
                  className="flex flex-col justify-center"
                >
                  <div className="relative flex h-[400px] w-[450px] justify-center bg-[url('/components/bubble-2.svg')] bg-cover">
                    <div className="relative flex justify-center">
                      <Image
                        src="/components/kaos-putih.svg"
                        alt="Merchandise Card"
                        layout="contain"
                        width={270}
                        height={270}
                      />
                      <h1 className="absolute right-0 top-10 text-5xl font-normal text-[#FFBF51] [text-shadow:_4px_6px_50px_rgb(255_191_81_/_100%)]">
                        {item.name}
                      </h1>
                      <div className="absolute bottom-5 flex flex-col justify-center gap-4">
                        <h1 className="text-6xl text-[#FB43BD] [text-shadow:_4px_4px_20px_rgb(32_41_56_/_75%)]">
                          {item.price}
                        </h1>
                        <div className="flex justify-center">
                          <Button variant={"yellow"}>Buy Now!</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        ) : (
          <div className="mb-64 mt-16 flex w-1/2 flex-col items-center gap-4">
            <Image
              src="/components/gurita.svg"
              alt="Item Not Found"
              width={322}
              height={322}
            />
            <h1 className="text-center text-5xl text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)]">
              Pencarian Tidak Ditemukan...
            </h1>
            <p className="text-wrap text-justify text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)]">
              Oh tidak... Tampaknya kamu mencari sesuatu yang tersembunyi di
              kedalaman. Cobalah kata kunci lain atau kembali ke permukaan untuk
              melanjutkan pencarianmu!
            </p>
          </div>
        )}
      </div>
      <Image
        src="/components/corall.svg"
        className="absolute bottom-0 left-0 translate-y-24"
        alt="Ubur"
        width={500}
        height={400}
      />
      <Image
        src="/components/corall.svg"
        className="absolute bottom-0 right-0 translate-y-24 -scale-x-100"
        alt="Ubur"
        width={500}
        height={400}
      />
    </div>
  );
}
