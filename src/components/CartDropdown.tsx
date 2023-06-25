import { Menu } from "@headlessui/react";
import { CartItem } from "@utils/types";
import { brands, products } from "@utils/default-values";
import { ShoppingCart } from "lucide-react";

export default function CartDropdown({
  shoppingCart,
}: {
  shoppingCart: CartItem[];
}) {
  // const [] = products
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2">
        <span>
          <ShoppingCart className="h-5 w-5" />
          <span>{shoppingCart.length}</span>
        </span>
      </Menu.Button>
      <Menu.Items className="">
        <Menu.Item></Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
