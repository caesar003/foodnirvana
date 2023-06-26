import Accordion from "@components/Accordion";
import Footer from "@components/Footer";
import Head from "@components/Head";
import Layout from "@components/Layout";
import { faqs } from "@utils/default-values";

export default function FAQ() {
  return (
    <Layout>
      <Head title="Food Nirvana - Frequently Asked Questions" />
      <div className="flex-1">
        <div className="my-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {faqs.map(({ question: q, answer: a }, idx) => (
            <Accordion key={idx} title={q} text={a} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
