import React, { useEffect, useState } from "react";
import Head from "@components/Head";
import CheckoutLayout from "@components/CheckoutLayout";
import { ArrowLeft } from "lucide-react";
import CustomerDetail from "./components/CustomerDetail";
import PaymentMethod from "./components/PaymentMethod";
import { useRouter } from "next/router";
import { brands, products } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";

import { Bookmark, CreditCard, Gift, Tag, Tags } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCcAmex,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGift,
  FaShoppingBasket,
} from "react-icons/fa";
import OrderDetails from "./components/OrderDetails";
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
      // window.location.href = "/";
      // @ts-ignore
      router.push(`/products/${brand.id}`);
      // console.log(product)
    }
  };

  const goForward = () => {};

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
          <button className="flex items-center gap-2" onClick={goBack}>
            <ArrowLeft />
            <span>Go back</span>
          </button>
          {orderDetail ? (
            <div className="grid grid-cols-12 gap-4">
              <PaymentMethod />

              {/*<CustomerDetail  // @ts-ignore
                brand={brand} orderDetail={orderDetail} product={product}
              /> */}
              <OrderDetails
                orderDetail={orderDetail} // @ts-ignore
                product={product} // @ts-ignore
                brand={brand}
                step={step}
                goForward={goForward}
              />
            </div>
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
