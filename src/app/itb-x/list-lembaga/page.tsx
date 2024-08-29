import React from "react";
import HmpsBso from "./hmps-bso/HmpsBso";
import UkmPage from "./ukm/UkmPage";

function Page() {
  return (
    <div className="bg-[url('/itb-x/bg-itbx.png')] bg-cover bg-center pt-24 font-mogula md:pt-[110px] lg:pt-[130px]">
      <UkmPage />
    </div>
  );
}

export default Page;
