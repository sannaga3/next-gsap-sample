import { useEffect } from "react";
import { gsap } from "gsap";
import Card from "./card";

export default function CardContainer() {
  useEffect(() => {
    gsap.fromTo(
      ".cardList div",
      1,
      {
        opacity: 0,
        x: 50,
      },
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
        stagger: {
          each: 0.5,
          from: "start",
          onComplete: () => {
            gsap.to(".cardList div", {
              rotateY: 360,
              stagger: {
                each: 0.5,
              },
            });
          },
        },
      }
    );
  }, []);

  return (
    <div className="cardList w-full flex justify-around">
      <Card title="my" content="this is the word my" className="w-1/4" />
      <Card title="name" content="this is the word name" className="w-1/4" />
      <Card title="is" content="this is the word is" className="w-1/4" />
      <Card title="duck" content="this is the word duck" className="w-1/4" />
    </div>
  );
}
