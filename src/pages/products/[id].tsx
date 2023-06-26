import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import ReviewCard from "@components/ReviewCard";
import { useApp } from "@hooks/useCart";
import { brands, products, reviews } from "@utils/default-values";
import { BrandInterface, ProductInterface } from "@utils/types";
import { Check, Minus, Plus, Star, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

export default function Product() {
  // @ts-ignore
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
      if (qty === maxOrder) return;
      if (qty === product.stock) return;

      setQty(qty + 1);
    }
  };

  const addToCart = (item: ProductInterface) => {
    const _brand = brands.find((brand) => brand.id === item.brandId);
    const _cartItem = {
      id: item.id,
      qty: qty,
      brand: _brand,
      item: item,
    };
    setShoppingCart([...shoppingCart, _cartItem]);
  };

  useEffect(() => {
    const { id } = router.query;
    let brandId: number = 0;
    if (id) {
      // @ts-ignore
      brandId = parseInt(id);
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
        <div className="my-10 grid grid-cols-12 items-start gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-col gap-4 rounded-xl bg-gray-800 p-6">
              <h1 className="text-4xl font-bold">{brand?.name}</h1>
              <div className="flex items-center gap-2">
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
                className="h-auto w-full"
              />

              <div>
                {brand.description.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>

            <div className="my-6 flex flex-col gap-4 rounded-xl bg-gray-800 p-6">
              {reviews
                .slice(0, 6)
                .map(({ date, isVerified, stars, text }, idx) => (
                  <ReviewCard
                    key={idx}
                    date={date}
                    isVerified={isVerified}
                    stars={stars}
                    className="bg-gray-900"
                    text={text}
                  />
                ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-col md:col-span-4">
            {pageProducts.length
              ? pageProducts.map((product, idx) => (
                  <ItemCard
                    key={idx}
                    product={product}
                    selectedItem={selectedItem}
                    clickEvent={() => setSelectedItem(idx)}
                    index={idx}
                    brand={brand}
                  />
                ))
              : ""}

            <div className="my-2 flex flex-col rounded-xl border border-gray-800 bg-gray-800 p-6">
              <div className="mb-3 flex items-center justify-between">
                <p>Price</p>
                <p className="text-4xl font-bold">$ {totalPrice?.toFixed(2)}</p>
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
                Add to Cart
              </button>
              <Link
                href={{
                  pathname: `/checkout`,
                  query: {
                    brand_id: brand.id,
                    product_id: pageProducts[selectedItem].id,
                    qty: qty,
                  },
                }}
                className="my-2 rounded-xl bg-yellow-400 py-2 text-center font-bold text-gray-900 hover:bg-gray-900 hover:text-yellow-400"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </Layout>
  );
}
