import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/itb-x/bg-itbx.png')] bg-cover bg-center pb-6 pt-24 font-mogula md:pt-[110px] lg:pt-[130px]">
      {children}
    </div>
  );
}

export default Layout;
