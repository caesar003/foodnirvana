import CheckoutLayout from "@components/CheckoutLayout";
import Head from "@components/Head";
import { qParams } from "@utils/query-params";
import {
  CartItemInterface,
  CustomerDetailInterface,
  PaymentMethodInterface,
} from "@utils/types";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import Confirmation from "@components/Checkout/Confirmation";
import CustomerDetail from "@components/Checkout/CustomerDetail";
import OrderDetails from "@components/Checkout/OrderDetails";
import PaymentMethod from "@components/Checkout/PaymentMethod";
import Product from "@components/Checkout/Product";
import { defCustomerDetail, defPaymentDetail } from "@utils/default-values";

export default function Checkout() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [cart, setCart] = useState<CartItemInterface[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [isLoading, setIsloading] = useState<boolean>(false);

  const [customerDetail, setCustomerDetail] =
    useState<CustomerDetailInterface>(defCustomerDetail);
  const [paymentDetail, setPaymentDetail] =
    useState<PaymentMethodInterface>(defPaymentDetail);

  const goBack = () => {
    if (step === 0) {
      return router.push(`/products/${cart[0].brand?.id}`);
    } else {
      setStep(step - 1);
    }
  };

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
    let res: number = 0;
    obj.forEach((item) => {
      // @ts-ignore
      res += item?.item?.price * item?.qty;
    });
    return res;
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      id,
      value,
      dataset: { field },
    } = e.target;

    field === "customer"
      ? setCustomerDetail({ ...customerDetail, [id]: value })
      : setPaymentDetail({ ...paymentDetail, [id]: value });
  };

  const submitCheckout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setTimeout(() => {
        setStep(step + 1);
      }, 100);
    }, 1000);
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

          <form id="checkout" onSubmit={submitCheckout}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                {step === 0 ? (
                  <CustomerDetail
                    customerDetail={customerDetail}
                    handleInput={handleInput}
                  />
                ) : (
                  <PaymentMethod
                    paymentDetail={paymentDetail}
                    handleInput={handleInput}
                  />
                )}
                <div className="flex flex-col divide-y-2 divide-slate-600 rounded-lg bg-gray-800">
                  {cart.map((item, idx) => (
                    <Product item={item} key={idx} />
                  ))}
                </div>
              </div>

              <OrderDetails
                cart={cart}
                step={step}
                totalPrice={totalPrice}
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      )}
    </CheckoutLayout>
  );
}
