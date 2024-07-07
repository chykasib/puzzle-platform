import { LatestPuzzles } from "@/components/ui/LatestPuzzles";
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
      <h1 className="text-yellow-200 text-5xl text-center mx-auto my-7 font-semibold">
        Download the Free Maze
      </h1>
      <div>
        <LatestPuzzles puzzles={puzzles} />
      </div>
    </div>
  );
};

export default HomePage;
