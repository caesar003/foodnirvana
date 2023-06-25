import { Menu } from "@headlessui/react";
import { cart } from "@utils/storage";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [shoppingCart, setShoppingCart] = useState<number[]>([]);
  const paths: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contacts", path: "/contacts" },
    { label: "FAQ", path: "/faq" },
  ];

  const { pathname } = useRouter();

  useEffect(() => {
    setShoppingCart(cart.get());
  }, []);

  return (
    <div className="mt-8 flex items-center justify-between rounded-lg bg-gray-800 px-6 py-4">
      <div className="flex items-center gap-2">
        <p className="font-bold capitalize">Food Nirvana</p>
        <p className="rounded-lg border-2 border-yellow-400 p-1 px-3 text-xs font-bold uppercase text-yellow-400">
          pro
        </p>
      </div>
      <div>
        <ul className="flex items-center gap-1">
          {paths.map(({ label, path }) => (
            <li key={label}>
              <Link
                className={twMerge(
                  "rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black",
                  pathname === path ? "bg-yellow-400 text-black" : " "
                )}
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2">
            <span className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span>{shoppingCart.length}</span>
            </span>
          </Menu.Button>
          <Menu.Items className="absolute -right-20 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-500 rounded-sm bg-gray-800 py-0.5 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <div className="p-2">
                <p className="my-2 font-bold">Shopping Cart</p>
                <p className="text-sm">
                  Feel free to add/remove your products or continue to the
                  checkout to proceed with the purchase
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="aspect-video bg-gray-200">
                      <Image
                        width={85}
                        height={15}
                        src={"/images/asap.jpeg"}
                        alt={"asap"}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Krispy Kreme</p>
                      <p className="text-xs">Quantity: 1</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="aspect-square rounded-lg bg-gray-900 p-1">
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="aspect-square rounded-lg bg-gray-900 p-1 px-2">
                      1
                    </div>
                    <button className="aspect-square rounded-lg bg-gray-900 p-1">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Menu.Item>
            {/* <Menu.Item>
              <p>world</p>
            </Menu.Item> */}
          </Menu.Items>
        </Menu>
        <button className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold capitalize text-black">
          customer login
        </button>
      </div>
    </div>
  );
}
