import Footer from "@components/Footer";
import Layout from "@components/Layout";
import ReviewCard from "@components/ReviewCard";
import { reviews } from "@utils/default-values";

export default function Reviews() {
  return (
    <Layout>
      <section>
        <div className="my-16 flex flex-col">
          <h1 className="text-3xl font-bold md:text-4xl">Reviews</h1>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {reviews.map((item, idx) => {
              return <ReviewCard key={idx} item={item} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
