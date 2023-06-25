import { Bookmark, CreditCard, Gift, Plus, Tag, Tags } from "lucide-react";
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
    <div className="col-span-7">
      <div className="my-4 rounded-xl bg-gray-800 p-6">
        <div className="flex items-center gap-2 border-gray-500  py-2">
          <CreditCard />
          <p>Payment Method</p>
        </div>
        <div className="my-4 grid grid-cols-4 gap-2">
          <div className="grid aspect-video grid-cols-2 grid-rows-2 rounded bg-white">
            <div className="flex aspect-video justify-center p-0.5">
              <Image
                src={"/images/mc-logo-52.svg"}
                width={1800}
                height={300}
                alt="Mastercard logo"
                className="h-full w-auto"
              />
            </div>
            <div className="flex aspect-video items-center justify-center">
              <Image
                src={"/images/visa.svg"}
                width={300}
                height={300}
                alt="Visa logo"
                className="h-full w-auto"
              />
            </div>
            <div className="flex aspect-video justify-center">
              <Image
                src={"/images/jcb_emblem.svg"}
                width={300}
                height={300}
                alt="JCB logo"
                className="h-full w-auto"
              />
            </div>
            <div className="flex aspect-video justify-center">
              <Image
                src={"/images/american-express-1.svg"}
                width={300}
                height={300}
                alt="amex logo"
                className="h-full w-auto"
              />
            </div>
          </div>
          <div className="aspect-video rounded bg-white px-1">
            <Image
              src={"/images/paypal-3.svg"}
              width={300}
              height={300}
              alt="paypal logo"
              className="h-full w-auto"
            />
          </div>
          <div className="aspect-video rounded bg-white">
            <Image
              src={"/images/sofort.svg"}
              width={300}
              height={300}
              alt="sofort logo"
              className="h-full w-auto"
            />
          </div>
          <div className="aspect-video rounded bg-white p-1">
            <Image
              src={"/images/twint-logo.svg"}
              width={300}
              height={300}
              alt="twint logo"
              className="h-full w-auto"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            <span>Show more payment methods</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="my-2  grid gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Card number</label>
              <input
                type="text"
                id="email"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="my-2 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Expiry Date</label>
              <input
                type="text"
                id="country"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
                placeholder="1234567890123456"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="zipcode">CVC / CVV</label>
              <input
                type="text"
                id="zipcode"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
