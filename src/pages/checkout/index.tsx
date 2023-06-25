import React, { useEffect, useState } from "react";
import Head from "@components/Head";
import CheckoutLayout from "@components/CheckoutLayout";
import { ArrowLeft } from "lucide-react";
import CustomerDetail from "./components/CustomerDetail";
import PaymentMethod from "./components/PaymentMethod";
import { useRouter } from "next/router";
import { brands, products } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
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
  const [product, setProduct] = useState<ProductInterface>();

  const goBack = () => {
    // console.log("going back");
    if (step === 0) {
      window.location.href = "/";
    }
  };

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

      // @ts-ignore
      const _brand = brands.find((item) => item.id === parseInt(brand_id));
      const _product = products.find(
        // @ts-ignore
        (item) => item.id === parseInt(product_id)
      );

      setOrderDetail(_orderDetail);
      setBrand(_brand);
      setProduct(_product);
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

      <div className="">
        <div className="">
          <button className="flex gap-2 items-center" onClick={goBack}>
            <ArrowLeft />
            <span>Go back</span>
          </button>
          {orderDetail ? (
            // @ts-ignore
            // <CustomerDetail // @ts-ignore
            //   orderDetail={orderDetail} product={product} brand={brand}
            // />
            <PaymentMethod />
          ) : (
            <div>
              <p>Something went wrong</p>
            </div>
          )}
        </div>
      </div>
    </CheckoutLayout>
  );
}
