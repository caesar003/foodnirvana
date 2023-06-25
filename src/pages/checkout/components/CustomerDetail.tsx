import { BrandInterface, ProductInterface } from "@utils/types";
import { UserCircle2 } from "lucide-react";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

interface OrderDetailInterface {
  brandId: number;
  productId: number;
  qty: number;
}

interface PropsInterface {
  orderDetail: OrderDetailInterface;
  product: ProductInterface;
  brand: BrandInterface;
}

export default function CustomerDetail({
  orderDetail,
  product,
  brand,
}: PropsInterface) {
  // console.log({orderDetail, product, brand})
  return (
    <div className="grid grid-cols-12 gap-4 items-start">
      <div className="col-span-7 rounded-xl p-6 bg-gray-800">
        <div className="flex gap-2 items-center py-2  border-gray-500">
          <UserCircle2 />
          <p>Your Details</p>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid  gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="zipcode">Zip code / Postal Code</label>
              <input
                type="text"
                id="zipcode"
                className="bg-gray-900 rounded-xl px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 rounded-xl p-6 bg-gray-800">
        <div className=" flex flex-col">
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
          <div className="flex gap-2 items-start my-2">
            <input className="mt-2" type="checkbox" id="receivenotif" />
            <label htmlFor="receivenotif" className="text-sm text-gray-400">
              Food Nirvana may send me update & announcements via emails
            </label>
          </div>

          <div className="flex gap-2 items-start my-2">
            <input
              className="mt-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              id="agreeterm"
            />
            <label htmlFor="agreeterm" className="text-sm text-gray-400">
              I agree to Food Nirvana&apos;s Terms and conditions and Privacy
              Policy as the authorised seller and merchant of record. By ticking
              this box you confirm you&apos;re over the age of 16 or have a
              guardian&apos;s permission, and, to allow us to provide digital
              items immerdialtely, waive any rights of withdrawal or refund.
            </label>
          </div>

          <button className="my-2 text-center bg-yellow-400 text-black rounded-lg">
            Continue to payment
          </button>
          {/* <p className="text-sm">
            By tapping "Pay", you agree to our{" "}
            <Link href="/">Terms of Service</Link> and allow us to charge you
            for this payment.
          </p> */}
        </div>
      </div>
      {/*!todo: add coupon  */}
    </div>
  );
}
