import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  title: string;
  text: string;
  className?: string;
}

export default function Accordion({ title, text, className }: PropsType) {
  const [shown, setShown] = useState(false);
  return (
    <div className={twMerge("col bg-gray-800 p-6 rounded-xl", className)}>
      <button
        onClick={() => setShown(!shown)}
        className="w-full font-bold flex justify-between items-center mb-2"
      >
        <span>{title}</span>
        {shown ? <ChevronUp /> : <ChevronDown />}
      </button>
      <p className={twMerge("text-base transition-all", shown ? "" : "hidden")}>
        {text}
      </p>
    </div>
  );
}
