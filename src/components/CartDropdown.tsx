import { Menu } from "@headlessui/react";
import { CartItemInterface, ProductInterface } from "@utils/types";
import { brands, products } from "@utils/default-values";
import { ChevronDownSquare, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartDropdown({
  shoppingCart,
}: {
  shoppingCart: CartItemInterface[];
}) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2">
        <span className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span>{shoppingCart.length}</span>
        </span>
      </Menu.Button>
      <Menu.Items className="absolute -right-20 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-500 rounded-sm bg-gray-800 py-0.5 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
        {shoppingCart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="p-2">
            <p className="my-2 font-bold">Shopping Cart</p>
            <p className="text-sm">
              Feel free to add/remove your products or continue to the checkout
              to proceed with the purchase
            </p>
            {shoppingCart.map((item, idx) => (
              <CartItem key={idx} item={item} />
            ))}
          </div>
        )}
      </Menu.Items>
    </Menu>
  );
}

export function EmptyCart() {
  return (
    <Menu.Item>
      <p>You don&apos;t have any items in your shopping cart yet.</p>
    </Menu.Item>
  );
}

export function CartItem({ item }: { item: CartItemInterface }) {
  return (
    <div className="my-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="aspect-video bg-gray-200">
          <Image
            width={85}
            height={15}
            src={`/images/${item.brand.imgSrc}`}
            alt={"asap"}
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{item.brand.name}</p>
          <p className="text-xs">Quantity: 1</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="aspect-square rounded-lg bg-gray-900 p-1">
          <Minus className="h-4 w-4" />
        </button>
        <div className="aspect-square rounded-lg bg-gray-900 p-1 px-2">
          {item.qty}
        </div>
        <button className="aspect-square rounded-lg bg-gray-900 p-1">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
