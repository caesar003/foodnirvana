"use client";
import { PropsWithChildren } from "react";
import "../app/globals.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-6 sm:px-6">
      <Banner />
      <Navbar />
      <>{children}</>
    </main>
  );
}
