"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FaCameraRetro } from "react-icons/fa";

function Nav() {
  useGSAP(function () {
    gsap.to("#logo-title", {
      opacity: 1,
      y: 0,
      duration: 1,

      ease: "back.out",
    });

    gsap.to(".g_btn", {
      y: 0,
      stagger: 0.2,

      ease: "back.out",
      duration: 1.5,
      yoyo: true,
    });
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-zinc-800/95 py-6">
      <div>
        <p
          id="logo-title"
          className=" -translate-y-20 text-xl font-semibold tracking-wider opacity-0 md:text-2xl"
        >
          makwaje.creative
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="g_btn hidden -translate-y-20 cursor-pointer rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          <FaCameraRetro size={24} />
        </span>

        <button className="g_btn hidden -translate-y-20 rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          Join
        </button>

        <button className="g_btn hidden -translate-y-20 rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          Login
        </button>

        <button className="g_btn -translate-y-20 rounded-sm bg-neutral-100 px-4 py-2 text-zinc-800">
          Menu
        </button>
      </div>
    </nav>
  );
}

export default Nav;
