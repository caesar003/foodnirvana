import CheckoutLayout from "@components/CheckoutLayout";
import Head from "@components/Head";
import { qParams } from "@utils/query-params";
import { CartItemInterface } from "@utils/types";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Confirmation from "@components/Checkout/Confirmation";
import CustomerDetail from "@components/Checkout/CustomerDetail";
import OrderDetails from "@components/Checkout/OrderDetails";
import PaymentMethod from "@components/Checkout/PaymentMethod";
import Product from "@components/Checkout/Product";

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

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
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
        </div>
      )}
    </CheckoutLayout>
  );
}
