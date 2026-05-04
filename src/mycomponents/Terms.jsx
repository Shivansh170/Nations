export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 text-base leading-relaxed space-y-8 select-none">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            Contlas – Terms of Service
          </h1>
          <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">
            Last Updated: July 19, 2025
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed font-medium">
          Welcome to <span className="font-bold text-gray-800">Contlas</span>! These Terms
          of Service ("Terms") govern your access to and use of the Contlas
          application (the "App"), provided by <strong className="text-gray-800">Shivansh Lavaniya</strong>.
        </p>

        <p className="text-gray-600 leading-relaxed">
          By accessing or using the App, you agree to be bound by these Terms. If
          you do not agree with these Terms, you may not use the App.
        </p>

        <div className="border-t border-gray-50 pt-6 space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>1.</span>
              <span>Description of Service</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Contlas is an application that provides users with information about
              countries worldwide using public data sources such as the REST
              Countries API. Users can search for countries, view details, and
              explore related information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>2.</span>
              <span>User Responsibilities</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600 text-sm">
              <li>
                You must use the App in accordance with all applicable laws and
                regulations.
              </li>
              <li>
                You must not interfere with the integrity or performance of the App.
              </li>
              <li>
                You must not use the App for unauthorized or illegal commercial
                purposes.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>3.</span>
              <span>Intellectual Property</span>
            </h2>
            <p className="text-gray-600 text-sm">
              All design, text, code, graphics, and content in the App are owned by{" "}
              <strong className="text-gray-800">Shivansh Lavaniya</strong> and protected by intellectual
              property laws. You may not reproduce or distribute any content without
              permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>4.</span>
              <span>Disclaimers</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Information in the App is provided for general informational purposes
              only. We do not guarantee its accuracy or reliability. Use the App at
              your own risk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>5.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-gray-600 text-sm">
              To the fullest extent permitted by law, Shivansh Lavaniya is not
              liable for any damages arising from your use or inability to use the
              App.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>6.</span>
              <span>Governing Law</span>
            </h2>
            <p className="text-gray-600 text-sm">
              These Terms are governed by the laws of <strong className="text-gray-800">India</strong>,
              specifically under the jurisdiction of{" "}
              <strong className="text-gray-800">Moradabad, Uttar Pradesh</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>7.</span>
              <span>Termination</span>
            </h2>
            <p className="text-gray-600 text-sm">
              We reserve the right to terminate or suspend access to the App without
              notice for any reason, including violations of these Terms.
            </p>
          </section>
        </div>

        <footer className="pt-6 text-sm font-medium text-gray-400 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>For questions or clarifications:</span>
          <a
            href="mailto:shivanshlavaniya456@gmail.com"
            className="text-emerald-600 hover:text-emerald-500 hover:underline transition-all"
          >
            shivanshlavaniya456@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
}
