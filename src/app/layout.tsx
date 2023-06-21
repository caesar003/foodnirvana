import Navbar from "@components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Nirvana",
  description:
    "With Food Nirvana you will stop spending ridiculous amounts of money on fast food and shopping. Start saving up to 90% off your purchases!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-start p-10">
          <div className="w-[1030px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
