import { BrandInterface, ProductInterface } from "@utils/types";
import { CheckCircle } from "lucide-react";
import { MouseEventHandler } from "react";
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
  product,
  brand,
  selectedItem,
  index,
}: PropsInterface) {
  const isActive = selectedItem === index;
  return (
    <div
      onClick={clickEvent}
      className={twMerge(
        "my-2 cursor-pointer rounded-xl border bg-gray-800 p-4 hover:border-yellow-400",
        isActive ? "border-yellow-400" : "border-gray-800"
      )}
    >
      <div className="mb-1 flex items-center justify-between">
        <p>
          {brand?.name} {product?.label}
        </p>
        {isActive ? (
          <CheckCircle className="rounded-full  text-yellow-400" />
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">$ {product?.price.toFixed(2)}</p>
        <p className="text-sm">{product?.stock} in stock</p>
      </div>
    </div>
  );
}
