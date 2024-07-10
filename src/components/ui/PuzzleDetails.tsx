import React from "react";
import { Puzzle } from "@/types";

export function PuzzleDetails({ puzzle }: { puzzle: Puzzle }) {
  return (
    <div className="card sm:flex-none  lg:card-side h-auto w-auto bg-base-100 shadow-xl my-10 mx-10 ">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{puzzle.title}</h2>
        <p>{puzzle.details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
