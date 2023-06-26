import React, { useEffect, useState } from "react";
import Head from "@components/Head";
import CheckoutLayout from "@components/CheckoutLayout";
import {
  ArrowLeft,
  Circle,
  CreditCard,
  Plus,
  Tags,
  UserCircle2,
} from "lucide-react";
import { useRouter } from "next/router";
import { CartItemInterface,  } from "@utils/types";
import Confirmation from "./components/Confirmation";
import { useApp } from "@hooks/useApp";
import { qParams } from "@utils/query-params";
import { FaGift, FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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

export default function Checkout(props: any) {
  const router = useRouter();
  const { setShoppingCart, setSidebarShown, shoppingCart, sidebarShown } =
    useApp();

  const [step, setStep] = useState(0);
  const [cart, setCart] = useState<CartItemInterface[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const goBack = () => {
    if (step === 0) { 
      return router.push(`/products/${cart[0].brand?.id}`);
    } else {
      setStep(step - 1);
    }
  };

  const goForward = () => setStep(step + 1);

  useEffect(() => {
    if (window !== undefined) {
      const location = window.location;
      if (!location.search) return;
      const _cart:CartItemInterface[] = qParams.decode(location.search.substring(1));
      if (_cart) {
        setCart(_cart);
        setTotalPrice(calculatePrice(_cart));
      }
    }
  }, []);

  const calculatePrice = (obj:CartItemInterface[]) => {
    let res = 0;
    obj.forEach((item) => { // @ts-ignore
      res += (item?.item?.price * item?.qty) ;
    });
    return res;
  };

  return (
    <CheckoutLayout>
      <Head title="Food Nirvana - Checkout" />

      {step === 2 ? (
        <Confirmation />
      ) : (
        <div>
          <button className="flex items-center gap-2" onClick={goBack}>
            <ArrowLeft />
            <span>Go back</span>
          </button>

          {cart.length ? (
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                {step === 0 ? (
                  <div className=" my-4 rounded-xl bg-gray-800 p-4">
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
                          <label htmlFor="zipcode">
                            Zip code / Postal Code
                          </label>
                          <input
                            type="text"
                            id="zipcode"
                            className="rounded-xl bg-gray-900 px-2 py-1 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="my-4 rounded-xl bg-gray-800 p-6">
                    <div className="flex items-center gap-2 border-gray-500  py-2">
                      <CreditCard />
                      <p>Payment Method</p>
                    </div>
                    <div className="my-4 grid grid-cols-4 gap-2">
                      <div className="grid aspect-video grid-cols-2 grid-rows-2 rounded bg-white p-0.5">
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
                            className="h-full object-cover"
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
                )}
                <div className="flex flex-col">
                  {cart.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-2">
                      <div className="aspect-video p-6">
                        <Image 
                          src={`/images/${item.brand?.imgSrc}`}
                          width={200}
                          height={200}
                          className="h-auto w-full"
                          alt="nothin"
                        />
                      </div>
                      <div className="flex flex-col justify-center">                         <p className="text-xl font-bold">{item.brand?.name}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <p>${item.item?.price.toFixed(2)}</p>
                          <Circle className="h-2 w-2" />
                          <p>
                            {item.qty} <span>item</span>
                            <span>{item.qty > 1 ? "s" : ""}</span>
                          </p>
                          <Circle className="h-2 w-2" />
                          <p> Instant Dmail Delivery </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5">
                <div className="my-4 flex flex-col rounded-xl bg-gray-800 p-4 py-6">
                  <p className="px-4 text-sm text-yellow-400">
                    $ Spend $46.00 get $5 in store balance
                  </p>
                  <div className="my-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaShoppingBasket size={22} />
                      <p className="text-xl font-bold">Your order</p>
                    </div>
                    <p className="text-xs text-gray-400">
                      {cart.length} <span>item</span>
                      <span>{cart.length > 1 ? "s" : ""}</span>
                    </p>
                  </div>
                  <div className="my-1 flex justify-between">
                    <p className="text-lg">Subtotal</p>
                    <p className="font-bold">${totalPrice}</p>
                  </div>
                  <div className="my-2 mt-3 flex justify-between">
                    <p className="text-lg">Total</p>
                    <p>${totalPrice}</p>
                  </div>

                  <button
                    onClick={goForward}
                    className="my-2 rounded-2xl bg-yellow-400 py-3 text-center font-bold text-black hover:bg-indigo-950 hover:text-yellow-400"
                  >
                    {step === 0 ? "Continue to payment" : "Pay"}
                  </button>

                  <p className="text-xs">
                    By tapping &quot;Pay&quot;, you agree to our{" "}
                    <Link href="/">Terms of Service</Link> and allow us to
                    charge you for this payment.
                  </p>
                </div>

                <div className="my-4 flex flex-col rounded-xl bg-gray-800 p-4">
                  <div className="flex items-center gap-2">
                    <FaGift size={22} />
                    <p className="text-xl">Redeem Coupon/Gift Card</p>
                  </div>

                  <div className="relative my-2 rounded-xl bg-gray-900 p-3 py-4">
                    <input
                      className="w-full bg-gray-900"
                      placeholder="Enter a coupon or promo code"
                    />
                    <button className="absolute right-0 top-0 my-1 flex items-center gap-2 rounded-2xl bg-yellow-400 p-3 text-gray-800 hover:bg-indigo-950 hover:text-yellow-400">
                      <span className="font-bold">Apply</span>
                      <Tags className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>something went wrong</p>
            </div>
          )}
        </div>
      )}
    </CheckoutLayout>
  );
}
