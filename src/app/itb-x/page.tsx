import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-[url('/itb-x/bg-itbx.png')] bg-cover bg-center py-20">
      <div className="mx-8 mt-20 flex flex-col items-center justify-center gap-y-32 text-white lg:mx-16 xl:mx-24">
        {/* ITB Showcase */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo-itbx.png"
            alt="itb-showcase"
            width={200}
            height={200}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl">ITB SHOWCASE</h1>
          <p className="text-center font-rem lg:text-lg">
            Deskripsi itb showcase Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fusce orci leo, accumsan eget fringilla eget,
            fermentum a massa. Suspendisse potenti. Aliquam lacinia justo elit,
            eu malesuada quam blandit nec. Nunc tincidunt placerat felis, sit
            amet bibendum massa ullamcorper vel. Cras consequat leo ut pharetra
            egestas. Nulla et consectetur orci. Mauris vel tincidunt neque,
            vitae placerat augue. Aliquam quis massa arcu. Suspendisse
            consectetur, quam vitae vehicula luctus, sapien lorem consectetur
            risus, a placerat justo mauris quis ex. Aliquam est odio, tempor id
            pharetra scelerisque, elementum sed ante.
          </p>
        </div>

        {/* UKM */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo-itbx.png"
            alt="ukm"
            width={200}
            height={200}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl">
            Unit Kegiatan Mahasiswa (UKM)
          </h1>
          <p className="text-center font-rem lg:text-lg">
            Deskripsi ukm Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce orci leo, accumsan eget fringilla eget, fermentum a
            massa. Suspendisse potenti. Aliquam lacinia justo elit, eu malesuada
            quam blandit nec. Nunc tincidunt placerat felis, sit amet bibendum
            massa ullamcorper vel. Cras consequat leo ut pharetra egestas. Nulla
            et consectetur orci. Mauris vel tincidunt neque, vitae placerat
            augue. Aliquam quis massa arcu. Suspendisse consectetur, quam vitae
            vehicula luctus, sapien lorem consectetur risus, a placerat justo
            mauris quis ex. Aliquam est odio, tempor id pharetra scelerisque,
            elementum sed ante.
          </p>
          <Button variant={"pink"} className="font-rem lg:text-lg">
            Explore Now!
          </Button>
        </div>

        {/* BSO */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo-itbx.png"
            alt="bso"
            width={200}
            height={200}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl">
            Badan Semi Otonom (BSO)
          </h1>
          <p className="text-center font-rem lg:text-lg">
            Deskripsi bso Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce orci leo, accumsan eget fringilla eget, fermentum a
            massa. Suspendisse potenti. Aliquam lacinia justo elit, eu malesuada
            quam blandit nec. Nunc tincidunt placerat felis, sit amet bibendum
            massa ullamcorper vel. Cras consequat leo ut pharetra egestas. Nulla
            et consectetur orci. Mauris vel tincidunt neque, vitae placerat
            augue. Aliquam quis massa arcu. Suspendisse consectetur, quam vitae
            vehicula luctus, sapien lorem consectetur risus, a placerat justo
            mauris quis ex. Aliquam est odio, tempor id pharetra scelerisque,
            elementum sed ante.
          </p>
          <Button variant={"pink"} className="font-rem lg:text-lg">
            Explore Now!
          </Button>
        </div>

        {/* HMJ */}
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src="/itb-x/logo-itbx.png"
            alt="hmj"
            width={200}
            height={200}
          />
          <h1 className="font-mogula text-3xl lg:text-4xl">
            Himpunan Mahasiswa Jurusan (HMJ)
          </h1>
          <p className="text-center font-rem lg:text-lg">
            Deskripsi hmj Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce orci leo, accumsan eget fringilla eget, fermentum a
            massa. Suspendisse potenti. Aliquam lacinia justo elit, eu malesuada
            quam blandit nec. Nunc tincidunt placerat felis, sit amet bibendum
            massa ullamcorper vel. Cras consequat leo ut pharetra egestas. Nulla
            et consectetur orci. Mauris vel tincidunt neque, vitae placerat
            augue. Aliquam quis massa arcu. Suspendisse consectetur, quam vitae
            vehicula luctus, sapien lorem consectetur risus, a placerat justo
            mauris quis ex. Aliquam est odio, tempor id pharetra scelerisque,
            elementum sed ante.
          </p>
          <Button variant={"pink"} className="font-rem lg:text-lg">
            Explore Now!
          </Button>
        </div>
      </div>
    </main>
  );
}
