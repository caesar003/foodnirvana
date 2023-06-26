import Link from "next/link";
import React from "react";
import { FaEnvelopeOpenText, FaQuestion } from "react-icons/fa";

export default function Confirmation() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-4 rounded-xl border border-yellow-400 bg-gray-900">
        <div className="flex gap-2 p-2 text-xs">
          <FaQuestion />
          <span>Need help with your purchase? Contact us!</span>
        </div>
      </div>

      <div className="col-span-6 col-start-4 mt-4 flex flex-col items-center gap-4 rounded-xl bg-gray-800 p-6">
        <FaEnvelopeOpenText size={65} />
        <h3 className="text-xl">Thank your for your purchase!</h3>
        <p className="text-center text-lg text-gray-400">
          Your order has been received. Now sit tight, we&apos;ll have our courier in
          front of your door in not time!
        </p>

        <Link
          href="/"
          className=" w-full rounded-xl bg-yellow-400 p-2 text-center font-bold text-black hover:bg-indigo-950 hover:text-yellow-400"
        >
          Back to the site
        </Link>
      </div>
    </div>
  );
}
