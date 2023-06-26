"use client";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import "../app/globals.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import NavbarCollapse from "./NavbarCollapse";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="relative mx-auto min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-6 sm:px-6">
      <Fragment>
        <NavbarCollapse />
        <Banner />
        <Navbar />
        <>{children}</>
      </Fragment>
    </main>
  );
}
