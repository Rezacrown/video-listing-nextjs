"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export default function Navbar_Mobile_version({
  pathname = "/",
}: {
  pathname: string;
}) {
  return (
    <div className="mr-10 block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon
            className="mx-2 text-black"
            height={30}
            width={30}
          />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Your Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>

          <div className="grid gap-y-6 gap-x-5 py-8">
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
          </div>

          <SheetFooter className="flex flex-col gap-y-4">
            <Button
              type="button"
              variant="outline"
              size={"lg"}
              className="px-6 font-medium outline-primary-foreground outline hover:text-primary duration-300"
            >
              Sign In
            </Button>

            <SheetClose asChild>
              <Button type="submit">Log out</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
