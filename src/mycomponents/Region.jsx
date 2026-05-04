import { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext";
import Countryplaycard from "./Countryplaycard";

export default function Region() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { region } = useContext(Appcontext);

  useEffect(() => {
    const savedRegion = localStorage.getItem("selectedRegion");
    const regionToFetch = region || savedRegion;

    if (region) {
      localStorage.setItem("selectedRegion", region);
    }

    async function fetchingResults() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${regionToFetch}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching region data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (regionToFetch) fetchingResults();
  }, [region]);

  if (loading) {
    return (
      <div className="pt-32 flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
        <div className="w-14 h-14 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-gray-500 font-medium animate-pulse text-lg tracking-wide">
          Exploring the {region || "selected"} region...
        </span>
      </div>
    );
  }

  const currentRegion = region || localStorage.getItem("selectedRegion") || "Selected Region";

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 capitalize tracking-tight flex items-center justify-center gap-3">
          <span>🌍</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            {currentRegion}
          </span>
        </h1>
        <p className="text-gray-500 mt-2 text-base max-w-2xl mx-auto font-medium">
          Discover facts, figures, and maps of all the fascinating countries located in the region of {currentRegion}.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {Array.isArray(data) &&
          data.map((e, index) => <Countryplaycard country={e} key={index} />)}
      </div>
    </div>
  );
}
