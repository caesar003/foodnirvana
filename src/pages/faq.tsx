import Accordion from "@components/Accordion";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Head from "@components/Head";
import React from "react";
import { faqs } from "@utils/default-values";

export default function FAQ() {
  return (
    <Layout>
      <Head title="Food Nirvana - Frequently Asked Questions" />
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-6 items-start my-10">
          {faqs.map(({ question: q, answer: a }, idx) => (
            <Accordion key={idx} question={q} answer={a} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
