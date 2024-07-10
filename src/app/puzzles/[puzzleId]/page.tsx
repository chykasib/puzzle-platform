import { PuzzleDetails } from "@/components/ui/PuzzleDetails";
import { Puzzle } from "@/types";

interface PuzzleId {
  params: {
    puzzleId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/puzzles");
  const puzzles = await res.json();
  return puzzles.slice(0, 3).map((puzzle: Puzzle) => ({
    puzzleId: puzzle.id,
  }));
};

const PuzzleDetailPage = async ({ params }: PuzzleId) => {
  //   console.log(params);
  const res = await fetch(`http://localhost:5000/puzzles/${params.puzzleId}`, {
    cache: "no-store",
  });

  const puzzle = await res.json();
  //   console.log(blog);
  return (
    <div className="my-10">
      <PuzzleDetails puzzle={puzzle} />
    </div>
  );
};

export default PuzzleDetailPage;
