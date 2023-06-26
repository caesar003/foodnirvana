import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import { brandCategories, brands } from "@utils/default-values";
import { BrandInterface } from "@utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [pageBrands, setPageBrands] = useState<BrandInterface[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCategoryId(+e.target.value);

  useEffect(() => {
    if (categoryId === 0) {
      setPageBrands(brands);
      return;
    }
    const _brands = [...brands].filter((items) =>
      items.categoryId.includes(categoryId)
    );
    setPageBrands(_brands);
  }, [categoryId]);

  useEffect(() => {
    const _brands = [...brands].filter((items) =>
      items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPageBrands(_brands);
  }, [searchTerm]);

  useEffect(() => {
    setPageBrands(brands);
  }, []);
  return (
    <Layout>
      <Head title="Food Nirvana - Our Products" />
      <div className="my-10 flex flex-col items-center gap-6">
        <h1 className="text-center text-3xl font-bold md:text-4xl">Products</h1>
        <div className="my-4 flex w-full items-center gap-4">
          <div className="flex-1">
            <input
              placeholder="Search for a product..."
              onChange={handleInput}
              className="w-full rounded-2xl border-none bg-gray-800 px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
          <div className="col">
            <select
              onChange={handleSelect}
              className="w-full rounded-2xl border-none bg-gray-800 px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
            >
              {brandCategories.map(({ name, id }) => (
                <option key={id} className="capitalize" value={id}>
                  Category: {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pageBrands.map(
            ({
              id,
              imgSrc,
              description,
              price,
              name,
              inStock,
              productType,
              categoryId,
              sold,
              stars,
              reviews,
            }) => (
              <Link
                key={id}
                href={{
                  pathname: `/products/${id}`,
                }}
              >
                <ProductCard
                  imgSrc={`/images/${imgSrc}`}
                  inStock={inStock}
                  name={name}
                  price={price}
                  productType={productType}
                  description={description}
                  id={id}
                  categoryId={categoryId}
                  stars={stars}
                  sold={sold}
                  reviews={reviews}
                />
              </Link>
            )
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
