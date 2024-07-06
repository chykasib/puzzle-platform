"use server";

import { Puzzle } from "@/types";

export const createPuzzle = async (data: Puzzle) => {
  const res = await fetch("http://localhost:5000/puzzles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const PuzzleInfo = await res.json();
  return PuzzleInfo;
};
