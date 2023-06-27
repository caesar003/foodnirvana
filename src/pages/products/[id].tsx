import { Fragment, useEffect, useState } from "react";

import { Check, Minus, Plus, Star, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import ReviewCard from "@components/ReviewCard";

import ItemCard from "./components/ItemCard";

import { useApp } from "@hooks/useApp";
import { brands, products, reviews } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
import { useRouter } from "next/router";
import { qParams } from "@utils/query-params";
import Stars from "@components/Stars";

export default function Product() {
  const { shoppingCart, setShoppingCart } = useApp();
  const router = useRouter();
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
      if (qty === maxOrder || qty === product.stock) return;
      setQty(qty + 1);
    }
  };

  const selectAnItem = (idx: number) => {
    setSelectedItem(idx);
    setQty(1);
  };
  const addToCart = (item: ProductInterface) => {
    const _brand = brands.find((brand) => brand.id === item.brandId);
    const _cartItem = {
      id: item.id,
      qty: qty,
      brand: _brand,
      item: item,
    };
    if (!item.stock || isInCart(item.id)) return;

    setShoppingCart([...shoppingCart, _cartItem]);
  };

  const isInCart = (id: number) =>
    shoppingCart.length > 0 &&
    shoppingCart.findIndex((cartItem) => cartItem.id === id) !== -1;

  const getQParams = () =>
    qParams.encode([
      {
        id: pageProducts[selectedItem].id,
        brand: brand,
        qty: qty,
        item: pageProducts[selectedItem],
      },
    ]);

  useEffect(() => {
    if (router.query) {
      const { id } = router.query;
      let brandId: number = 0;
      if (id) {
        brandId = Number(id);
      } else {
        if (window !== undefined) {
          const url = window.location.href;
          brandId = parseInt(url.slice(url.lastIndexOf("/") + 1));
        }
      }

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
  }, [selectedItem, qty, pageProducts]);

  return (
    <Layout>
      <Head title="" />
      {brand ? (
        <Fragment>
          <div className="my-6 grid grid-cols-12 items-start gap-4">
            <div className="col-span-12 md:col-span-8">
              <div className="flex flex-col gap-4 rounded-xl bg-gray-800 p-6">
                <h1 className="text-4xl font-bold">{brand?.name}</h1>
                <div className="flex items-center gap-2">
                  <p>
                    Product sold{" "}
                    <span className="text-gray-400">{brand.sold}</span> times
                  </p>
                  <Stars counts={5} />
                  <p>{brand.stars}</p>
                  <p className="text-gray-400">({brand.reviews} reviews)</p>
                </div>
                <Image
                  src={`/images/${brand.imgSrc}`}
                  alt={brand.name + " image"}
                  width={500}
                  height={100}
                  className="h-auto w-full"
                />

                <div>
                  {brand.description.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              {pageProducts.length
                ? pageProducts.map((product, idx) => (
                    <ItemCard
                      key={idx}
                      product={product}
                      selectedItem={selectedItem}
                      clickEvent={() => selectAnItem(idx)}
                      index={idx}
                      brand={brand}
                    />
                  ))
                : ""}

              <div className="my-2 flex flex-col rounded-xl border border-gray-800 bg-gray-800 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p>Price</p>
                  <p className="text-4xl font-bold">
                    $ {totalPrice?.toFixed(2)}
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <p>Delivery Time</p>
                  <p className="flex gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />{" "}
                    <span>Instant</span>
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <p>In Stock</p>
                  <p className="flex gap-2">
                    {pageProducts[selectedItem]?.stock ? (
                      <Check className="h-6 w-6 text-yellow-400" />
                    ) : (
                      <X className="h-6 w-6 text-yellow-400" />
                    )}
                    <span>{pageProducts[selectedItem]?.stock}</span>
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between gap-2">
                  <p className="w-1/2">Quantity</p>
                  <div className="flex w-1/2 items-center justify-between rounded-3xl bg-gray-900 p-2">
                    <button onClick={() => addQty(-1)} className="mx-1">
                      <Minus className="h-5 w-5" />
                    </button>
                    <input
                      className="w-12 border-none bg-gray-900 text-center focus:outline-none"
                      type="number"
                      value={qty}
                      onChange={(e) => setQty(parseInt(e?.target?.value))}
                      max={12}
                    />
                    <button onClick={() => addQty(1)} className="mx-1">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(pageProducts[selectedItem])}
                  className="my-2 rounded-xl bg-gray-900 py-2 text-center font-bold text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                >
                  {isInCart(pageProducts[selectedItem].id)
                    ? "In Cart"
                    : "Add to Cart"}
                </button>
                <Link
                  href={`/checkout?${getQParams()}`}
                  className="my-2 rounded-xl bg-yellow-400 py-2 text-center font-bold text-gray-900 hover:bg-gray-900 hover:text-yellow-400"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="my-6 grid grid-cols-12 items-start gap-4">
            <div className="col-span-12 my-6 flex flex-col gap-4 rounded-xl bg-gray-800 p-6 md:col-span-8">
              {reviews.slice(0, 6).map((item, idx) => (
                <ReviewCard key={idx} className="bg-gray-900" item={item} />
              ))}
            </div>
          </div>
        </Fragment>
      ) : (
        ""
      )}
      <Footer />
    </Layout>
  );
}
