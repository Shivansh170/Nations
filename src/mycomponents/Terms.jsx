export default function Terms() {
  return (
    <div className="mt-20 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 text-base leading-relaxed space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        Contlas – Terms of Service
      </h1>
      <p className="text-sm italic text-gray-500">
        Last Updated: July 19, 2025
      </p>

      <p>
        Welcome to <span className="font-semibold">Contlas</span>! These Terms
        of Service ("Terms") govern your access to and use of the Contlas
        application (the "App"), provided by <strong>Shivansh Lavaniya</strong>.
      </p>

      <p>
        By accessing or using the App, you agree to be bound by these Terms. If
        you do not agree with these Terms, you may not use the App.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">
          1. Description of Service
        </h2>
        <p>
          Contlas is an application that provides users with information about
          countries worldwide using public data sources such as the REST
          Countries API. Users can search for countries, view details, and
          explore related information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">
          2. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
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

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">
          3. Intellectual Property
        </h2>
        <p>
          All design, text, code, graphics, and content in the App are owned by{" "}
          <strong>Shivansh Lavaniya</strong> and protected by intellectual
          property laws. You may not reproduce or distribute any content without
          permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">4. Disclaimers</h2>
        <p>
          Information in the App is provided for general informational purposes
          only. We do not guarantee its accuracy or reliability. Use the App at
          your own risk.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">
          5. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, Shivansh Lavaniya is not
          liable for any damages arising from your use or inability to use the
          App.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">
          6. Governing Law
        </h2>
        <p>
          These Terms are governed by the laws of <strong>India</strong>,
          specifically under the jurisdiction of{" "}
          <strong>Moradabad, Uttar Pradesh</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to the App without
          notice for any reason, including violations of these Terms.
        </p>
      </section>

      <footer className="pt-6 text-sm text-gray-600 border-t">
        For questions, please contact us at{" "}
        <a
          href="mailto:contact@contlas.com"
          className="text-blue-600 hover:underline"
        >
          shivanshlavaniya456@gmail.com
        </a>
        .
      </footer>
    </div>
  );
}
