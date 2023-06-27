import React from "react";
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";
import { useApp } from "@hooks/useApp";
import CartDropdown from "./CartDropdown";
import { paths } from "@utils/paths";
import Link from "next/link";

export default function NavbarCollapse() {
  const { sidebarShown, setSidebarShown } = useApp();
  return (
    <div
      className={twMerge(
        "fixed right-0 top-0 z-10 flex h-screen w-[320px] flex-col bg-gray-800 transition-all duration-300 md:hidden",
        sidebarShown ? " " : "hidden"
      )}
    >
      <div className="flex items-center justify-end gap-4 p-4">
        <CartDropdown />
        <button onClick={() => setSidebarShown(false)}>
          <X size={24} />
        </button>
      </div>

      <div>
        <ul className="p-4 font-bold">
          {paths.map(({label, path}) => (
            <li key={label} className="my-2 text-sm">
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <button className="mx-2 p-2 bg-yellow-400 text-black hover:bg-indigo-950 hover:text-yellow-400 rounded-xl font-bold capitalize">
          customer login
        </button>
      </div>
    </div>
  );
}
