"use client";
import React from "react";
import { DropDownMobile } from "../DropdownMobile";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="pt-6 pb-4 mx-4">
      <div className="w-full flex justify-center lg:gap-x-4">
        {/* brand name */}
        <Link href={"/"} className="px-6 mr-auto lg:ml-auto lg:mr-0">
          <h3 className="text-2xl font-bold text-primary">
            Vid<span className="text-red-400 italic">lays</span>
          </h3>
        </Link>
        {/* navigation destop */}
        <div className="mx-auto hidden lg:block ">
          <ul className="flex text-xl gap-x-8">
            <Link
              href={"/"}
              className={`${pathname == "/" ? "text-primary" : "text-black"}`}
            >
              Home
            </Link>
            <Link
              href={"/featured"}
              className={`${
                pathname == "/featured" ? "text-primary" : "text-black"
              }`}
            >
              Featured
            </Link>
            <Link
              href={"/subscription"}
              className={`${
                pathname == "/subscription" ? "text-primary" : "text-black"
              }`}
            >
              Subscription
            </Link>
          </ul>
        </div>
        {/* navigation mobile */}
        <div className="mr-10 block lg:hidden">
          <DropDownMobile />
        </div>
      </div>
    </div>
  );
}
