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
      <div className="min-h-screen flex items-center justify-center text-center text-xl text-gray-600">
        ❌ No country data found. Please search again.
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
    <div className="min-h-screen bg-sky-50 text-gray-900 py-12 px-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        🌐 Welcome to {name}!
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2 space-y-4">
          <img
            src={flag}
            alt={`Flag of ${name}`}
            className="w-full h-auto rounded-xl shadow-md"
            loading="lazy"
          />
          <div className="space-y-2">
            <p>
              <strong>Official Name:</strong> {official}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Subregion:</strong> {subregion}
            </p>
            <p>
              <strong>Timezone:</strong> {timezone}
            </p>
            <p>
              <strong>Independent:</strong> {isIndependent}
            </p>
          </div>
          <a
            href={`https://www.google.com/search?q=${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            🔍 Search More on Google
          </a>
        </div>
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">📍 Location Map</h2>
            <iframe
              loading="lazy"
              title="Country Map"
              className="w-full h-64 rounded shadow"
              src={`https://maps.google.com/maps?q=${mapLat},${mapLng}&z=5&output=embed`}
            />
            <a
              href={`https://www.google.com/maps?q=${mapLat},${mapLng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-1 block"
            >
              ➤ Open on Google Maps
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-green-100 p-4 rounded shadow">
              <p className="text-xl font-bold">{population}</p>
              <p className="text-sm">Population</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded shadow">
              <p className="text-xl font-bold">{area.toLocaleString()} km²</p>
              <p className="text-sm">Area</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">🗣️ Languages</h3>
            <ul className="list-disc list-inside text-sm">
              {languageList.length ? (
                languageList.map((lang, i) => <li key={i}>{lang}</li>)
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">💱 Currency</h3>
            <p className="text-sm">
              {currency.name || "N/A"} ({currency.symbol || ""})
            </p>
          </div>
          {borders.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-1">🧭 Borders</h3>
              <div className="flex flex-wrap gap-2">
                {borders.map((code, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 bg-indigo-100 p-6 rounded-lg shadow text-center">
        <h2 className="text-2xl font-semibold mb-2">🎉 Did You Know?</h2>
        <p className="text-md">{funFact()}</p>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("country");
          localStorage.removeItem("data");
          window.location.href = "/";
        }}
        className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        🔁 Start Over
      </button>
    </div>
  );
}
