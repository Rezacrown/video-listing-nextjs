"use client";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  url,
  height,
  widht,
}: {
  url: string;
  widht: string | number;
  height: string | number;
}) {
  return <ReactPlayer url={url} height={height} width={widht} controls muted />;
}
