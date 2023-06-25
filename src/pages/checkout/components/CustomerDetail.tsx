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
  return (
    <div className="col-span-7">
      <div className=" rounded-xl bg-gray-800 p-4 my-4">
        <div className="flex items-center gap-2 border-gray-500  py-2">
          <UserCircle2 />
          <p>Your Details</p>
        </div>
        <div className="flex flex-col">
          <div className="my-2 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="my-2  grid gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="my-2 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="zipcode">Zip code / Postal Code</label>
              <input
                type="text"
                id="zipcode"
                className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
