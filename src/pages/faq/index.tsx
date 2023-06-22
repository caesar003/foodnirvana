import Accordion from "@components/Accordion";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Head from "@components/Head";
import React from "react";

export default function FAQ() {
  return (
    <Layout>
      <Head title="Food Nirvana - Frequently Asked Questions" />
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-6 items-start my-10">
          <Accordion
            question="Will I get product instantly?"
            answer="Yet, it will be instant. Cryptocurrency purchases can take a little longer, you will receive your product(-s) as soon as there are confirmations in the transaction."
          />
          <Accordion
            question='How do I use "X" products?'
            answer="You will receive the latest methods and instructions on how to use a product if it's said so in the description."
          />
          <Accordion question="Is this USA only?" answer="Yes." />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
