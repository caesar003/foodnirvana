import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import NewsCard from "@components/NewsCard";
import ProductCard from "@components/ProductCard";
import ReviewCard from "@components/ReviewCard";
import { brands, news, reviews } from "@utils/default-values";
import { ArrowRight, Send, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head title="Home - Food Nirvana" />
      <section className="flex flex-col items-center gap-12 py-16">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="my-2 text-6xl font-bold">Food Nirvana</h1>
          <p className="my-2 text-2xl text-gray-500">Hungry? Spend less!</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Link
            href="/products"
            className="rounded-lg bg-yellow-400 p-2 px-8 font-bold uppercase text-black transition-colors hover:bg-indigo-900 hover:text-white"
          >
            buy now
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-gray-800 p-2 px-8 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            <Send className="h-5 w-5" /> <span>Telegram</span>
          </Link>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              857
            </p>
            <p className="text-lg capitalize">product sold</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              363
            </p>
            <p>customers </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="flex text-3xl font-bold text-yellow-400 md:text-5xl">
              <span>5.00</span>
              <Star className="h-5 w-5" />
            </p>
            <p className="capitalize">trusted</p>
          </div>
        </div>
      </section>
      <section className="my-16">
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
      <section className="my-10 flex flex-col items-center">
        <h1 className="text-center text-5xl font-bold">News</h1>
        <div className="mt-8 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item, idx) => (
            <NewsCard key={idx} item={item} />
          ))}
        </div>
      </section>
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
      <section className="my-16 rounded-2xl bg-yellow-400  text-black">
        <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
          <p className="text-3xl font-bold md:text-5xl">
            We&apos;re here to help
          </p>
          <p className="sm:text-sm md:text-base">
            If you&apos;re in need of support a product you purchased or just
            want to say hi, <br /> please contact us by tapping the button below
          </p>
          <Link
            href="/contacts"
            className="mt-2 rounded-xl bg-gray-800 px-6 py-2 font-medium text-yellow-400 transition-colors hover:bg-white hover:text-gray-800"
          >
            Contact Support
          </Link>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
