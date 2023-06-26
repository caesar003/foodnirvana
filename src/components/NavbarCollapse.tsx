import React from "react";
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";
import { useApp } from "@hooks/useApp";

export default function NavbarCollapse() {
  const { sidebarShown, setSidebarShown } = useApp();
  return (
    <div
      className={twMerge(
        "fixed right-0 top-0 z-10 flex h-screen w-[320px] flex-col bg-gray-800 transition-all duration-300 md:hidden",
        sidebarShown ? " " : "hidden"
      )}
    >
      <div className="flex items-center justify-between p-4">
        <div></div>
        <button onClick={() => setSidebarShown(false)}>
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
