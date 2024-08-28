"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="absolute z-50 w-full p-4">
      <nav className="relative h-16 rounded-full lg:h-[76px]">
        <Image
          src="/components/navbar.png"
          alt="Navbar"
          width={1385}
          height={76}
          className="absolute h-full w-full rounded-full object-cover"
          draggable={false}
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
              draggable={false}
            />
            <Image
              src="/logo/title.png"
              alt="Title"
              width={360}
              height={360}
              className="w-28"
              draggable={false}
            />
          </Link>

          {/* Navigations Mobile */}
          <Sheet>
            <SheetTrigger className="flex lg:hidden">
              <Menu className="size-10 text-[#0010A4]" />
            </SheetTrigger>
            <SheetContent className="py-16">
              <ul className="flex flex-col items-center gap-8 font-rem text-[#0010A4]">
                <li>
                  <Link
                    href="about-us"
                    className={
                      pathname === "/about-us"
                        ? "underline underline-offset-4"
                        : ""
                    }
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="merchandise"
                    className={
                      pathname === "/merchandise"
                        ? "underline underline-offset-4"
                        : ""
                    }
                  >
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link
                    href="interactive-map"
                    className={
                      pathname === "/interactive-map"
                        ? "underline underline-offset-4"
                        : ""
                    }
                  >
                    Interactive Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="article"
                    className={
                      pathname === "/article"
                        ? "underline underline-offset-4"
                        : ""
                    }
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="">ITB-X</Link>
                </li>
                <li>
                  <Link href="">
                    <Button variant="yellow" className="font-rem">OceanLog</Button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>

          {/* Navigations Desktop */}
          <ul className="hidden items-center gap-8 font-rem text-[#0010A4] lg:flex xl:gap-12">
            <li>
              <Link
                href="about-us"
                className={
                  pathname === "/about-us" ? "underline underline-offset-4" : ""
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="merchandise"
                className={
                  pathname === "/merchandise"
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                Merchandise
              </Link>
            </li>
            <li>
              <Link
                href="interactive-map"
                className={
                  pathname === "/interactive-map"
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                Interactive Map
              </Link>
            </li>
            <li>
              <Link
                href="article"
                className={
                  pathname === "/article" ? "underline underline-offset-4" : ""
                }
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="">ITB-X</Link>
            </li>
            <li>
              <Link href="">
                <Button variant="yellow" className="font-rem">OceanLog</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
