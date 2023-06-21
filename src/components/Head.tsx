import React from "react";
import Head from "next/head";

export default function AppHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="With Food Nirvana you will stop spending ridiculous amounts of money on fast food and shopping. Start saving up to 90% off your purchases!"
      />
    </Head>
  );
}
