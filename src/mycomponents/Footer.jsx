import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-90 text-white text-sm py-4 px-6 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <p className="text-center sm:text-left">
        &copy; {new Date().getFullYear()} Contlas. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <NavLink
          to="/terms"
          className="hover:text-gray-300 transition duration-150"
        >
          <h1>Terms</h1>
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-gray-300 transition duration-150"
        >
          <h1>Contact</h1>
        </NavLink>
      </div>
    </footer>
  );
}
