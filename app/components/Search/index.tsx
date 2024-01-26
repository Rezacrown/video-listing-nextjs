import { Input } from "@/components/ui/input";
import React from "react";

export default function Search() {
  return (
    <div className="flex mx-auto ">
      <Input
        type="text"
        name="search"
        placeholder="Search Video.."
        autoComplete={"off"}
        className="outline-primary py-6 px-10 rounded-md text-black border border-primary"
      />
    </div>
  );
}
