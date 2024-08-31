"use client";

import { useRouter } from "next/navigation";
import React from "react";
import RumpunUkm from "../../components/RumpunUkm";

function Page({ params }: { params: { rumpun: string } }) {
  const { rumpun } = params;
  const router = useRouter();
  if (!rumpun) {
    router.push("/itb-x/list-lembaga/ukm");
  }

  // Generate temp data
  const tempData = [];
  for (let i = 0; i < 15; i++) {
    const newData = {
      nama_lembaga: `Unit ${i}`,
    };
    tempData.push(newData);
  }
  return <RumpunUkm nama_rumpun={rumpun} data={tempData} />;
}

export default Page;
