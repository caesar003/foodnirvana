import { CartItemInterface } from "@utils/types";
import React from "react";

export interface AppContextType {
  sidebarShown: boolean;
  setSidebarShown: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCart: CartItemInterface[];
  setShoppingCart: React.Dispatch<React.SetStateAction<CartItemInterface[]>>;
};

// @ts-ignore;
const AppContext = React.createContext<AppContextType>();
export { AppContext };
