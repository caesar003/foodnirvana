import Layout from "@components/Layout";
import NewsCard from "@components/NewsCard";
import ProductCard from "@components/ProductCard";
import ReviewCard from "@components/ReviewCard";
import Head from "@components/Head";
import { brands } from "@utils/default-values";

export default function Home() {
  return (
    <Layout>
      <Head title="Home - Food Nirvana" />
      <div className="">
        <h1 className="text-3xl font-bold text-center">Products</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {brands.map(
            ({
              id,
              imgSrc,
              description,
              price,
              name,
              inStock,
              productType,
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
              />
            )
          )}
       
        </div>
      </div>
    </Layout>
  );
}
