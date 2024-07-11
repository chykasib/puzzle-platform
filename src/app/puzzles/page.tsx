"use client";
import { MazeCard } from "@/components/ui/MazeCard";
import { useGetPuzzlesQuery } from "@/redux/api/baseApi";

// export const metadata: Metadata = {
//   title: "Puzzles Page",
//   description:
//     "This a puzzle section here contain three parts maze, wordSearch, sudoku etc",
// };

const PuzzlesPage = () => {
  const { data: puzzles, isLoading, isError, error } = useGetPuzzlesQuery("");
  console.log(puzzles);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className=" text-yellow-200 text-5xl text-center mx-auto my-7 font-semibold lg:flex-none">
        Enjoy the Maze And Download the Free Maze
      </h1>
      <div>
        <MazeCard puzzles={puzzles} />
      </div>
    </div>
  );
};

export default PuzzlesPage;
