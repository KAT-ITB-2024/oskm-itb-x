import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { mogula, rem } from "./fonts";
import ComingSoon from "~/components/ComingSoon";

export const metadata = {
  title: "OSKM ITB 2024",
  description: "Created by IT KAT ITB 2024",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rem.className} ${mogula.variable} ${rem.variable} scrollbar-thin scrollbar-track-[#99E0FF] scrollbar-thumb-[#0010A4] scrollbar-thumb-rounded-full`}
    >
      <body className="relative">
        <TRPCReactProvider>
        <Navbar />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
