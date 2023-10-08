"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] gap-10">
      <img
        src={"/hero.svg"}
        alt="hero img"
        className="absolute -z-10 md:top-14 rotate-90 md:left-52 top-72 left-32  md:w-[600px] md:h-[600px] w-[200px] h-[200px]"
      />
      <h1 className="font-bold md:text-7xl text-2xl ">
        Get started with <br /> your Web 3 Journey
        <br /> with Web 3 UI
      </h1>

      <Link
        href="/docs"
        className="bg-blue-500 px-4 py-6 font-bold text-xl rounded-lg"
      >
        View Docs
      </Link>
    </div>
  );
}
