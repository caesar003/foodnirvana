import { Send } from "lucide-react";
import { paths } from "@utils/paths";
import Link from "next/link";
import SellpassLogo from "./SellpassLogo";

export default function Footer() {
  return (
    <div className="flex flex-col justify-around gap-3 rounded-lg bg-gray-800 p-6 text-white">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <p className="text-base font-bold md:text-xl">Food Nirvana</p>
          <p className="mt-4 text-sm font-medium uppercase leading-relaxed text-gray-300">
            with food nirvana you will stop spending ridiculous amount of money
            on fast food and shopping. <br />
            start saving up to 90% off your purchases!
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-4 md:col-span-2">
          <p className="text-base font-bold uppercase md:text-xl">tabs</p>
          <ul className="flex flex-col gap-2">
            {paths.map(({ label, path }) => (
              <li key={label}>
                <Link
                  className="text-sm font-semibold hover:text-yellow-400"
                  href={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 flex flex-col gap-4 md:col-span-2">
          <p className="text-base font-bold uppercase md:text-xl">social</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <Send className="h-4 w-4" />
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-sm md:text-base">Food Nirvana &copy; 2023</span>
        <SellpassLogo title="Powered by" />
      </div>
    </div>
  );
}
