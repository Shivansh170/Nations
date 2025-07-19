export default function Countryplaycard({ country }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={`${country.name.common} flag`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-500 italic mb-2">
          Official: {country.name.official}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <a
          href={country.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-blue-600 hover:underline text-sm font-medium"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
