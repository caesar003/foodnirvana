import React, { useEffect, useState } from "react";
import Head from "@components/Head";
import CheckoutLayout from "@components/CheckoutLayout";
import { ArrowLeft } from "lucide-react";
import CustomerDetail from "./components/CustomerDetail";
import PaymentMethod from "./components/PaymentMethod";
import { useRouter } from "next/router";
import { brands, products } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
import OrderDetails from "./components/OrderDetails";
import Confirmation from "./components/Confirmation";

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
  const [step, setStep] = useState(0);
  const [orderDetail, setOrderDetail] = useState<OrderDetailInterface>();

  const [brand, setBrand] = useState<BrandInterface>();
  const [product, setProduct] = useState<ProductInterface | undefined>();

  const goBack = () => {
    if (step === 0) {
      // @ts-ignore
      return router.push(`/products/${brand.id}`);
    } else {
      setStep(step - 1);
    }
  };

  const goForward = () => setStep(step + 1);

  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [paymenDetail, setPaymentDetail] = useState<PaymentDetail>();

  useEffect(() => {
    const { brand_id, product_id, qty } = router.query;
    if (
      brand_id &&
      Number(brand_id) &&
      product_id &&
      Number(product_id) &&
      qty &&
      Number(qty)
    ) {
      const _orderDetail = {
        // @ts-ignore
        productId: parseInt(brand_id), // @ts-ignore
        brandId: parseInt(product_id), // @ts-ignore
        qty: parseInt(qty),
      };

      const _brand = // @ts-ignore
        brands.find((item) => item?.id === parseInt(brand_id));

      const _product = products.find(
        // @ts-ignore
        (item) => item.id === parseInt(product_id)
      );

      if (_brand !== undefined && _product !== undefined) {
        setOrderDetail(_orderDetail); // @ts-ignore
        setBrand(_brand); // @ts-ignore
        setProduct(_product);
      }
    }
  }, []);

  const config = {
    orderDetail,
    brand,
    product,
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
          {orderDetail ? (
            <div className="grid grid-cols-12 gap-4">
              <>
                {step === 0 ? (
                  <CustomerDetail // @ts-ignore
                    brand={brand} orderDetail={orderDetail} product={product}
                  />
                ) : (
                  <PaymentMethod />
                )}

                <OrderDetails
                  orderDetail={orderDetail} // @ts-ignore
                  product={product} // @ts-ignore
                  brand={brand}
                  step={step}
                  goForward={goForward}
                />
              </>
            </div>
          ) : (
            <div>
              <p>Something went wrong</p>
            </div>
          )}
        </div>
      )}
    </CheckoutLayout>
  );
}
