import { CardItems } from "@/app/components/CardItems";
import React from "react";

export default async function CategoryVideoPage({
  params,
}: {
  params: { categoryVideo: string };
}) {
  const cards = Array.from({ length: 5 }, (_, idx) => idx + 1);

  return (
    <div className="py-20">
      <div className="w-full ">
        <div className="mt-6 mb-10 ml-4 md:ml-8">
          <h3 className="font-semibold text-xl sm:text-2xl text-accent-foreground">
            Category: {params.categoryVideo}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:mx-8">
          {cards.map((iem, idx) => {
            return (
              <CardItems
                key={idx}
                className={`row-span-12 sm:row-span-6 md:row-span-4 lg:row-span-3 mx-8 md:mx-4 lg:mx-0`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
