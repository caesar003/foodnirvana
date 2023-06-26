import { BrandInterface } from "@utils/types";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function ProductCard(props: BrandInterface) {
  const { imgSrc, inStock, name, price, productType } = props;
  return (
    <div className="border-1 rounded-lg border border-gray-900 bg-gray-800 transition-all hover:scale-105">
      <Image
        className="h-auto w-full rounded-t-lg"
        src={imgSrc}
        alt={name + " image"}
        width={480}
        height={32}
      />
      <div className="p-5">
        <div className="mb-1">
          <p className="font-bold">
            {name}
            {productType ? (
              <span className="capitalize">[{productType}]</span>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">{`$${price.toFixed(2)}`}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase">in stock</span>
            {inStock ? (
              <Check className="h-4 w-4 text-yellow-400" />
            ) : (
              <X className="h-4 w-4 text-rose-600" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
