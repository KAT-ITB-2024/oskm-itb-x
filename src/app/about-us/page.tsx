import About from "./components/About";
import HistoryCarousel from "./components/HistoryCarousel";
import VisiMisi from "./components/VisiMisi";

export const metadata = {
  title: "About Us",
  description: "About Us",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-[url('/about-us/bg-about-us.png')] bg-cover">
      <div className="flex min-h-screen w-full flex-col">
        <About />
        <VisiMisi />
        <HistoryCarousel />
      </div>
    </div>
  );
}
