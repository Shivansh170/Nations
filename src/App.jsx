import { useState, useEffect } from "react";
import { Footer } from "./mycomponents/Footer";
import Header from "./mycomponents/Header";
import { Outlet } from "react-router";
import { Appcontext } from "./mycomponents/Appcontext";

export default function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const [region, setRegion] = useState(() => {
    return localStorage.getItem("selectedRegion") || "africa";
  });

  useEffect(() => {
    if (region) {
      localStorage.setItem("selectedRegion", region);
    }
  }, [region]);

  return (
    <Appcontext.Provider
      value={{ country, data, setCountry, setData, region, setRegion }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Appcontext.Provider>
  );
}
