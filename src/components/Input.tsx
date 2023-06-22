import React from "react";

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input className="bg-gray-900 p-2 rounded-xl my-1" {...props} />;
}
