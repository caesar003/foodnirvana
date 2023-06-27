import { NewsInterface } from "@utils/types";

export default function NewsCard({item}: {item: NewsInterface}) {
  const { date, description, more, title } = item;
  return (
    <div className="border-1 max-w-sm rounded-lg border border-gray-900 bg-yellow-400 text-black">
      <div className="p-5">
        <p className="my-1 text-xs">Posted on {date}</p>
        <p className="my-2 text-2xl font-bold uppercase">{title}</p>
        <p className="my-2 text-sm leading-relaxed">{description}</p>
        <button className="mt-4 w-full rounded-lg bg-black p-2">
          <p className="text-center text-xs font-bold text-yellow-400">
            {more}
          </p>
        </button>
      </div>
    </div>
  );
}
