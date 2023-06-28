import { CartItemInterface } from "@utils/types";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Product({ item }: { item: CartItemInterface }) {
  return (
    <div className="grid grid-cols-2">
      <div className="aspect-video p-6">
        <Image
          src={`/images/${item?.brand?.imgSrc}`}
          width={200}
          height={200}
          className="h-auto w-full"
          alt="nothin"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold">{item?.brand?.name}</p>
        <div className="flex items-center gap-2 text-xs">
          <p>${item?.item?.price.toFixed(2)}</p>
          <Circle className="h-2 w-2" />
          <p>
            {item?.qty} <span>item</span>
            <span>{item?.qty > 1 ? "s" : ""}</span>
          </p>
          <Circle className="h-2 w-2" />
          <p> Instant Email Delivery </p>
        </div>
      </div>
    </div>
  );
}
