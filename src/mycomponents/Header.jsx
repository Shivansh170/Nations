import { useState, useContext } from "react";
import { NavLink } from "react-router";
import { Appcontext } from "./Appcontext";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { setCountry, setRegion } = useContext(Appcontext);

  const toggleDropdown = () => setIsVisible((prev) => !prev);

  const handleRegionClick = (region) => {
    setCountry("");
    setRegion(region);
  };

  const handleMobileRegionClick = (region) => {
    handleRegionClick(region);
    setIsVisible(false);
  };

  return (
    <header className="fixed w-full top-0 flex items-center justify-between z-40 border-b border-white/10 bg-black/70 backdrop-blur-md text-white px-6 py-3 select-none">
      <div className="flex items-center gap-3">
        <img
          src="/Gemini_Generated_Image_vpueuvvpueuvvpue.png"
          alt="logo"
          className="h-10 w-10 lg:h-12 lg:w-12 rounded-full ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20 object-cover"
        />
        <span className="text-2xl lg:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Contlas
        </span>
      </div>

      <div className="flex items-center">
        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
          onClick={toggleDropdown}
          aria-label="Toggle Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-16 right-6 p-4 rounded-xl bg-black/90 border border-white/10 backdrop-blur-lg shadow-2xl space-y-2 transition-all duration-300 w-48 ${
            isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          } lg:hidden z-50`}
        >
          <NavLink
            to="/"
            className="block text-white hover:text-emerald-400 font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => {
              setCountry("");
              localStorage.removeItem("country");
              setIsVisible(false);
            }}
          >
            Home
          </NavLink>
          {["africa", "asia", "europe", "north america", "south america"].map(
            (region) => (
              <NavLink
                key={region}
                to={`/region/${region.replace(" ", "")}`}
                className="block text-white hover:text-emerald-400 font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-colors capitalize"
                onClick={() => handleMobileRegionClick(region)}
              >
                {region}
              </NavLink>
            )
          )}
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium tracking-wide transition-all duration-200 px-3 py-1.5 rounded-lg border-b-2 hover:text-emerald-400 ${
              isActive ? "text-emerald-400 border-emerald-500 bg-emerald-500/10" : "border-transparent text-gray-300"
            }`
          }
          onClick={() => setCountry("")}
        >
          Home
        </NavLink>
        {["africa", "asia", "europe", "north america", "south america"].map(
          (region) => (
            <NavLink
              key={region}
              to={`/region/${region.replace(" ", "")}`}
              className={({ isActive }) =>
                `font-medium tracking-wide capitalize transition-all duration-200 px-3 py-1.5 rounded-lg border-b-2 hover:text-emerald-400 ${
                  isActive ? "text-emerald-400 border-emerald-500 bg-emerald-500/10" : "border-transparent text-gray-300"
                }`
              }
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
}
