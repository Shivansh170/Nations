import { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext";
import { useNavigate } from "react-router";

export default function Hero() {
  const { country, setCountry, setData } = useContext(Appcontext);
  const [tempCountry, setTempCountry] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();

  const updateCountry = () => {
    const value = tempCountry.trim() !== "" ? tempCountry.trim() : "india";
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

      setFetchingData(true);
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
      } finally {
        setFetchingData(false);
      }
    }

    fetchResults();
  }, [country, navigate, setData]);

  return (
    <section className="relative w-full h-screen z-0 bg-gray-950">
      {/* Video Loader Overlay */}
      {!videoLoaded && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-950 flex flex-col items-center justify-center z-20 select-none">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-white text-lg font-roboto tracking-wide animate-pulse">
            Setting up the experience...
          </span>
        </div>
      )}

      {/* Main Search Loader Overlay */}
      {fetchingData && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/75 flex flex-col items-center justify-center z-30 select-none">
          <div className="w-14 h-14 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-white text-lg font-medium tracking-wider animate-pulse">
            Fetching country data...
          </span>
        </div>
      )}

      <video
        src="Main.mp4"
        autoPlay
        muted
        loop
        onCanPlayThrough={() => setVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-screen object-cover opacity-90 z-0"
      ></video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/3">
        <div className="flex bg-black bg-opacity-60 rounded-md overflow-hidden border border-gray-700 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Search about any country..."
            value={tempCountry}
            className="flex-grow px-4 py-3 text-white bg-transparent outline-none z-10 font-roboto"
            onChange={(e) => setTempCountry(e.target.value)}
          />
          <button
            className="px-6 bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center disabled:opacity-50"
            onClick={updateCountry}
            disabled={fetchingData}
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
