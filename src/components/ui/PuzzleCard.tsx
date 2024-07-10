import { Puzzle } from "@/types";
import { HoverEffect } from "./card-hover-effect";

export function PuzzleCard({ puzzles }: { puzzles: Puzzle[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={puzzles} />
    </div>
  );
}
