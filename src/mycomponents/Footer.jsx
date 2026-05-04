import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="w-full bg-black/90 backdrop-blur-md text-white text-xs py-5 px-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 select-none">
      <p className="text-center sm:text-left text-gray-400">
        &copy; {new Date().getFullYear()} <span className="font-bold text-white tracking-wide">Contlas</span>. All rights reserved. Built with Vite.
      </p>
      <div className="flex space-x-6 items-center">
        <NavLink
          to="/terms"
          className="text-gray-400 hover:text-emerald-400 hover:underline transition font-medium tracking-wide"
        >
          Terms
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-400 hover:text-emerald-400 hover:underline transition font-medium tracking-wide"
        >
          Contact
        </NavLink>
      </div>
    </footer>
  );
}
