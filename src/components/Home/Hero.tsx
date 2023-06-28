import React from "react";
import Link from "next/link";
import { Send, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-12 py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="my-2 text-6xl font-bold">Food Nirvana</h1>
        <p className="my-2 text-2xl text-gray-500">Hungry? Spend less!</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Link
          href="/products"
          className="rounded-lg bg-yellow-400 p-2 px-8 font-bold uppercase text-black transition-colors hover:bg-indigo-900 hover:text-white"
        >
          buy now
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-gray-800 p-2 px-8 font-bold text-white transition-colors hover:bg-white hover:text-black"
        >
          <Send className="h-5 w-5" /> <span>Telegram</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              857
            </p>
            <p className="text-lg capitalize">product sold</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              363
            </p>
            <p>customers </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              <span>5.00</span>
              <Star className="h-5 w-5" />
            </p>
            <p className="capitalize">trusted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
