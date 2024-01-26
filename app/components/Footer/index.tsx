import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="px-10 md:mx-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
        {/*  */}
        <div className="flex flex-col gap-x-5 gap-y-3 text-lg row-span-3">
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Contack
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Term & Policy
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-col gap-x-5 gap-y-3 text-lg row-span-3">
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Contack
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Term & Policy
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-col gap-x-5 gap-y-3 text-lg row-span-3">
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Contack
          </Link>
          <Link
            href={"#"}
            className="font-medium text-black hover:text-primary duration-200"
          >
            Term & Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
