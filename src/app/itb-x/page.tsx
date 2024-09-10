import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import dynamic from "next/dynamic";

export const metadata = {
  title: "ITB - X",
  description: "ITB - X",
  icons: [{ rel: "icon", url: "/logo/logo.png" }],
};

const Countdown = dynamic(() => import("../(landing)/component/Countdown"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="min-h-screen bg-[url('/itb-x/bg-itbx.png')] bg-cover bg-center pb-40 pt-20">
      <div className="mx-8 mt-20 flex flex-col items-center justify-center gap-y-32  text-blue-800 lg:mx-16 xl:mx-24">
        {/* ITB Showcase */}
        <div className="flex flex-col items-center">
          <Image
            src="/itb-x/logo_itbx.png"
            alt="itb-showcase"
            width={300}
            height={300}
            draggable={false}
          />
          <h1 className="font-mogula text-4xl lg:text-7xl">ITB Expo</h1>
          <Countdown targetDate="2024-09-14T09:00:00" isItbX />
          <div className="w-full max-w-4xl">
            <p className="text-center font-rem font-medium text-blue-900 lg:text-lg">
              ITB-x atau ITB Expo merupakan acara penutup dari rangkaian
              kegiatan Kaderisasi Awal Terpusat (KAT) ITB 2024 yang akan
              dilaksanakan pada tanggal 14 September 2024 secara luring
              (offline) di ITB Kampus Jatinangor. ITB-x bertujuan untuk
              memfasilitasi mahasiswa baru dalam melakukan eksplorasi
              lembaga-lembaga, yaitu Unit Kegiatan Mahasiswa (UKM), Himpunan
              Mahasiswa Program Studi (HMPS), Badan Semi Otonom (BSO), dan
              elemen lainnya di dalam Keluarga Mahasiswa (KM) ITB. Dalam
              mencapai tujuan tersebut, terdapat beberapa mata acara yang akan
              diadakan pada kegiatan ini, yaitu Pameran Lembaga, Parade, ITB’s
              Got Talent 2024, dan Closing Concert. Pada rangkaian KAT
              sebelumnya, ITB-x disebut dengan OHU, namun tahun ini ITB-x hadir
              dengan lebih inklusif dengan menghadirkan paguyuban, HMJ, dan
              lembaga kemahasiswaan lain di ITB.
            </p>
          </div>
        </div>

        {/* UKM */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo_ukm.png"
            alt="ukm"
            width={400}
            height={400}
            draggable={false}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl text-center">
            Unit Kegiatan Mahasiswa (UKM)
          </h1>
          <div className="w-full max-w-4xl">
            <p className="text-center font-rem lg:text-lg">
              UKM atau Unit Kegiatan Mahasiswa adalah lembaga kemahasiswaan yang
              keanggotaannya didasari dari kesamaan minat, kegemaran,
              kreativitas, atau penyaluran aktivitas di luar kegiatan akademik.
              Berdasarkan bidang aktivitasnya, UKM diklasifikasikan menjadi 6
              rumpun. Terdapat rumpun Agama, Pendidikan, Kajian, Media, Seni
              Budaya, dan Olahraga & Kesehatan. Terdapat juga lembaga
              kemahasiswaan yang termasuk dalam Badan Semi Otonom.
            </p>
          </div>
          <Button variant={"pink"} className="font-rem lg:text-lg">
            <Link href="/itb-x/list-lembaga/ukm">Explore Now!</Link>
          </Button>
        </div>

        {/* HMJ */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo_hmps.png"
            alt="hmj"
            width={400}
            height={400}
            draggable={false}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl text-center">
            Himpunan Mahasiswa Program Studi (HMPS)
          </h1>
          <div className="w-full max-w-4xl">
            <p className="text-center font-rem lg:text-lg">
              HMPS, singkatan dari Himpunan Mahasiswa Program Studi, merupakan
              organisasi kemahasiswaan program studi yang merupakan badan
              kelengkapan dari KM ITB di tingkat prodi. Keanggotaan HMPS adalah
              mahasiswa S1 yang berada di dalam bidang keilmuan (program studi)
              yang sama. HMPS adalah organisasi resmi di bawah Program Studi
              sehingga HMPS mewadahi anggota dengan kegiatan yang memenuhi
              kebutuhan anggotanya. Himpunan Mahasiswa Program Studi menjadi
              media bagi anggotanya untuk mengembangkan pola pikir dan
              kepribadian yang berkaitan dengan disiplin ilmunya agar siap
              terjun ke masyarakat.
            </p>
          </div>
          <Button variant={"pink"} className="font-rem lg:text-lg">
            <Link href="/itb-x/list-lembaga/hmps-bso">Explore Now!</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
