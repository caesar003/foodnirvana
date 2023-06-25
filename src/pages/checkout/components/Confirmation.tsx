import Link from "next/link";
import React from "react";
import { FaEnvelope, FaEnvelopeOpenText, FaQuestion } from "react-icons/fa";

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
        {/* <h3>Payment Details</h3>

        <div className="flex items-center justify-between">
          <p>Invoice ID:</p>
          <p>15e7372f-e099-4786-a0f7-0d0f737c02ad</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Price:</p>
          <p>5.15</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Product:</p>
          <p>Krispy Kreme</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Payment Method:</p>
          <p>PayPa</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Invoice ID:</p>
          <p>15e7372f-e099-4786-a0f7-0d0f737c02ad</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Invoice ID:</p>
          <p>15e7372f-e099-4786-a0f7-0d0f737c02ad</p>
        </div> */}

        {/* <FaEnvelope /> */}
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
