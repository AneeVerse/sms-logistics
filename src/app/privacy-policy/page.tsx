import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2025
          </p>
          <div className="mt-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              At SMS Logistics, we collect information that you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Request a quote for our logistics services</li>
              <li>Contact us through our website or phone</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Create an account or register for our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide and improve our logistics services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you service updates and promotional communications</li>
              <li>Process transactions and manage your account</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>With trusted service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>SMS Logistics</strong><br />
                Navi Mumbai, Maharashtra 400614<br />
                Phone: +91 98765 43210<br />
                Email: info@smslogistics.in
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
