import { ProductInterface } from "@utils/types";
import { Check, Minus, Plus, X, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PropsInterface {
  totalPrice: number;
  pageProducts: ProductInterface[];
  selectedItem: number;
  addQty: Function;
  qty: number;
  setQty: Function;
}

export default function OrderDetailCard(props: PropsInterface) {
  const { addQty, totalPrice, pageProducts, selectedItem, setQty, qty } = props;
  return (
    pageProducts ? (
      
    <div className="bg-gray-800 flex flex-col p-6 rounded-xl my-2 border border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <p>Price</p>
        <p className="font-bold text-4xl">$ {totalPrice?.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between my-3">
        <p>Delivery Time</p>
        <p className="flex gap-2">
          <Zap className="h-6 w-6 text-yellow-400" /> <span>Instant</span>
        </p>
      </div>
      <div className="flex items-center justify-between my-3">
        <p>In Stock</p>
        <p className="flex gap-2">
          {pageProducts[selectedItem]?.stock ? (
            <Check className="h-6 w-6 text-yellow-400" />
          ) : (
            <X className="h-6 w-6 text-yellow-400" />
          )}
          <span>{pageProducts[selectedItem]?.stock}</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-2 my-3">
        <p className="w-1/2">Quantity</p>
        <div className="w-1/2 flex bg-gray-900 rounded-3xl p-2 justify-between items-center">
          <button onClick={() => addQty(-1)} className="mx-1">
            <Minus className="h-5 w-5" />
          </button>
          <input
            className="bg-gray-900 w-12 focus:outline-none active:ring-0 text-center"
            type="number"
            value={qty}
            onChange={(e) => setQty(parseInt(e?.target?.value))}
            max={12}
          />
          <button onClick={() => addQty(1)} className="mx-1">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      <button className="hover:bg-yellow-400 hover:text-gray-900 bg-gray-900 text-yellow-400 font-bold py-2 rounded-xl my-2 text-center">
        Add to Cart
      </button>
      <Link
        href="/checkout"
        className="bg-yellow-400 text-gray-900 font-bold hover:bg-gray-900 hover:text-yellow-400 py-2 rounded-xl my-2 text-center"
      >
        Buy Now
      </Link>
    </div>
    ) : ""
  );
}
