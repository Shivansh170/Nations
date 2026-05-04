import { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext";

export default function Finalpage() {
  const { data: contextData } = useContext(Appcontext);
  const [data, setData] = useState(contextData || []);

  useEffect(() => {
    if (!contextData || contextData.length === 0) {
      const stored = localStorage.getItem("data");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setData(parsed);
        } catch (e) {
          console.error("Error parsing localStorage data", e);
        }
      }
    }
  }, [contextData]);

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <div className="text-5xl mb-4">🌍</div>
        <p className="text-xl font-bold text-gray-800 mb-2">No country data found.</p>
        <p className="text-gray-500 max-w-sm">Please return to the homepage and try searching for another country.</p>
        <button
          onClick={() => {
            localStorage.removeItem("country");
            localStorage.removeItem("data");
            window.location.href = "/";
          }}
          className="mt-6 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl shadow transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const country = data[0];

  const name = country?.name?.common || "N/A";
  const official = country?.name?.official || "N/A";
  const capital = country?.capital?.[0] || "N/A";
  const population = country?.population?.toLocaleString() || "N/A";
  const region = country?.region || "N/A";
  const subregion = country?.subregion || "N/A";
  const flag = country?.flags?.svg || "/default-flag.svg";
  const currency = Object.values(country?.currencies || {})[0] || {};
  const languageList = Object.values(country?.languages || {});
  const borders = country?.borders || [];
  const area = country?.area || 0;
  const mapLat = country?.latlng?.[0];
  const mapLng = country?.latlng?.[1];
  const timezone = country?.timezones?.[0] || "N/A";
  const isIndependent = country?.independent ? "Yes 🎉" : "No";

  const funFact = () => {
    const facts = [
      `🌍 ${name} has an area of ${area.toLocaleString()} km².`,
      `💬 Primary languages spoken: ${languageList.join(", ")}.`,
      `💰 Currency of ${name} is ${currency.name || "N/A"} (${
        currency.symbol || ""
      })`,
      `🧭 Located in the ${subregion} of ${region}.`,
      `🕐 Timezone: ${timezone}.`,
    ];
    return facts[Math.floor(Math.random() * facts.length)];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
          Welcome to {name}
        </h1>
        <p className="text-gray-500 mt-2 text-lg font-medium">Explore key facts, figures, and geographic details.</p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left column: Flag & Basics */}
        <div className="lg:w-1/2 flex flex-col justify-between h-full space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-grow">
            <img
              src={flag}
              alt={`Flag of ${name}`}
              className="w-full h-auto max-h-[340px] object-contain bg-gray-50 rounded-xl shadow-inner mb-6"
              loading="lazy"
            />
            <div className="space-y-3.5 text-base border-t border-gray-100 pt-4">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <strong className="text-gray-500 font-medium">Official Name:</strong>
                <span className="font-semibold text-gray-800 text-right">{official}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <strong className="text-gray-500 font-medium">Capital:</strong>
                <span className="font-semibold text-gray-800 text-right">{capital}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <strong className="text-gray-500 font-medium">Region:</strong>
                <span className="font-semibold text-gray-800 text-right">{region}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <strong className="text-gray-500 font-medium">Subregion:</strong>
                <span className="font-semibold text-gray-800 text-right">{subregion}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <strong className="text-gray-500 font-medium">Timezone:</strong>
                <span className="font-semibold text-gray-800 text-right">{timezone}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-500 font-medium">Independent:</strong>
                <span className="font-semibold text-gray-800 text-right">{isIndependent}</span>
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/search?q=${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3.5 rounded-2xl transition-colors shadow-sm select-none"
          >
            🔍 Learn more on Google
          </a>
        </div>

        {/* Right column: Interactive maps & Additional Facts */}
        <div className="lg:w-1/2 flex flex-col justify-between h-full space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>📍</span>
                <span>Location Map</span>
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm relative h-64 bg-gray-50">
                <iframe
                  loading="lazy"
                  title="Country Map"
                  className="w-full h-full"
                  src={`https://maps.google.com/maps?q=${mapLat},${mapLng}&z=5&output=embed`}
                />
              </div>
              <a
                href={`https://www.google.com/maps?q=${mapLat},${mapLng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 font-medium underline mt-2.5 block text-sm select-none"
              >
                ➤ Open on Google Maps
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100 text-center flex flex-col justify-center h-24">
                <p className="text-2xl font-black text-emerald-800 tracking-tight">{population}</p>
                <p className="text-xs font-semibold uppercase text-emerald-600 mt-1 tracking-wide">Population</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border border-blue-100 text-center flex flex-col justify-center h-24">
                <p className="text-2xl font-black text-blue-800 tracking-tight">{area.toLocaleString()} km²</p>
                <p className="text-xs font-semibold uppercase text-blue-600 mt-1 tracking-wide">Area</p>
              </div>
            </div>

            <div className="border-t border-gray-50 pt-4 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🗣️</span>
                  <span>Languages</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languageList.length ? (
                    languageList.map((lang, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-xl text-xs">
                        {lang}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400">N/A</span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span>💱</span>
                  <span>Currency</span>
                </h3>
                <span className="bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded-xl text-xs border border-emerald-100 inline-block">
                  {currency.name || "N/A"} ({currency.symbol || ""})
                </span>
              </div>
            </div>

            {borders.length > 0 && (
              <div className="border-t border-gray-50 pt-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🧭</span>
                  <span>Land Borders</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {borders.map((code, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 font-medium border border-gray-200/50 px-2.5 py-1 rounded-xl text-xs hover:bg-gray-200/60 cursor-default transition-colors"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-6 rounded-2xl border border-emerald-100/50 shadow-sm text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-teal-900 mb-2 flex items-center justify-center gap-2">
          <span>🎉</span>
          <span>Did You Know?</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto font-medium">{funFact()}</p>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => {
            localStorage.removeItem("country");
            localStorage.removeItem("data");
            window.location.href = "/";
          }}
          className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-2xl border border-red-200 hover:border-red-300 transition-all shadow-sm select-none hover:scale-102 flex items-center justify-center gap-2 mx-auto"
        >
          <span>🔁</span>
          <span>Start Search Over</span>
        </button>
      </div>
    </div>
  );
}
