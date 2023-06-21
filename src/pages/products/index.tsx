import Layout from "@components/Layout";
import { Head } from "@components/index";
import React, { PropsWithChildren } from "react";

export default function Products({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Head title="Food Nirvana - Our Products" />
      <div>products</div>
    </Layout>
  );
}
