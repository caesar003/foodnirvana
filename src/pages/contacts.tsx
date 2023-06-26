import Footer from "@components/Footer";
import Head from "@components/Head";
import Input from "@components/Input";
import Layout from "@components/Layout";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <Head title="Food Nirvana - Contact Us" />
      <form>
        <div className="mx-auto max-w-xl">
          <div className="col-span-4 col-start-2 my-10 rounded-xl bg-gray-800 p-6">
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <p className="my-2 text-sm text-gray-400">
              Use the form below to get in touch with our support team. Please
              give us up to 48 hours to respond to your ticket.
            </p>
            <div className="grid items-center justify-center pt-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-8 py-2 font-semibold transition-colors hover:bg-white hover:text-gray-900"
              >
                <Send className="h-5 w-5" /> <span>Telegram</span>
              </Link>
            </div>

            <div className="my-4 flex flex-col">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <Input
                type="text"
                placeholder="e.g Requesting support for a product I purchased"
                id="title"
                required
              />
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                id="email"
                required
              />
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="invoiceId" className="text-sm">
                Invoice ID
              </label>
              <Input
                type="text"
                placeholder="Input your 32-digit invoice id (optional)"
                id="invoiceId"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                rows={6}
                id="message"
                className="my-1 rounded-xl bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="I'd like to ask about..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-yellow-400 p-2 text-sm font-semibold text-black transition-colors hover:bg-indigo-900 hover:text-yellow-400"
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
