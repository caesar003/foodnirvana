import Navbar from "@components/components/Navbar";
import NewsCard from "@components/components/NewsCard";
import ProductCard from "@components/components/ProductCard";
import ReviewCard from "@components/components/ReviewCard";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="">
        <h1 className="text-3xl font-bold text-center">Products</h1>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <ProductCard
            imgSrc="/images/asap.jpeg"
            inStock={true}
            name="Wendy's"
            price={0.22}
            productType=""
            description={[""]}
          />
          <NewsCard
            date="Jun 16, 2023"
            title="$5 reward"
            description="Receive a $5 balance reward every time you spend $50 in our store."
            more="Join us on Telegram to not miss any announcements!"
          />

          <ReviewCard
            isVerifiedPurchase={true}
            stars={5}
            submittedSince="3 hours ago"
            text="Worked perfectly!"
            repliedText={["Thanks for shopping with us: )"]}
          />
        </div>
      </div>
    </div>
  );
}
