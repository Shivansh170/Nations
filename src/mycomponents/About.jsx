export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center select-none transform hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center text-3xl font-bold rounded-full mx-auto mb-6 shadow-lg shadow-emerald-500/25">
          SL
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
          Hi! I'm Shivansh Lavaniya
        </h1>
        <p className="text-gray-500 text-base font-medium mb-6">
          Creator & Developer of Contlas
        </p>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto text-sm">
          Contlas is a modern, fast, and educational exploration tool designed to dive deep into country geographic information, demographic figures, and localized maps.
        </p>
      </div>
    </div>
  );
}
