import React from "react";
import { ReviewInterface } from "@utils/types";
import { Check, Star, StarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface PropsInterface {
  date: string;
  stars: number;
  text: string | undefined;
  isVerified: boolean;
  reply?: string;
  className?: string;
}

export default function ReviewCard(props: PropsInterface) {
  const { date, stars, text, isVerified, reply } = props;
  return (
    <div className={twMerge("bg-gray-800 text-gray-400 border border-1 border-gray-900 rounded-lg", props.className)}>
      <div className="p-5">
        <div className="flex justify-between">
          <div className="flex gap-1 text-yellow-400">
            <Stars counts={stars} />
          </div>
          <p>{date}</p>
        </div>
        <div className="my-4">
          <p className="font-bold text-white">{text}</p>
        </div>
        <div className="flex gap-2 bg-gray-900 p-2 my-4 rounded-lg">
          <div className="border-l border-1 border-yellow-400"></div>
          <div className="py-2">
            <p className="text-white font-bold my-2">{reply && reply}</p>
            <p className="text-sm my-2 mt-4">— reply from Food Nirvana</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {isVerified ? (
            <>
              <Check className="h-6 w-6 text-yellow-400" />
              <span>Verified Purchase</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export function Stars({ counts }: { counts: number }) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {new Array(counts).fill(null).map((_, idx) => (
        <Star key={idx} />
      ))}
    </div>
  );
}
