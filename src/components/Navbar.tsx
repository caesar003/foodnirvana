import { useApp } from "@hooks/useApp";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  // @ts-ignore
  const { sidebarShown, setSidebarShown, shoppingCart, setShoppingCart } =
    useApp();
  const paths: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contacts", path: "/contacts" },
    { label: "FAQ", path: "/faq" },
  ];

  const { pathname } = useRouter();

  return (
    <div className="relative mt-8 flex items-center justify-between gap-4 rounded-lg bg-gray-800 px-6 py-5">
      <div className="flex items-center gap-2">
        <p className="font-bold capitalize">Food Nirvana</p>
        <p className="rounded-lg border-2 border-yellow-400 p-1 px-3 text-xs font-bold uppercase text-yellow-400">
          pro
        </p>
      </div>
      <div className="hidden md:block">
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
        <CartDropdown shoppingCart={shoppingCart} />
        <button className="hidden rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold capitalize text-black transition-colors hover:bg-indigo-900 hover:text-yellow-400 md:block">
          customer login
        </button>
        <button className="md:hidden" onClick={() => setSidebarShown(true)}>
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
}
