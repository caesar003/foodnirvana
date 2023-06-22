import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: PropsType) {
  const [shown, setShown] = useState(false);
  return (
    <div className="col bg-gray-800 p-6 rounded-xl">
      <button
        onClick={() => setShown(!shown)}
        className="w-full font-bold flex justify-between items-center mb-2"
      >
        <span>{question}</span>
        {shown ? <ChevronUp /> : <ChevronDown />}
      </button>
      <p className={twMerge("text-base transition-all", shown ? "" : "hidden")}>
        {answer}
      </p>
    </div>
  );
}
