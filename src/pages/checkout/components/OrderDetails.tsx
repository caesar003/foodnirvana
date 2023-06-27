import { CartItemInterface } from "@utils/types";
import { MouseEventHandler } from "react";

import { Tags } from "lucide-react";
import Link from "next/link";
import { FaGift, FaShoppingBasket } from "react-icons/fa";
interface OrderDetailInterface {
  brandId: number;
  productId: number;
  qty: number;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  zip: string;
}
interface PaymentDetail {
  cardNumber: string;
  expiryDate: Date;
  cvc: number;
}

interface PropsInterface {
  cart: CartItemInterface[];
  goForward: MouseEventHandler<HTMLButtonElement>;
  step: number;
  totalPrice: number;
}

export default function OrderDetails({
  cart,
  goForward,
  step,
  totalPrice,
}: PropsInterface) {
  return (
    <div className="col-span-12 md:col-span-5">
      <div className="my-4 flex flex-col gap-2 rounded-xl bg-gray-800 p-4 py-6">
        <p className="px-4 text-sm text-yellow-400">
          $ Spend $46.00 get $5 in store balance
        </p>
        <div className="my-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaShoppingBasket className="h-5 w-5" />
            <p className="text-base font-bold">Your order</p>
          </div>
          <p className="text-xs text-gray-400">
            {cart?.length} <span>item</span>
            <span>{cart?.length > 1 ? "s" : ""}</span>
          </p>
        </div>
        <div className="my-1 flex justify-between">
          <p className="text-lg">Subtotal</p>
          <p className="font-bold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="my-2 mt-3 flex justify-between">
          <p className="text-lg">Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>

        <button
          onClick={goForward}
          className="my-2 rounded-2xl bg-yellow-400 py-3 text-center font-bold text-black hover:bg-indigo-950 hover:text-yellow-400"
        >
          {step === 0 ? "Continue to payment" : "Pay"}
        </button>

        <p className="text-xs">
          By tapping &quot;Pay&quot;, you agree to our{" "}
          <Link href="/">Terms of Service</Link> and allow us to charge you for
          this payment.
        </p>
      </div>

      <div className="my-4 flex flex-col rounded-xl bg-gray-800 p-4">
        <div className="flex items-center gap-2">
          <FaGift className="h-5 w-5" />
          <p className="text-base">Redeem Coupon/Gift Card</p>
        </div>

        <div className="relative my-2 ">
          <input
            className="w-full rounded-xl bg-gray-900 p-3 py-4 focus:outline-none"
            placeholder="Enter a coupon or promo code"
          />
          <button className="absolute right-0 top-0 my-1 flex items-center gap-2 rounded-2xl bg-yellow-400 p-3 text-gray-800 hover:bg-indigo-950 hover:text-yellow-400">
            <span className="font-bold">Apply</span>
            <Tags className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
