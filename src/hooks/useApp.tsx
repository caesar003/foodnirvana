import { CartItemInterface } from "@utils/types";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface AppContextInterface {
  sidebarShown: boolean;
  setSidebarShown: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCart: CartItemInterface[];
  setShoppingCart: React.Dispatch<React.SetStateAction<CartItemInterface[]>>;
}

// @ts-ignore;
const AppContext = createContext<AppContextInterface>();

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
