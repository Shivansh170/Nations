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
    <header className="fixed w-full top-0 flex items-center justify-between z-10 border-solid border-b-2 bg-black bg-opacity-60 text-white border-opacity-25 border-black py-1">
      <div className="flex items-center gap-2">
        <img
          src="/Gemini_Generated_Image_vpueuvvpueuvvpue.png"
          alt="logo"
          className="h-12 w-12 lg:h-16 lg:w-16 rounded-full"
        />
        <h1 className="text-3xl font-bold tracking-wider">Contlas</h1>
      </div>
      <div className="mr-4 flex items-center">
        <button className="lg:hidden ml-2" onClick={toggleDropdown}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div
          className={`absolute top-16 right-4 p-4 rounded-md bg-white shadow-md space-y-2 transition-all duration-300 ${
            isVisible ? "block" : "hidden"
          } lg:hidden`}
        >
          <NavLink
            to="/"
            className="block text-gray-800 hover:text-gray-600 font-medium"
            onClick={() => {
              setCountry("");
              localStorage.removeItem("country");
            }}
          >
            Home
          </NavLink>
          {["africa", "asia", "europe", "north america", "south america"].map(
            (region) => (
              <NavLink
                key={region}
                to={`/region/${region.replace(" ", "")}`}
                className="block text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => handleMobileRegionClick(region)}
              >
                {region[0].toUpperCase() + region.slice(1)}
              </NavLink>
            )
          )}
        </div>
      </div>

      <nav className="hidden lg:flex gap-4 items-center">
        <NavLink
          to="/"
          className="hover:text-green-600 font-medium"
          onClick={() => setCountry("")}
        >
          Home
        </NavLink>
        {["africa", "asia", "europe", "north america", "south america"].map(
          (region) => (
            <NavLink
              key={region}
              to={`/region/${region.replace(" ", "")}`}
              className="hover:text-green-600 font-medium"
              onClick={() => handleRegionClick(region)}
            >
              {region[0].toUpperCase() + region.slice(1)}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
}
