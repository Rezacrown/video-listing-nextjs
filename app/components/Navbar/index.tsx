"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar_Mobile_version from "./mobile";

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
        {/* destop navigation */}
        <div className="mx-auto hidden lg:block ">
          <ul className="flex text-xl gap-x-8">
            <Link
              href={"/"}
              className={`${pathname == "/" ? "text-primary" : "text-black"}`}
            >
              Home
            </Link>
            <Link
              href={"/"}
              className={`${
                pathname == "/dashboard" ? "text-primary" : "text-black"
              }`}
            >
              Dashboard
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

            {/* auth button */}
            <div className="flex gap-x-5 ml-20">
              <Button
                type="button"
                variant="outline"
                size={"lg"}
                className="px-6 font-medium outline-primary-foreground outline hover:text-primary duration-300"
              >
                Sign In
              </Button>
              <Button
                type="button"
                size={"lg"}
                variant="destructive"
                className="px-6"
              >
                Log out
              </Button>
            </div>
          </ul>
        </div>
        {/* mobile navigation */}
        <div className="ml-10 block lg:hidden">
          <Navbar_Mobile_version pathname={pathname} />
        </div>
      </div>
    </div>
  );
}
