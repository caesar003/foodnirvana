import Layout from "@components/Layout";
import Head from "@components/Head";
import React, { useEffect, useState } from "react";
import { brands, products, reviews } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
import Image from "next/image";
import {  Star, } from "lucide-react";
import ReviewCard from "@components/ReviewCard";
import ItemCard from "./components/ItemCard";
import Footer from "@components/Footer";
import OrderDetailCard from "./components/OrderDetailCard";

export default function Product() {
  const maxOrder: number = 20;
  const [brand, setBrand] = useState<BrandInterface>();
  const [pageProducts, setPageProducts] = useState<ProductInterface[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(1);
  const [qty, setQty] = useState<number>(1);

  const addQty = (val: number) => {
    const product: ProductInterface = { ...pageProducts[selectedItem] };
    if (val === -1) {
      if (qty === 1) return;
      setQty(qty - 1);
    }

    if (val === 1) {
      if (qty === maxOrder) return;
      if (qty === product.stock) return;

      setQty(qty + 1);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      const url = window.location.href;
      const brandId = parseInt(url.slice(url.lastIndexOf("/") + 1));
      const _brand = brands.find((item) => item.id === brandId);
      const _products = products.filter((items) => items.brandId === brandId);
      setPageProducts(_products);
      setBrand(_brand);
      setTotalPrice(_products[0].price);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      setTotalPrice(pageProducts[selectedItem].price * qty);
    }
  }, [selectedItem, qty]);
  return (
    <Layout>
      <Head title="" />
      {brand ? (
        <div className="grid grid-cols-12 gap-4 my-10 items-start">
          <div className="col-span-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h1 className="text-4xl font-bold">{brand.name}</h1>
              <div className="flex gap-2 items-center">
                <p>
                  Product sold{" "}
                  <span className="text-gray-400">{brand.sold}</span> times
                </p>
                <div className="flex">
                  {Array(brand.stars)
                    .fill(null)
                    .map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-yellow-400" />
                    ))}
                </div>
                <p>{brand.stars}</p>
                <p className="text-gray-400">({brand.reviews} reviews)</p>
              </div>
              <Image
                src={`/images/${brand.imgSrc}`}
                alt={brand.name + " image"}
                width={500}
                height={100}
                className="w-full h-auto"
              />

              <div>
                {brand.description.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl my-6 flex flex-col gap-4">
              {reviews
                .slice(0, 6)
                .map(({ date, isVerified, stars, text }, idx) => (
                  <ReviewCard
                    date={date}
                    isVerified={isVerified}
                    stars={stars}
                    className="bg-gray-900"
                    text={text}
                  />
                ))}
            </div>
          </div>
          <div className="col-span-4 flex flex-col">
            {pageProducts.length
              ? pageProducts.map((product, idx) => (
                  <ItemCard
                    product={product}
                    selectedItem={selectedItem}
                    clickEvent={() => setSelectedItem(idx)}
                    index={idx}
                    brand={brand}
                  />
                ))
              : ""}

            <OrderDetailCard
              totalPrice={totalPrice}
              pageProducts={pageProducts}
              selectedItem={selectedItem}
              addQty={addQty}
              qty={qty}
              setQty={setQty}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </Layout>
  );
}
