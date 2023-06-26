import React, { useEffect, useState } from "react";
import Head from "@components/Head";
import CheckoutLayout from "@components/CheckoutLayout";
import { ArrowLeft, Tags } from "lucide-react";
import { useRouter } from "next/router";
import { CartItemInterface } from "@utils/types";
import Confirmation from "./components/Confirmation";
import { qParams } from "@utils/query-params";
import { FaGift, FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import PaymentMethod from "./components/PaymentMethod";
import CustomerDetail from "./components/CustomerDetail";
import Product from "./components/Product";
import OrderDetails from "./components/OrderDetails";

export default function Checkout() {
  const router = useRouter();
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
      const _cart: CartItemInterface[] = qParams.decode(
        location.search.substring(1)
      );
      if (_cart) {
        setCart(_cart);
        setTotalPrice(calculatePrice(_cart));
      }
    }
  }, []);

  const calculatePrice = (obj: CartItemInterface[]) => {
    let res = 0;
    obj.forEach((item) => {
      // @ts-ignore
      res += item?.item?.price * item?.qty;
    });
    return res;
  };

  return (
    <CheckoutLayout>
      <Head title="Food Nirvana - Checkout" />

      {step === 2 ? (
        <Confirmation />
      ) : (
        <div className="my-2">
          <button className="flex items-center gap-2" onClick={goBack}>
            <ArrowLeft />
            <span>Go back</span>
          </button>

          {cart.length ? (
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                {step === 0 ? <CustomerDetail /> : <PaymentMethod />}
                <div className="flex flex-col divide-y-2 divide-slate-600 rounded-lg bg-gray-800">
                  {cart.map((item, idx) => (
                    <Product item={item} key={idx} />
                  ))}
                </div>
              </div>

              <OrderDetails
                cart={cart}
                goForward={goForward}
                step={step}
                totalPrice={totalPrice}
              />
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
