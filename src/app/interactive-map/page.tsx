import ITBMapLibre from "./components/open-source-components/ITBMapLibre";

export const metadata = {
  title: "Interactive Map",
  description: "Interactive Map OSKM ITB 2024",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

export default async function Page() {
  return <ITBMapLibre />;
}
