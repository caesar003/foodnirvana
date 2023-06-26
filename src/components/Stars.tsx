import { Star } from "lucide-react";

export default function Stars({ counts }: { counts: number }) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {new Array(counts).fill(null).map((_, idx) => (
        <Star key={idx} />
      ))}
    </div>
  );
}
