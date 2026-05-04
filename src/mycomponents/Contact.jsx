export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-28 pb-16 px-4">
      <div className="max-w-xl w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-8 space-y-6 text-center select-none transform hover:-translate-y-1 transition-all duration-300">
        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-2">
          Contact Information
        </h1>

        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mx-auto">
          We'd love to hear from you. For any inquiries, feedback, or support regarding Contlas, please get in touch.
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-50">
          <div className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100/75 rounded-2xl border border-gray-100/50 transition-colors">
            <span className="text-2xl mb-1">📧</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</span>
            <span className="font-bold text-gray-800 text-base">
              shivanshlavaniya456@gmail.com
            </span>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100/75 rounded-2xl border border-gray-100/50 transition-colors">
            <span className="text-2xl mb-1">📍</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Location</span>
            <span className="font-bold text-gray-800 text-base">
              Moradabad, Uttar Pradesh, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
