import React from "react";
import { NewsInterface } from "@components/types";

export default function NewsCard(props: NewsInterface) {
  const { date, description, more, title } = props;
  return (
    <div className="max-w-sm bg-yellow-400 text-black border border-1 border-gray-900 rounded-lg">
      <div className="p-5">
        <p className="text-xs my-1">Posted on {date}</p>
        <p className="text-xl my-2 uppercase font-bold">{title}</p>
        <p className="text-base my-2">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="col p-2 bg-black rounded-lg">
            <p className="text-center text-yellow-400 text-sm font-bold">
              {more}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
