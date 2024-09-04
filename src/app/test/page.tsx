import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-300">
      {/* Contoh pemakaian button, tambahkan styling sesuai kebutuhan */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Buttons</h1>
        <div className="flex flex-wrap gap-4">
          <Button variant={"pink"}>Open</Button>
          <Button variant={"pinkoutline"}>Download Guidebook</Button>
          <Link href={"https://app.oskmitb.com/"}>
            <Button variant={"yellow"}>OceanLog</Button>
          </Link>
          <Button variant={"merchgreen"}>Ganesha Goods &gt;</Button>
          <Button variant={"merchyellow"}>Order Now &gt;</Button>
          <Button variant={"merchpink"}>@ganeshagoods &gt;</Button>
        </div>
      </div>
    </main>
  );
}

export default Page;
