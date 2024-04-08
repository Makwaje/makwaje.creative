import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="h-[25rem] overflow-hidden rounded-lg bg-gradient-to-br from-yellow-500 to-purple-500 px-8 py-4">
      <div className="text-zinc-900">
        <h1 className="pb-4 pt-10 text-3xl font-bold md:text-6xl">
          makwaje.creative
        </h1>
        <p className="w-3/4 break-after-column text-xl md:w-1/2 md:text-3xl">
          i don&apos;t know what iam i doing, but this is a really cool website
          i guess
        </p>

        <div className="mt-16 flex flex-wrap gap-2">
          <button className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-light tracking-wide text-neutral-50 md:px-4 md:py-2 md:text-base">
            Read the resources
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-zinc-900 bg-neutral-50 px-1 py-2 text-sm font-light tracking-wide text-zinc-900 md:px-4 md:py-2 md:text-base">
            Join for free <FaLongArrowAltRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
