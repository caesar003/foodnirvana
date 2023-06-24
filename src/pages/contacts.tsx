import Footer from "@components/Footer";
import Input from "@components/Input";
import Layout from "@components/Layout";
import Head from "@components/Head";
import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <Layout>
      <Head title="Food Nirvana - Contact Us" />
      <form>
        <div className="grid grid-cols-6 justify-center">
          <div className="bg-gray-800 col-span-4 col-start-2 p-6 my-10 rounded-xl">
            <h1 className="text-5xl">Contact Us</h1>
            <p className="text-gray-400 my-2">
              Use the form below to get in touch with our support team. Please
              give us up to 48 hours to respond to your ticket.
            </p>
            <div className="grid justify-center items-center p-4">
              <Link href="/" className="flex gap-3">
                <Send />
                <span>Telegram</span>
              </Link>
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="title" className="text-lg">
                Title
              </label>
              <Input
                type="text"
                placeholder="e.g Requesting support for a product I purchased"
                id="title"
                required
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="invoiceId" className="text-lg">
                Invoice ID
              </label>
              <Input
                type="text"
                placeholder="Input your 32-digit invoice id (optional)"
                id="invoiceId"
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                rows={6}
                id="message"
                className="bg-gray-900 p-2 rounded-xl"
                placeholder="I'd like to ask about..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-indigo-800 hover:text-yellow-400 rounded-lg p-2 mt-4 text-lg"
            >
              Create Ticket
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </Layout>
  );
}
