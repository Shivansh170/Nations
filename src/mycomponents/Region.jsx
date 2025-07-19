import { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext";
import Countryplaycard from "./Countryplaycard";

export default function Region() {
  const [data, setData] = useState([]);
  const { region } = useContext(Appcontext);

  useEffect(() => {
    const savedRegion = localStorage.getItem("selectedRegion");
    const regionToFetch = region || savedRegion;

    if (region) {
      localStorage.setItem("selectedRegion", region);
    }

    async function fetchingResults() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${regionToFetch}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching region data:", error);
      }
    }

    if (regionToFetch) fetchingResults();
  }, [region]);

  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {Array.isArray(data) &&
        data.map((e, index) => <Countryplaycard country={e} key={index} />)}
    </div>
  );
}
