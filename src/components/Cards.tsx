"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Cards() {
  useGSAP(function () {
    gsap.fromTo(
      "#g_card1",
      {
        x: -400,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_card1",
          start: "top 80%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      "#g_card2",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_card2",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      "#g_card3",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_card3",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      "#g_card4",
      {
        x: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_card4",
          start: "top 80%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <section
      className="
    grid 
    grid-cols-1
    gap-4
    overflow-hidden
    md:grid-cols-3
    "
    >
      <div
        id="g_card1"
        className="h-full space-y-6 rounded-xl bg-neutral-100 p-6 text-zinc-800"
      >
        <h2 className="my-4 text-3xl">Did you know?</h2>

        <p>
          If the internet was a country it would be the world&apos;s
          <span className="line-through"> sixth</span> seventh biggest polluter.
        </p>

        <p>
          Together we can reduce the carbon footprint of the websites we create
          and therefore the internet as a whole.
        </p>
      </div>
      {/*  */}
      <div
        id="g_card2"
        className=" h-full space-y-6 rounded-xl bg-zinc-700 p-6 text-neutral-100 md:col-span-2"
      >
        <h2 className="my-4 text-3xl">What is the sustainable.dev?</h2>

        <p>
          The makwaje.creative is a series of developer resources, blog posts
          and long-form case studies that help to inform the web design and
          development community of the need for change and to encourage action
          to make the web greener and more sustainable.
        </p>

        <p>
          With more knowledge on which tools, web hosts and coding practices are
          more sustainable, the aim is for developers to use this knowledge to
          improve on the current state of the web.
        </p>

        <button className="rounded-md bg-zinc-900 px-4 py-2 font-light tracking-wide text-neutral-50">
          Find out more
        </button>
      </div>
      {/*  */}
      <div
        id="g_card3"
        className="h-full  space-y-6 rounded-xl  bg-gradient-to-bl from-violet-600 to-green-400/40 to-90% p-6 font-medium text-neutral-100  md:col-span-2"
      >
        <h2 className="my-4 text-3xl">Why be a sustainable developer?</h2>

        <p>
          There are over 1.1 billion websites on the internet1. All those
          websites have to be stored and loaded from a physical server somewhere
          in the world.
        </p>

        <p>
          With the average size of a web page now at over 2.4mb2 - that&apos;s a
          massive amount of data being sent and received across the internet.
        </p>

        <p>
          Sending and receiving data takes processing power. Processing power
          uses electricity and produces heat. Electricity is still being
          generated from fossil fuels more than it is from renewables3.
        </p>
      </div>
      {/*  */}
      <div
        id="g_card4"
        className="h-full  space-y-6 rounded-xl bg-orange-300/95 p-6 text-zinc-800"
      >
        <h2 className="my-4 text-3xl">Hire a sustainable developer</h2>

        <p>
          Are you looking to work with a web developer with green credentials?
        </p>

        <p>
          Do you want to make your own website more environmentally friendly but
          you&apos;re not sure how?
        </p>

        <p>
          Browse our directory of sustainable developers to work with on your
          next project.
        </p>

        <button className="rounded-md bg-zinc-900 px-4 py-2 font-light tracking-wide text-neutral-50">
          View the directory
        </button>
      </div>
      {/*  */}
    </section>
  );
}

export default Cards;
