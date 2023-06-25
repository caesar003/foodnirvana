import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {});
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
          <li>
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
              href="/reviews"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
              href="/contacts"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
              href="/faq"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button type="button" className="flex items-center gap-1">
          <ShoppingCart />
          <span>0</span>
        </button>
        <button className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold capitalize text-black">
          customer login
        </button>
      </div>
    </div>
  );
}
