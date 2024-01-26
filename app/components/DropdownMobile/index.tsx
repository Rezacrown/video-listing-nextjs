"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropDownMobile() {
  const pathname = usePathname();

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-5 py-4">
          <HamburgerMenuIcon className="text-primary block text-3xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen h-screen">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <Link href={"/"}>
          <DropdownMenuItem
            className={`mt-4 ${pathname == "/" ? "text-primary" : ""} `}
          >
            Home
          </DropdownMenuItem>
        </Link>
        <Link href={"/feature"}>
          <DropdownMenuItem
            className={`mt-4 ${pathname == "/feature" ? "text-primary" : ""} `}
          >
            Featured
          </DropdownMenuItem>
        </Link>
        <Link href={"/subscription"}>
          <DropdownMenuItem
            className={`mt-4 ${
              pathname == "/subscription" ? "text-primary" : ""
            } `}
          >
            Subscription
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
