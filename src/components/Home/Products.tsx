import ProductCard from "@components/ProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { brands } from "@utils/default-values";

export default function Products() {
  return (
    <section className="my-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-5xl font-bold">Products</h1>
        <div className="mt-4 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
          {brands.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="max-w-sm"
            >
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
        <div className="mt-6 ">
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold transition-colors hover:bg-indigo-900 hover:text-yellow-400"
          >
            <span>View all products</span>
            <ArrowRight className="h-5  w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
