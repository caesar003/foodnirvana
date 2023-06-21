import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Router } from "next/router";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(0);

  
  useEffect(() => {});
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-800 p-6">
      <div className="flex gap-2 items-center">
        <p className="capitalize font-bold">Food Nirvana</p>
        <p className="uppercase text-yellow-400 font-bold p-1 px-3 border-2 border-yellow-400 rounded-lg">
          pro
        </p>
      </div>
      <div>
        <ul className="flex gap-2 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <ShoppingCart />
        <span>0</span>
        <button className="capitalize p-4 bg-yellow-400 text-black font-bold rounded-2xl">
          customer login
        </button>
      </div>
    </div>
  );
}
