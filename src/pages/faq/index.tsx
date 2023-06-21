import Layout from "@components/Layout";
import { Head } from "@components/index";
import React from "react";


export const metadata = {
  title: "Home - Food Nirvana",
}

export default function FAQ() {
  return (
    <Layout>
      <Head title="Food Nirvana - Frequently Asked Questions" /> 
      <div>FAQ</div>
    </Layout>
  );
}
