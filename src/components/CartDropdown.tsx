import { Menu } from "@headlessui/react";
import { useApp } from "@hooks/useApp";
import { qParams } from "@utils/query-params";
import { CartItemInterface } from "@utils/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDropdown() {
  const { setShoppingCart, shoppingCart } = useApp();
  const maxOrderQty: number = 20;

  const addItemQty = (val: number, id: number) => {
    const _cartItemIdx: number = shoppingCart.findIndex(
      (item) => item.id === id
    );
    const _cartItem: CartItemInterface = { ...shoppingCart[_cartItemIdx] };

    if (_cartItem !== undefined) {
      const newQty: number = _cartItem.qty + val;

      // base cases, results in early exits 
      if (newQty === 0) return removeFromCart(_cartItemIdx);
      if (newQty >= maxOrderQty + 1) return;
      if (_cartItem.item?.stock && newQty > _cartItem.item.stock) return;

      _cartItem.qty = shoppingCart[_cartItemIdx].qty + val;
      const _shoppingCart = [...shoppingCart];
      _shoppingCart[_cartItemIdx] = _cartItem;

      setShoppingCart(_shoppingCart);
    }
  };

  const removeFromCart = (idx: number) => {
    const _shoppingCart = [...shoppingCart];
    _shoppingCart.splice(idx, 1);
    setShoppingCart(_shoppingCart);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2">
        <span className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span>{shoppingCart.length}</span>
        </span>
      </Menu.Button>
      <Menu.Items className="absolute -right-20 z-10 mt-2 w-96 origin-top-right divide-y divide-gray-500 rounded-lg bg-gray-800 py-0.5 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
        {shoppingCart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col">
            <p className="my-2 font-bold">Shopping Cart</p>
            <p className="text-sm">
              Feel free to add/remove your products or continue to the checkout
              to proceed with the purchase
            </p>
            {shoppingCart.map((item, idx) => (
              <CartItem key={idx} item={item} addItemQty={addItemQty} />
            ))}
            <Link
              href={`/checkout?${qParams.encode(shoppingCart)}`}
              className="w-full rounded-xl bg-yellow-400 py-2 text-center font-bold text-black"
            >
              Checkout
            </Link>
          </div>
        )}
      </Menu.Items>
    </Menu>
  );
}

export function EmptyCart() {
  return (
    <Menu.Item>
      <div className="px-3 py-2 text-sm">
        <p>You don&apos;t have any items in your shopping cart yet.</p>
      </div>
    </Menu.Item>
  );
}

export function CartItem({
  item,
  addItemQty,
}: {
  item: CartItemInterface;
  addItemQty: Function;
}) {
  console.log("cartItem", item);
  return (
    <div className="my-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="aspect-video bg-gray-200">
          <Image
            width={85}
            height={15}
            src={`/images/${item?.brand?.imgSrc}`}
            alt={"asap"}
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{item?.brand?.name}</p>
          <p className="text-xs">Quantity: {item.qty}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="aspect-square rounded-lg bg-gray-900 p-1"
          onClick={() => addItemQty(-1, item.id)}
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="aspect-square rounded-lg bg-gray-900 p-1 px-2">
          {item.qty}
        </div>
        <button
          className="aspect-square rounded-lg bg-gray-900 p-1"
          onClick={() => addItemQty(1, item.id)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
