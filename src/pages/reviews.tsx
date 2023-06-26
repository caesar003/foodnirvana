import Footer from "@components/Footer";
import Layout from "@components/Layout";
import ReviewCard from "@components/ReviewCard";
import { reviews } from "@utils/default-values";

export default function Reviews() {
  return (
    <Layout>
      <section>
        <div className="my-16 flex flex-col">
          <h1 className="text-4xl font-bold">Reviews</h1>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
      </section>
      <Footer />
    </Layout>
  );
}
