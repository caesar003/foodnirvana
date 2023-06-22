import React, { PropsWithChildren, useEffect, useState } from "react";
import { brands, brandCategories } from "@utils/default-values";
import { Head, Layout, ProductCard } from "@components/index";
import Footer from "@components/Footer";
import { BrandInterface } from "@utils/types";

export default function Products({ children }: PropsWithChildren) {
  const [pageBrands, setPageBrands] = useState<BrandInterface[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchTerm(value);
  }
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setCategoryId(+value);
  }

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
      <div className="flex flex-col items-center my-10">
        <h1 className="text-5xl font-bold text-center">Products</h1>
        <div className="grid grid-cols-3 gap-4 my-4 w-full items-center">
          <div className="col-span-2">
            <input
              onChange={handleInput}
              className="w-full bg-gray-800 rounded-2xl p-2"
            />
          </div>
          <div className="col">
            <select
              onChange={handleSelect}
              className="bg-gray-800 w-full rounded-2xl p-3"
            >
              {brandCategories.map(({ name, id }) => (
                <option key={id} className="capitalize" value={id}>
                  Category: {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 my-4">
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
            }) => (
              <ProductCard
                key={id}
                imgSrc={`/images/${imgSrc}`}
                inStock={inStock}
                name={name}
                price={price}
                productType={productType}
                description={description}
                id={id}
                categoryId={categoryId}
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
