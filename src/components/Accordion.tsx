import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  title: string;
  text: string;
  className?: string;
}

export default function Accordion({ title, text, className }: PropsType) {
  const [shown, setShown] = useState(false);
  return (
    <div className={twMerge("col rounded-xl bg-gray-800 p-6", className)}>
      <button
        onClick={() => setShown(!shown)}
        className="mb-2 flex w-full items-center justify-between text-sm font-bold"
      >
        <span>{title}</span>
        {shown ? <ChevronUp /> : <ChevronDown />}
      </button>
      <p
        className={twMerge(
          "text-sm text-gray-300 transition-all",
          shown ? "" : "hidden"
        )}
      >
        {text}
      </p>
    </div>
  );
}
