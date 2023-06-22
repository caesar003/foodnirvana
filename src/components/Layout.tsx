"use client";
import "../app/globals.css";
import React, { Fragment, PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex items-start justify-center">
      <div className="w-[1030px] min-h-screen flex-col justify-center items-center p-10">
        <Navbar />
        <>{children}</>
      </div>
    </main>
  );
}
