import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Conversation() {
  useEffect(() => {
    const target = document.getElementById("conversation");

    gsap.fromTo(
      target,
      1,
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        duration: 5,
        opacity: 1,
        scale: 1,
        ease: "Bounce.easeOut",
      }
    );
  }, []);

  return (
    <div
      id="conversation"
      className="w-5/6 bg-slate-700 rounded-lg border-2 border-slate-200 text-slate-600 text-xl px-10 py-5 mt-5"
    >
      <div className="flex justify-center w-full text-white font-bold border-b border-white pb-3">
        <span className=" px-1 pb-0.5">conversations</span>
      </div>
      <div className="space-y-3 pt-3 px-5">
        <div className="flex justify-start">
          <div className="bg-white rounded-lg px-5 py-2">
            <span className=" px-1 pb-0.5">
              There is a duck over there, isn't there?
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-lg px-5 py-2">
            <span className=" px-1 pb-0.5">Yes, I can see it too.</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-lg px-5 py-2">
            <span className=" px-1 pb-0.5">I wonder what he's doing.</span>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-lg px-5 py-2">
            <span className=" px-1 pb-0.5">He's probably taking a walk.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
