import Layout from "@components/Layout";
import { reviews } from "@utils/default-values";
import ReviewCard from "@components/ReviewCard";
import Footer from "@components/Footer";

export default function Reviews() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-5xl font-bold text-center">Reviews</h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {reviews.map(({ date, stars, text, isVerified, reply }, idx) => {
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
      </div>
      <Footer />
    </Layout>
  );
}
