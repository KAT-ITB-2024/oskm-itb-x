"use client";

import { useRouter } from "next/navigation";
import React from "react";
import RumpunUkm from "../../components/RumpunUkm";

import { type UKM } from "~/app/itb-x/data/data_lembaga";
import {
  ukmAgama,
  ukmKajian,
  ukmMedia,
  ukmOlahragaKesehatan,
  ukmPendidikan,
  ukmSeniBudaya,
} from "~/app/itb-x/data/data_lembaga";

function Page({ params }: { params: { rumpun: string } }) {
  const { rumpun } = params;
  const router = useRouter();
  if (!rumpun) {
    router.push("/itb-x/list-lembaga/ukm");
  }

  let data: UKM[] = [];
  switch (rumpun) {
    case "agama":
      data = ukmAgama;
      break;
    case "pendidikan":
      data = ukmPendidikan;
      break;
    case "kajian":
      data = ukmKajian;
      break;
    case "media":
      data = ukmMedia;
      break;
    case "olahraga-kesehatan":
      data = ukmOlahragaKesehatan;
      break;
    case "seni-budaya":
      data = ukmSeniBudaya;
      break;
    default:
      router.push("/itb-x/list-lembaga/ukm");
  }

  return <RumpunUkm nama_rumpun={rumpun} data={data} />;
}

export default Page;
