import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { headers } from "next/headers";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Vidlays",
  description: "vidlays is a video listing web application build by Rezacrown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-accent overflow-x-hidden text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
