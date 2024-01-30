import Search from "./components/Search";
import { CardItems } from "./components/CardItems";
import Link from "next/link";

const data = [
  {
    url: "https://youtu.be/1MqozxAvmsc?si=NG-hwBiQlt3vVfY_",
    thumbnail: "",
  },
];

export default function Home() {
  const cards = Array.from({ length: 5 }, (_, idx) => idx + 1);

  return (
    <div className="my-10">
      <div className="flex flex-col gap-y-10">
        <div className="text-center px-5 lg:px-0 mt-6">
          <h3 className="font-semibold text-2xl lg:text-4xl text-purple-900">
            Welcome To Vidlays,
            <div className="text-black">
              Search Video we listing For yourself{" "}
            </div>
          </h3>
        </div>
        {/* search input */}
        <div className="flex justify-center items-center mt-6">
          <Search />
        </div>

        {/* category badges */}
        <div className="flex justify-center gap-x-4 overflow-x-scroll pb-10 pt-6 mx-6">
          {[1, 2, 3, 4, 5, 1, 1].map((_, idx) => {
            return (
              <Link
                href={`/category/${"category-" + String(idx + 1)}`}
                key={idx}
                className="border p-3 text-lg lg:text-xl rounded-xl border-primary mb-6"
              >
                category {idx + 1}
              </Link>
            );
          })}
        </div>

        {/* card items */}
        <div className="w-full ">
          <div className="mt-6 mb-10 ml-4 md:ml-8">
            <h3 className="font-semibold text-xl sm:text-2xl text-accent-foreground">
              The Most Trending Video
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
    </div>
  );
}
