"use client";
import { PropsWithChildren } from "react";
import "../app/globals.css";
import Link from "next/link";
import SellpassLogo from "./SellpassLogo";

export default function CheckoutLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex items-start justify-center">
      <div className="min-h-screen w-[1030px] flex-col items-center justify-center p-10">
        <div className="flex items-center justify-center rounded-lg bg-gray-900 p-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold capitalize">Food Nirvana</p>
              <p className="rounded-lg border-2 border-yellow-400 p-1 px-3 text-xs font-bold uppercase text-yellow-400">
                pro
              </p>
            </div>
          </Link>
        </div>

        <div className="flex-1">{children}</div>
        <div className="mt-6 flex justify-center gap-2">
          <SellpassLogo title="Secured by" />
        </div>
      </div>
    </main>
  );
}
