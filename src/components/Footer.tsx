import { Copyright, LucideArrowUpRight } from "lucide-react";
function Footer() {
  return (
    <footer className="grid h-screen grid-cols-1 gap-12 md:grid-cols-2">
      <div className="md:col-span-2">
        <h2 className="my-12 text-4xl">
          Join us in making
          <br />
          <span className="font-bold">a better web</span>
        </h2>
        <br />
      </div>
      <div>
        <div>
          <h3 className="mb-4 font-bold">Our sustainability</h3>

          <ul className="space-y-6">
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Website Carbon score
              <LucideArrowUpRight
                size={20}
                className="duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Beacon score
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our green web hosting
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Ecologi forest
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <h3 className="mb-4 font-bold">Links</h3>

          <ul className="space-y-6">
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Website Carbon score
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Beacon score
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our green web hosting
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
            <li className="group flex w-fit cursor-pointer items-center font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
              View our Ecologi forest
              <LucideArrowUpRight
                size={20}
                className=" duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-auto md:col-span-2">
        <h4 className="group flex w-fit cursor-pointer items-start font-medium underline underline-offset-2 duration-200 hover:text-cyan-700">
          Created and built by Makwaje
          <LucideArrowUpRight
            size={20}
            className="duration-500 group-hover:rotate-[540deg] group-hover:text-cyan-700"
          />
        </h4>
      </div>
      <p className="flex w-fit items-center justify-end md:col-span-2">
        <Copyright className="mr-1 inline" size={16} />
        2024
      </p>
    </footer>
  );
}

export default Footer;
