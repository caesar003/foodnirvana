import Layout from "@components/Layout";
import NewsCard from "@components/NewsCard";
import ProductCard from "@components/ProductCard";
import ReviewCard from "@components/ReviewCard";
import Head from "@components/Head";
import { brands, reviews } from "@utils/default-values";
import { ArrowRight, Send, Star } from "lucide-react";
import Link from "next/link";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <Layout>
      <Head title="Home - Food Nirvana" />
      <div className="flex flex-col my-10">
        <div className="flex flex-col items-center">
          <h1 className="my-2 text-6xl font-bold">Food Nirvana</h1>
          <p className="my-2 text-2xl text-gray-500">Hungry? Spend less!</p>
          <Link
            href="/products"
            className="text-black uppercase font-bold bg-yellow-400 hover:bg-indigo-900 hover:text-white rounded-lg p-2 px-8 mt-2 mb-4"
          >
            buy now
          </Link>
          <Link
            href="/"
            className="font-bold bg-gray-800 text-white hover:bg-white hover:text-black rounded-lg p-2 px-8 my-4 flex items-center gap-2"
          >
            <Send className="h-5 w-5" /> <span>Telegram</span>
          </Link>
        </div>

        <div className="flex justify-between my-8">
          <div className="text-center">
            <p className="text-yellow-400 text-5xl font-bold">857</p>
            <p className="capitalize text-lg">product sold</p>
          </div>
          <div>
            <p className="text-yellow-400 text-5xl font-bold">363</p>
            <p>customers </p>
          </div>
          <div className="text-center">
            <p className="flex text-yellow-400 text-5xl font-bold">
              <span>5.00</span>
              <Star />
            </p>
            <p className="capitalize">trusted</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-5xl font-bold text-center">Products</h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {brands
            .slice(0, 6)
            .map(
              ({
                id,
                imgSrc,
                description,
                price,
                name,
                inStock,
                productType,
                categoryId,
                stars,
                reviews,
                sold,
              }) => (
                <Link key={id} href={`/products/${id}`}>
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
                    reviews={reviews}
                    sold={sold}
                  />
                </Link>
              )
            )}
        </div>
        <Link
          href="/products"
          className="m-2 flex gap-2 items-center bg-gray-800 shadow-md shadow-gray-600 rounded p-1 px-4"
        >
          <span>View all products</span>
          <ArrowRight className="h-5  w-5" />
        </Link>
      </div>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-5xl font-bold text-center">News</h1>
        <div className="grid grid-cols-3 gap-6 mt-4 items-start">
          <NewsCard
            date="Jun 16, 2023"
            description="Receiver a $5 balance reward every time you spend $50 in our store"
            more="Join us on Telegram to not miss any announcements"
            title="$5 reward"
          />
          <NewsCard
            date="June 16, 2023"
            more="Check our vouches on Telegram."
            description="Every vouch picture you send, get 10% back to your store credit of what you paid for the product. Submit to @YungGoony or @Mertinjo on Telegram."
            title="10% cashback"
          />
          <NewsCard
            date="June, 16 2023"
            title="Permanent 15% Discount For all crypto purchases"
            description="Use code 'CRYPTO' at checkout to apply the discount and continue paying with your chosen crypto."
            more="Join us on telegram for daily discounts and promotions!"
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-5xl font-bold text-center">Reviews</h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {reviews
            .slice(0, 6)
            .map(({ date, stars, text, isVerified, reply }, idx) => {
              return (
                <ReviewCard
                  key={idx}
                  date={date}
                  stars={stars}
                  text={text}
                  isVerified={isVerified}
                  reply={reply}
                />
              );
            })}
        </div>
        <Link
          href="/reviews"
          className="m-2 flex gap-2 items-center bg-gray-800 shadow-md shadow-gray-600 rounded p-1 px-4"
        >
          <span>View all reviews</span>
          <ArrowRight className="h-5  w-5" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3 bg-yellow-400 text-black py-6 rounded-lg my-10">
        <p className="font-bold text-5xl">We&apos;re here to help</p>
        <p className="text-lg">
          If you&apos;re in need of support a product you purchased or just want
          to say hi, <br /> please contact us by tapping the button below
        </p>
        <Link
          href="/contacts"
          className="text-yellow-400 bg-gray-800 hover:bg-white hover:text-gray-800 py-2 px-6 rounded-xl"
        >
          Contact Support
        </Link>
      </div>

      <Footer />
    </Layout>
  );
}
