"use client";
import "../app/globals.css";
import React, { Fragment, PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    // <div className="w-[1030px]">
    //   <div className="w-full">
    //     <Navbar />
    //     <main>{children}</main>
    //   </div>
    // </div>
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <div className="w-[1030px]">
        <Navbar />
        <div>{children}</div>
      </div>
    </main>
  );
}
