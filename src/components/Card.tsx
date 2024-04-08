"use client";
import Image from "next/image";
import { LucideArrowUpRight } from "lucide-react";
("react-icons/fa");

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  header: String;
  tags?: String[];
  color?: "white" | "zinc";
  imgSrc?: String;
  desc?: String;
};

function Card({ header, tags, color = "zinc", imgSrc, desc }: CardProps) {
  useGSAP(function () {
    gsap.fromTo(
      "#g_card",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "g_card",
          start: "top",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      },
    );
    gsap.fromTo(
      "#g_card_white",
      {
        y: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_card_white",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
      },
    );
  }, []);
  if (color === "zinc")
    return (
      <div
        id="g_card"
        className="flex min-w-[15rem] flex-1 flex-col gap-8 rounded-xl bg-zinc-700 p-8"
      >
        {tags && (
          <div className="space-x-2">
            {tags.map((tag, i) => {
              return i == 0 ? (
                <span
                  key={i}
                  className="rounded-md bg-neutral-100 px-1.5 py-1 text-xs text-zinc-900"
                >
                  {tag}
                </span>
              ) : (
                <span
                  key={i}
                  className="rounded-md bg-yellow-400 px-1.5 py-1 text-xs text-zinc-900"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        <h3 className="text-xl font-bold tracking-wide">{header}</h3>

        <p className="cursor-pointer font-medium text-cyan-300 underline underline-offset-2">
          View resource
        </p>
      </div>
    );
  else {
    return (
      <div
        id="g_card_white"
        className="flex min-w-[15rem] flex-1 flex-col gap-8 rounded-xl bg-neutral-100 p-8 text-zinc-900 duration-150 hover:scale-[1.01]"
      >
        <div className="">
          <Image
            src={imgSrc as string}
            alt="sponsor logo"
            width={header === "Atlas, Rise!" ? 100 : 200}
            height={header === "Atlas, Rise!" ? 100 : 200}
          />
        </div>

        <h3 className="text-xl font-bold tracking-wide">{header}</h3>

        <p>{desc}</p>

        <p className=" group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
          View website
          <LucideArrowUpRight
            size={20}
            className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
          />
        </p>
      </div>
    );
  }
}

export default Card;
