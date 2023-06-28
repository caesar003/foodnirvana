import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="my-16 rounded-2xl bg-yellow-400  text-black">
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
        <p className="text-3xl font-bold md:text-5xl">
          We&apos;re here to help
        </p>
        <p className="sm:text-sm md:text-base">
          If you&apos;re in need of support a product you purchased or just want
          to say hi, <br /> please contact us by tapping the button below
        </p>
        <Link
          href="/contacts"
          className="mt-2 rounded-xl bg-gray-800 px-6 py-2 font-medium text-yellow-400 transition-colors hover:bg-white hover:text-gray-800"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
}
