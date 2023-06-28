import React from "react";
import { news } from "@utils/default-values";
import NewsCard from "@components/NewsCard";

export default function News() {
  return (
    <section className="my-10 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold">News</h1>
      <div className="mt-8 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-3">
        {news.map((item, idx) => (
          <NewsCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
