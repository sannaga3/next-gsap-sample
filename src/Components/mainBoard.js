import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WalkingDuck from "./walkingDuck";
import Conversation from "./conversation";

export default function MainBoard() {
  const ref = useRef();

  const moveToRedAndBlue = () =>
    gsap.to(ref.current, {
      backgroundImage: "linear-gradient(to right, #77a1d0, #79cbc9, #e684a0)",
      duration: 3,
      onComplete: () => {
        moveToBlueAndRed();
      },
    });

  const moveToBlueAndRed = () =>
    gsap.to(ref.current, {
      backgroundImage: "linear-gradient(to right, #e684a0, #79cbc9, #77a1d0)",
      duration: 3,
      onComplete: () => {
        moveToRedAndBlue();
      },
    });

  useEffect(() => {
    moveToRedAndBlue();
  }, [ref]);

  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <h1 className="text-slate-600 text-3xl pt-20">
        The backgroundColor of this area changes per 5 seconds
      </h1>

      <Conversation className="conversation" />

      <div className="w-5/6 pt-16 mb-2">
        <WalkingDuck />
      </div>
    </div>
  );
}
