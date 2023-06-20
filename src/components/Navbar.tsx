import React from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
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
          <li>Home</li>
          <li>Products</li>
          <li>Reviews</li>
          <li>Contacts</li>
          <li>FAQ</li>
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
