import Input from "@components/Input";
import { BrandInterface, ProductInterface } from "@utils/types";
import { UserCircle2 } from "lucide-react";

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

export default function CustomerDetail() {
  return (
    <div className=" my-4 rounded-xl bg-gray-800 p-4">
      <div className="flex items-center gap-2 border-gray-500  py-2">
        <UserCircle2 />
        <p>Your Details</p>
      </div>
      <div className="flex flex-col">
        <div className="my-2 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="firstname">
              First name
            </label>
            <Input id="firstname" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="lastname">
              Last name
            </label>
            <Input id="lastname" />
          </div>
        </div>
        <div className="my-2  grid gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="email">
              Email Address
            </label>
            <Input id="email" />
          </div>
        </div>
        <div className="my-2 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="country">
              Country
            </label>
            <Input id="country" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="zipcode">
              Zip code / Postal Code
            </label>
            <Input id="zipcode" />
          </div>
          <div className="col-span-2 flex gap-3">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md bg-gray-800 text-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-0"
              id="updates"
            />
            <label className="text-sm" htmlFor="updates">
              NarcoCity & Tebex may send me updates & announcements via email.
            </label>
          </div>
          <div className="col-span-2 flex gap-3">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md bg-gray-800 text-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-0"
              id="terms"
            />
            <label className="text-sm" htmlFor="terms">
              I agree to Tebex&apos;s Terms & Conditions & Privacy Policy as the
              authorised seller and merchant of record. By ticking this box you
              confirm you&apos;re over the age of 16 or have a guardian&apos;s
              permission, and, to allow us to provide digital items immediately,
              waive any rights of withdrawal or refund.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
