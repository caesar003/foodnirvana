import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import ReviewCard from "@components/ReviewCard";
import ItemCard from "@components/Products/ItemCard";
import Stars from "@components/Stars";
import OrderSummary from "@components/Products/OrderSummary";

import { useApp } from "@hooks/useApp";
import { brands, products, reviews } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
import { qParams } from "@utils/query-params";

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

              <OrderSummary
                addQty={addQty}
                qty={qty}
                setQty={setQty}
                totalPrice={totalPrice}
                pageProducts={pageProducts}
                selectedItem={selectedItem}
                addToCart={addToCart}
                isInCart={isInCart}
                getQParams={getQParams}
              />
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
