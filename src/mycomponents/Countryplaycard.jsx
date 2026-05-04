export default function Countryplaycard({ country }) {
  return (
    <div className="bg-white/90 border border-gray-100 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full group">
      <div>
        <div className="overflow-hidden h-44 relative">
          <img
            src={country.flags?.svg || country.flags?.png}
            alt={`${country.name.common} flag`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-white ring-1 ring-white/20 select-none">
            {country.region}
          </div>
        </div>
        <div className="p-5 flex-grow">
          <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight truncate">
            {country.name.common}
          </h2>
          <p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-3 line-clamp-1">
            {country.name.official}
          </p>
          <div className="space-y-1.5 text-sm">
            <p className="text-gray-600 flex justify-between">
              <strong className="text-gray-500 font-medium">Capital:</strong> 
              <span className="font-semibold text-gray-800">{country.capital?.[0] || "N/A"}</span>
            </p>
            <p className="text-gray-600 flex justify-between">
              <strong className="text-gray-500 font-medium">Population:</strong> 
              <span className="font-semibold text-gray-800">{country.population.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-2">
        <a
          href={country.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md select-none group"
        >
          <span>View Map</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
