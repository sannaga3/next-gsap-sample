import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function walkingDuck() {
  const ref = useRef();

  function splitWidthIntoArray(totalWidth, interval) {
    const result = [];
    for (let i = 0; i < totalWidth; i += interval) {
      result.push(i);
    }
    return result;
  }

  useEffect(() => {
    const width = ref.current.clientWidth;
    const interval = 30;
    const stepWidthArray = splitWidthIntoArray(width, interval);
    const stepLength = [...Array(stepWidthArray.length * 2).keys()];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    stepLength.forEach((index) => {
      if (index % 2 === 0) {
        tl.to(ref.current, { y: 0, duration: 0.2 });
        tl.to(ref.current, {
          x: -stepWidthArray[index / 2],
          duration: 0.5,
        });
      } else {
        tl.to(ref.current, { y: 5, duration: 0.2 });
      }
    });
  }, [ref]);

  return (
    <div ref={ref} className="flex justify-end items-center">
      <div className="text-6xl">🦆</div>
    </div>
  );
}
