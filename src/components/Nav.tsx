import { FaCameraRetro } from "react-icons/fa";
function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-zinc-800/95 py-6">
      <div>
        <p className="text-xl font-semibold tracking-wider md:text-2xl">
          makwaje.creative
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="hidden cursor-pointer rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          <FaCameraRetro size={24} />
        </span>

        <button className="hidden rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          Join
        </button>

        <button className="hidden rounded-sm bg-zinc-700 px-4 py-2 text-neutral-50 md:block">
          Login
        </button>

        <button className="rounded-sm bg-neutral-100 px-4 py-2 text-zinc-800">
          Menu
        </button>
      </div>
    </nav>
  );
}

export default Nav;
