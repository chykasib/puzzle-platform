import { LatestPuzzles } from "@/components/ui/LatestPuzzles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to puzzle platform!",
};

const HomePage = async () => {
  // const res = await fetch("http://localhost:5000/puzzles", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });
  // const blogs = await res.json();
  // console.log(blogs);
  return (
    <div>
      <LatestPuzzles />
    </div>
  );
};

export default HomePage;
