import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Stars from "./Stars";


interface ReviewItem {
  date: string;
  stars: number;
  text?: string | undefined;
  isVerified: boolean;
  reply?: string;
}
interface PropsInterface {
  item: ReviewItem;
  className?: string;
}

export default function ReviewCard({ item, className }: PropsInterface) {
  const { date, stars, text, isVerified, reply } = item;
  return (
    <div
      className={twMerge(
        "border-1 rounded-lg border border-gray-900 bg-gray-800 text-gray-400",
        className
      )}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <div className="flex gap-1 text-yellow-400">
            <Stars counts={stars} />
          </div>
          <p className="text-sm font-medium">{date}</p>
        </div>
        <div className="my-4">
          <p className=" text-sm font-medium leading-relaxed text-white">
            {text}
          </p>
        </div>
        <div className="my-4 flex gap-2 rounded-lg bg-gray-900 p-2">
          <div className="border-1 border-l border-yellow-400"></div>
          <div className="py-2 pl-2">
            <p className="text-sm font-semibold text-white">{reply && reply}</p>
            <p className="my-2 mt-4 text-sm">— reply from Food Nirvana</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isVerified ? (
            <>
              <Check className="h-6 w-6 text-yellow-400" />
              <span className="text-sm font-medium">Verified Purchase</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
