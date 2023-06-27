import { Star } from "lucide-react";

export default function Stars({ counts }: { counts: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {new Array(counts).fill(null).map((_, idx) => (
        <Star className="h-4 w-4" key={idx} />
      ))}
    </div>
  );
}
