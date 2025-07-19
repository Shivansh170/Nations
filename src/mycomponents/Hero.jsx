import { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext";
import { useNavigate } from "react-router";

export default function Hero() {
  const { country, setCountry, setData } = useContext(Appcontext);
  const [tempCountry, setTempCountry] = useState("Search about any country...");
  const navigate = useNavigate();

  const updateCountry = () => {
    const value =
      tempCountry !== "Search about any country..." ? tempCountry : "india";
    setCountry(value);
    localStorage.setItem("country", value);
  };

  useEffect(() => {
    const storedCountry = localStorage.getItem("country");
    if (storedCountry) {
      setCountry(storedCountry);
    }
  }, [setCountry]);
  useEffect(() => {
    async function fetchResults() {
      if (!country) return;

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );
        const tempData = await response.json();
        setData(tempData);
        localStorage.setItem("data", JSON.stringify(tempData));

        if (tempData && tempData.length > 0) {
          navigate("/finalpage");
        } else {
          alert("Country not found. Please enter a valid country name.");
        }
      } catch (err) {
        alert("An error occurred while fetching data.");
        console.error("Failed to fetch country data", err);
      }
    }

    fetchResults();
  }, [country, navigate, setData]);

  return (
    <section className="w-full h-screen z-0">
      <video
        src="Main.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-screen object-cover opacity-90 z-0"
      ></video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/3">
        <div className="flex bg-black bg-opacity-60 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search about any country..."
            value={tempCountry}
            className="flex-grow px-4 py-3 text-white bg-transparent outline-none z-10"
            onChange={(e) => setTempCountry(e.target.value)}
          />
          <button
            className="px-4 bg-gray-700 hover:bg-gray-600"
            onClick={updateCountry}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
