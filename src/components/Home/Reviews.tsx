import React from "react";
import { reviews } from "@utils/default-values";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReviewCard from "@components/ReviewCard";

export default function Reviews() {
  return (
    <section className="my-16 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold">Reviews</h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {reviews.slice(0, 6).map((item, idx) => {
          return <ReviewCard key={idx} item={item} />;
        })}
      </div>
      <div className="mt-6 ">
        <Link
          href="/reviews"
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-8 py-2 text-center text-sm font-semibold transition-colors hover:bg-indigo-900 hover:text-yellow-400"
        >
          <span>View all reviews</span>
          <ArrowRight className="h-5  w-5" />
        </Link>
      </div>
    </section>
  );
}
