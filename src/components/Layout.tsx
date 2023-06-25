"use client";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import "../app/globals.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { CartItemInterface } from "@utils/types";
import { cart } from "@utils/storage";

export default function Layout({ children }: PropsWithChildren) {
  const [shoppingCart, setShoppingCart] = useState<CartItemInterface[]>([]);
  useEffect(() => {
    setShoppingCart(cart.get());
  }, []);
  return (
    <main className="mx-auto min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-6 sm:px-6">
      <Fragment>
        <Banner />
        {/* @ts-ignore */}
        <Navbar shoppingCart={shoppingCart} />
        <>{children}</>
      </Fragment>
    </main>
  );
}
