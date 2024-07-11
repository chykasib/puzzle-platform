"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden my-auto">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "These mazes are a perfect blend of fun and challenge! My kids loved navigating through the creative twists and turns.",
    name: "Emily Johnson",
    title: "Mother of Two",
  },
  {
    quote:
      "I've never seen my students so engaged! The animated mazes are both educational and entertaining. Highly recommend!",
    name: "Mr. Anderson",
    title: "Elementary School Teacher",
  },
  {
    quote:
      "The mazes on this site are a dream come true for puzzle enthusiasts. Each one is more captivating than the last.",
    name: "Sarah Mitchell",
    title: "Puzzle Lover",
  },
  {
    quote:
      "A must-have for parents looking to combine fun and learning. My children can't get enough of these mazes!",
    name: "Laura Smith",
    title: "Parent",
  },
  {
    quote:
      "I decided to try these mazes to keep my kids entertained during our sailing trip. They were a huge hit!",
    name: "Captain Jack",
    title: "Sailor and Father",
  },
];
