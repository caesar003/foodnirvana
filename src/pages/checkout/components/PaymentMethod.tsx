import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCcAmex,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGift,
  FaShoppingBasket,
} from "react-icons/fa";

export default function PaymentMethod() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-7 rounded-xl p-6 bg-gray-800">
        <div className="flex gap-2 items-center py-2  border-gray-500">
          <CreditCard />
          <p>Payment Method</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <FaCcMastercard className="w-full h-auto" />
            </div>
            <div>
              <FaCcVisa className="w-full h-auto" />
            </div>
            <div>
              <FaCcJcb className="w-full h-auto" />
            </div>
            <div>
              <FaCcAmex className="w-full h-auto" />
            </div>
          </div>
          <div>
            <FaCcPaypal className="w-full h-auto" />
          </div>
          <div></div>
          <div>4</div>
        </div>
        <div className="flex flex-col">
          <div className="grid  gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Card number</label>
              <input
                type="text"
                id="email"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Expiry Date</label>
              <input
                type="text"
                id="country"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
                placeholder="1234567890123456"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="zipcode">CVC / CVV</label>
              <input
                type="text"
                id="zipcode"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5">
        <div className="rounded-xl bg-gray-800 my-4 p-4 flex flex-col">
          <p className="text-yellow-400">
            $ Spend $46.00 get $5 in store balance
          </p>
          <div className="flex items-center gap-2">
            <FaShoppingBasket size={22} />
            <p className="text-xl">Your order</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Subtotal</p>
            <p className="font-bold">$4.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Total</p>
            <p>$4.00</p>
          </div>

          <button className="my-2 text-center bg-yellow-400 text-black rounded-lg">
            Pay
          </button>
          <p className="text-sm">
            By tapping &quot;Pay&quot;, you agree to our{" "}
            <Link href="/">Terms of Service</Link> and allow us to charge you
            for this payment.
          </p>
        </div>

        <div className="rounded-xl bg-gray-800 my-4 p-4 flex flex-col">
          <div className="flex items-center gap-2">
            <FaGift size={22} />
            <p className="text-xl">Redeem Coupon/Gift Card</p>
          </div>

          <div className="bg-gray-900 flex p-2 rounded-xl my-2">
            <input
              className="bg-gray-900 flex-1"
              placeholder="Enter coupon/gift card code here"
            />
            <button className="text-right">REDEEM</button>
          </div>
        </div>
      </div>
    </div>
  );
}
