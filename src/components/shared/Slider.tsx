"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Slider() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapbg9c84GBllTbfc3ytSi3FpGz77k008N-v0QAT9qDOCgamtcUmyA8P-HlWgihiMwaTM&usqp=CAU",
    "https://us.123rf.com/450wm/seamartini/seamartini2205/seamartini220500392/185801706-fantastic-galaxy-space-planets-for-word-search-puzzle-game-vector-worksheet-kids-education-quiz.jpg?ver=6",
    "https://st2.depositphotos.com/2757500/10600/v/450/depositphotos_106006430-stock-illustration-educational-game-for-kids-word.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to <br /> The Puzzle-Platform
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
