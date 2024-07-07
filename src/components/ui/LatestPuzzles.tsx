import { Puzzle } from "@/types";
import { HoverEffect } from "../ui/card-hover-effect";

export function LatestPuzzles({ puzzles }: { puzzles: Puzzle[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={puzzles} />
    </div>
  );
}
