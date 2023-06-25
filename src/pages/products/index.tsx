import React, { PropsWithChildren, useEffect, useState } from "react";
import { brands, brandCategories } from "@utils/default-values";
import Head from "@components/Head";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import Footer from "@components/Footer";
import { BrandInterface } from "@utils/types";
import Link from "next/link";

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
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-center text-5xl font-bold">Products</h1>
        <div className="my-4 grid w-full grid-cols-3 items-center gap-4">
          <div className="col-span-2">
            <input
              onChange={handleInput}
              className="w-full rounded-2xl bg-gray-800 p-2"
            />
          </div>
          <div className="col">
            <select
              onChange={handleSelect}
              className="w-full rounded-2xl bg-gray-800 p-3"
            >
              {brandCategories.map(({ name, id }) => (
                <option key={id} className="capitalize" value={id}>
                  Category: {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-4 grid grid-cols-3 gap-6">
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
