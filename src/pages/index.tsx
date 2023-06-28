import Footer from "@components/Footer";
import Head from "@components/Head";
import Contact from "@components/Home/Contact";
import Hero from "@components/Home/Hero";
import News from "@components/Home/News";
import Products from "@components/Home/Products";
import Reviews from "@components/Home/Reviews";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head title="Home - Food Nirvana" />
      <Hero />
      <Products />
      <News />
      <Reviews />
      <Contact />
      <Footer />
    </Layout>
  );
}
