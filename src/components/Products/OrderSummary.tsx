import React from "react";
import { Zap, Check, X, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { ProductInterface } from "@utils/types";

interface PropsInterface {
  addQty: Function;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  pageProducts: ProductInterface[];
  selectedItem: number;
  addToCart: Function;
  isInCart: Function;
  getQParams: Function;
}

export default function OrderSummary({
  addQty,
  qty,
  setQty,
  totalPrice,
  pageProducts,
  selectedItem,
  addToCart,
  isInCart,
  getQParams,
}: PropsInterface) {
  return (
    <div className="my-2 flex flex-col rounded-xl border border-gray-800 bg-gray-800 p-6">
      <div className="mb-3 flex items-center justify-between">
        <p>Price</p>
        <p className="text-4xl font-bold">$ {totalPrice?.toFixed(2)}</p>
      </div>
      <div className="my-3 flex items-center justify-between">
        <p>Delivery Time</p>
        <p className="flex gap-2">
          <Zap className="h-6 w-6 text-yellow-400" /> <span>Instant</span>
        </p>
      </div>
      <div className="my-3 flex items-center justify-between">
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
      <div className="my-3 flex items-center justify-between gap-2">
        <p className="w-1/2">Quantity</p>
        <div className="flex w-1/2 items-center justify-between rounded-3xl bg-gray-900 p-2">
          <button onClick={() => addQty(-1)} className="mx-1">
            <Minus className="h-5 w-5" />
          </button>
          <input
            className="w-12 border-none bg-gray-900 text-center focus:outline-none"
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
      <button
        onClick={() => addToCart(pageProducts[selectedItem])}
        className="my-2 rounded-xl bg-gray-900 py-2 text-center font-bold text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
      >
        {isInCart(pageProducts[selectedItem].id) ? "In Cart" : "Add to Cart"}
      </button>
      <Link
        href={`/checkout?${getQParams()}`}
        className="my-2 rounded-xl bg-yellow-400 py-2 text-center font-bold text-gray-900 hover:bg-gray-900 hover:text-yellow-400"
      >
        Buy Now
      </Link>
    </div>
  );
}
