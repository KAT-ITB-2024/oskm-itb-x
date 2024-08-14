import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="absolute w-full p-4">
      <nav className="relative h-16 rounded-full lg:h-[76px]">
        <Image
          src="/components/navbar.png"
          alt="Navbar"
          width={1385}
          height={76}
          className="absolute h-full w-full rounded-full object-cover"
        />

        <div className="relative flex h-full items-center justify-between px-6 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={360}
              height={360}
              className="size-16"
            />
            <Image
              src="/logo/title.png"
              alt="Title"
              width={360}
              height={360}
              className="w-28"
            />
          </Link>

          {/* Navigations Mobile */}
          <Sheet>
            <SheetTrigger className="flex lg:hidden">
              <Menu className="size-10 text-[#0010A4]" />
            </SheetTrigger>
            <SheetContent className="py-16">
              <ul className="flex flex-col items-center gap-8 text-[#0010A4]">
                <li>
                  <Link href="about-us">About Us</Link>
                </li>
                <li>
                  <Link href="merchandise">Merchandise</Link>
                </li>
                <li>
                  <Link href="interactive-map">Interactive Map</Link>
                </li>
                <li>
                  <Link href="article">Blog</Link>
                </li>
                <li>
                  <Link href="">ITB-X</Link>
                </li>
                <li>
                  <Link href="">
                    <Button variant="yellow">OceanLog</Button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>

          {/* Navigations Desktop */}
          <ul className="hidden items-center gap-8 text-[#0010A4] lg:flex xl:gap-12">
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="merchandise">Merchandise</Link>
            </li>
            <li>
              <Link href="interactive-map">Interactive Map</Link>
            </li>
            <li>
              <Link href="article">Blog</Link>
            </li>
            <li>
              <Link href="">ITB-X</Link>
            </li>
            <li>
              <Link href="">
                <Button variant="yellow">OceanLog</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
