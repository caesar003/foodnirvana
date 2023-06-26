import React from "react";

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      className="my-1 rounded-xl border-none bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      {...props}
    />
  );
}
