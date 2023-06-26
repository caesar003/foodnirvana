import React, { useState } from "react";
import type { AppProps } from "next/app";
import { CartItemInterface } from "@utils/types";
import { AppContext } from "@hooks/context";

export default function App({ Component, pageProps }: AppProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItemInterface[]>([]);
  const [sidebarShown, setSidebarShown] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{ setShoppingCart, setSidebarShown, shoppingCart, sidebarShown }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
