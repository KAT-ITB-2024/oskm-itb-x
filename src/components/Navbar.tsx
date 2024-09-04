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
          src="/components/navbar.webp"
          alt="Navbar"
          width={1385}
          height={76}
          className="absolute h-full w-full rounded-full object-cover"
          draggable={false}
        />

        <div className="relative flex h-full items-center justify-between px-6 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center pt-1">
            <Image
              src="/logo/logo.webp"
              alt="Logo"
              width={360}
              height={360}
              className="w-48 lg:w-52"
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
                        ? "underline underline-offset-4 decoration-2 font-bold"
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
                        ? "underline underline-offset-4 decoration-2 font-bold"
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
                        ? "underline underline-offset-4 decoration-2 font-bold"
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
                        ? "underline underline-offset-4 decoration-2 font-bold"
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
                  <Link href={"https://app.oskmitb.com/"}>
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
                  pathname === "/about-us" ? "underline underline-offset-4 decoration-2 font-bold" : ""
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
                    ? "underline underline-offset-4 decoration-2 font-bold"
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
                    ? "underline underline-offset-4 decoration-2 font-bold"
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
                  pathname === "/article" ? "underline underline-offset-4 decoration-2 font-bold" : ""
                }
              >
                Blog
              </Link>
            </li>
            {/* <li>
              <Link href="">ITB-X</Link>
            </li> */}
            <li>
              <Link href="https://app.oskmitb.com/">
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
