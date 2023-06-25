import { CartItem } from "@utils/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// @ts-ignore;
const CartContext = createContext();

export function AppWrapper({ children }: PropsWithChildren) {
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
