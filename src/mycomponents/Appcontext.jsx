import { createContext, useState } from "react";

export const Appcontext = createContext();

export function Appprovider({ children }) {
  const [country, setCountry] = useState(() => {
    return localStorage.getItem("country") || "";
  });

  const [region, setRegion] = useState(() => {
    return localStorage.getItem("region") || "";
  });

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  const persistCountry = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("country", newCountry);
  };

  const persistRegion = (newRegion) => {
    setRegion(newRegion);
    localStorage.setItem("region", newRegion);
  };

  return (
    <Appcontext.Provider
      value={{
        country,
        setCountry: persistCountry,
        region,
        setRegion: persistRegion,
        data,
        setData,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
}
