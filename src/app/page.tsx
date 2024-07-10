import AnimationData from "@/components/ui/AnimationData";
import { PuzzleCard } from "@/components/ui/PuzzleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to puzzle platform!",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/puzzles", {
    next: {
      revalidate: 30,
    },
  });
  const puzzles = await res.json();
  console.log(puzzles);
  return (
    <div>
      <div>
        <AnimationData />
      </div>
      <div>
        <h1 className=" text-yellow-200 text-5xl text-center mx-auto my-7 font-semibold lg:flex-none">
          Download the Free Maze
        </h1>
        <div>
          <PuzzleCard puzzles={puzzles} />
        </div>
      </div>
      <div>
        <h1 className=" text-yellow-200 text-5xl text-center mx-auto my-7 font-semibold lg:flex-none">
          Download the Free WordSearch Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
