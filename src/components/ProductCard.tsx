import { Check, X } from "lucide-react";
import { BrandInterface } from "@components/types";

export default function ProductCard(props: BrandInterface) {
  const { imgSrc, inStock, name, price } = props;
  return (
    <div className="max-w-sm bg-gray-800 border border-1 border-gray-900 rounded-lg">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt={name + " image"} />
      </a>
      <div className="p-5">
        <div className="mb-1">
          <p className="font-bold">{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">{`$${price}`}</span>
          <div className="flex gap-2 items-center">
            <span className="uppercase text-sm">in stock</span>
            {inStock ? (
              <Check className="w-4 h-4 text-yellow-400" />
            ) : (
              <X className="w-4 h-4 text-rose-600" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
