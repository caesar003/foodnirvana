import { BrandInterface, ProductInterface } from "@utils/types";
import { Circle } from "lucide-react";
import React, { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface PropsInterface {
  index: number;
  selectedItem: number;
  clickEvent: MouseEventHandler<HTMLDivElement>;
  product: ProductInterface;
  brand: BrandInterface;
}

export default function ItemCard({
  clickEvent,
  product: { brandId, label, price, stock },
  brand,
  selectedItem,
  index,
}: PropsInterface) {
  const isActive = selectedItem === index;
  return (
    <div
      onClick={clickEvent}
      className={twMerge(
        "bg-gray-800 p-4 rounded-xl my-2 border hover:border-yellow-400 cursor-pointer",
        isActive ? "border-yellow-400" : "border-gray-800"
      )}
    >
      <div className="flex justify-between items-center mb-1">
        <p>
          {brand.name} {label}
        </p>
        {isActive ? (
          <Circle className="bg-yellow-400 text-yellow-400 rounded-full" />
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">$ {price.toFixed(2)}</p>
        <p className="text-sm">{stock} in stock</p>
      </div>
    </div>
  );
}
