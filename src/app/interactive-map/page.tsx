import ITBMapLibre from "./components/open-source-components/ITBMapLibre";

export const metadata = {
  title: "Interactive Map",
  description: "Interactive Map OSKM ITB 2024",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default async function Page() {
  return (
    <div className="relative min-h-screen bg-[url('/itb-x/bg-itbx.png')] px-2 pb-10 pt-28 md:px-20 md:pb-20 md:pt-36">
      <h1 className="text-center font-mogula text-3xl text-white [text-shadow:4px_4px_10px_#0CEBCCBF] lg:text-5xl">
        Interactive Map
      </h1>
      <div className="h-[90vh] w-full overflow-hidden rounded-xl mt-5 relative">
        <ITBMapLibre />
      </div>
    </div>
  );
}
