import { CartItemInterface } from "@utils/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// @ts-ignore;
const AppContext = createContext();

export function AppWrapper({ children }: PropsWithChildren) {
  const [shoppingCart, setShoppingCart] = useState<CartItemInterface[]>([]);
  const [sidebarShown, setSidebarShown] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{ shoppingCart, setShoppingCart, sidebarShown, setSidebarShown }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
