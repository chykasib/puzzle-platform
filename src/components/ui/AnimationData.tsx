"use client";
import React from "react";
import Lottie, { useLottie } from "lottie-react";
import AnimationDatas from "../ui/Animation - 1720623608478.json";
const AnimationData = () => {
  const options = {
    animationData: AnimationDatas,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div>
      <>{View}</>
    </div>
  );
};

export default AnimationData;
