import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import VideoPlayer from "../VideoPlayer";

export function CardItems({ className }: { className?: string }) {
  return (
    <Card
      className={`${className} flex justify-center p-2 items-center shadow-md border shadow-[red]`}
    >
      {/* <VideoPlayer
        height={"100%"}
        widht={"100%"}
        url={"https://youtu.be/1MqozxAvmsc?si=NG-hwBiQlt3vVfY_"}
      /> */}
      <Image
        src={
          "https://th.bing.com/th/id/OIP.MnXgjCyAoAtfjgBBIa627QHaE7?rs=1&pid=ImgDetMain"
        }
        alt=""
        width={100}
        height={100}
        className="w-full"
      />
    </Card>
  );
}
