import { useContext } from "react";
import { AppContext } from "./context";

function useApp() {
  const { setShoppingCart, setSidebarShown, shoppingCart, sidebarShown } =
    useContext(AppContext);
  return { shoppingCart, setShoppingCart, setSidebarShown, sidebarShown };
}

export { useApp };
