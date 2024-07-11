import { Puzzle } from "@/types";
import { MazeHoverCard } from "./MazeHoverCard";

export function MazeCard({ puzzles }: { puzzles: Puzzle[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <MazeHoverCard items={puzzles} />
    </div>
  );
}
