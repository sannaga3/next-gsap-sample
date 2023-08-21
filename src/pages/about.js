import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function About() {
  const [hiddenCover, setHiddenCover] = useState(false);
  const [hiddenText, setHiddenText] = useState(false);
  const ref = useRef();

  const containerStyle = `${
    hiddenCover ? "w-5/6" : "w-full"
  } h-screen bg-indigo-300 flex justify-center items-center pt-4`;
  const contentStyle = `relative ${
    hiddenText ? "" : "border-b-4"
  } text-slate-200 font-bold tracking-widest pb-4 pr-1`;
  const coverStyle = "absolute top-1 w-full h-full bg-indigo-300";

  useEffect(() => {
    const cover1 = document.getElementById("cover1");
    const cover2 = document.getElementById("cover2");
    const container = document.getElementById("container");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");

    let tl = gsap.timeline({ opacity: 0 });

    let duckSize = { width: 0, height: 0 };
    let position = { x: 0, y: 0 };
    let nextMove;

    tl.to(container, {
      duration: 1,
      opacity: 1,
    });
    tl.to(cover1, {
      duration: 1,
      x: "100%",
      ease: "power3.out",
    });
    tl.to(cover2, {
      duration: 1,
      x: "100%",
      ease: "power3.out",
    });
    tl.to(container, {
      duration: 2,
      x: 300,
      onComplete: () => {
        setHiddenCover(true);
        cover1.hidden = true;
        cover2.hidden = true;
      },
    });
    tl.to(
      container,
      {
        duration: 1,
        x: 200,
        onComplete: () => {
          text1.animate([{ opacity: 0 }], {
            duration: 500,
            fill: "forwards",
            easing: "ease-out",
          });
          text2.animate([{ opacity: 0 }], {
            duration: 500,
            fill: "forwards",
            easing: "ease-out",
          });
          setHiddenText(true);
        },
      },
      "+=1"
    );

    tl.to(
      text1,
      {
        duration: 1,
        scale: 2,
        onStart: () => {
          text1.innerHTML = "🦆";
          text2.hidden = true;
          text1.animate([{ opacity: 1 }], {
            duration: 100,
            fill: "forwards",
            easing: "ease-in",
          });
        },
        onComplete: () => {
          const duckWidth = text1.clientWidth;
          const duckHeight = text1.clientHeight;
          duckSize = { width: duckWidth, height: duckHeight };

          const reset = document.getElementById("pause");
          const resetPosition = document.getElementById("resetPosition");
          const start = document.getElementById("start");

          reset.addEventListener("click", () => {
            gsap.context(() => {
              tl.pause();
            }, tl);
          });
          resetPosition.addEventListener("click", () => {
            gsap.context(() => {
              position = { x: 0, y: 0 };

              tl.to(ref.current, {
                duration: 0.1,
                x: 0,
                y: 0,
                ease: "power4.in",
                onComplete: () => {
                  tl.pause();
                },
              });
            }, tl);
          });
          start.addEventListener("click", () => {
            gsap.context(() => {
              tl.kill();

              const newTl = gsap.timeline({ opacity: 0 });
              tl = newTl;
              startAnimation(newTl);
            }, tl);
          });

          startAnimation(tl);
        },
      },
      "+=1"
    );

    const startAnimation = (tl) => {
      nextMove = Math.floor(Math.random() * 4);
      switch (nextMove) {
        case 0:
          position.y -= duckSize.height;
          break;
        case 1:
          position.y += duckSize.height;
          break;
        case 2:
          position.x -= duckSize.width;
          break;
        case 3:
          position.x += duckSize.width;
        default:
      }

      tl.to(ref.current, {
        duration: 1,
        x: position.x,
        y: position.y,
        ease: "power1.out",
        onComplete: () => {
          startAnimation(tl);
        },
      });
    };
  }, [ref]);

  return (
    <>
      {hiddenCover && (
        <div>
          <button
            id="pause"
            type="button"
            className="absolute left-16 top-24 bg-white border-2 border-white rounded-3xl text-xl text-slate-800 font-bold px-4 py-1 hover:scale-110"
          >
            ＝
          </button>
          <button
            id="resetPosition"
            type="button"
            className="absolute left-16 top-44 bg-white border-2 border-white rounded-3xl text-xl text-slate-800 font-bold px-4 pt-2 hover:scale-110"
          >
            ↩︎
          </button>
          <button
            id="start"
            type="button"
            className="absolute left-16 top-64 bg-white border-2 border-white rounded-3xl text-xl text-slate-800 font-bold px-4 py-1 hover:scale-110"
          >
            ▷
          </button>
        </div>
      )}
      <div id="container" className={containerStyle}>
        <div>
          <div className={contentStyle}>
            <div id="text1" className="text-6xl" ref={ref}>
              Welcome to about page
            </div>
            <div id="cover1" className={coverStyle} />
          </div>
          <div className={contentStyle}>
            <div id="text2" className="text-6xl mt-20">
              There is duck walking around
            </div>
            <div id="cover2" className={coverStyle} />
          </div>
        </div>
      </div>
    </>
  );
}
