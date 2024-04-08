"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card from "./Card";

function Recent() {
  useGSAP(function () {
    gsap.fromTo(
      "#g_recent_header",
      {
        y: -400,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#g_recent_header",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
      },
    );
  }, []);
  return (
    <section className="my-16">
      <div id="g_recent_header" className="mb-8 space-y-4">
        <h2 className="text-4xl">Recent resources</h2>
        <h3 className="text-xl font-bold tracking-wide">
          Read our latest articles, blogs and case studies
        </h3>
      </div>
      <div className="flex flex-wrap gap-8">
        <Card
          header="Do you really need JavaScript in 2024?"
          tags={["Recourse", "Dev"]}
        />
        <Card
          header="WordPress version 6.4 adds improvements to object caching"
          tags={["Wordpress", "Dev", "resource"]}
        />
        <Card
          header="You can’t always trust results from website carbon calculators"
          tags={["Recourse", "Web Dev"]}
        />
      </div>
    </section>
  );
}

export default Recent;
