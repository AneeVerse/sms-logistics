import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
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
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using SMS Logistics services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-6">
              SMS Logistics provides comprehensive logistics and transportation services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Fleet ownership and contracting services</li>
              <li>Vendor network access and management</li>
              <li>Customized logistics solutions</li>
              <li>Pan-India transportation operations</li>
              <li>Commercial vehicle services (LCV, MCV, HCV)</li>
              <li>Containerized cargo movement</li>
              <li>Specialized fleet sourcing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 mb-6">
              As a client of SMS Logistics, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and complete information about your shipments</li>
              <li>Properly package and label all goods according to industry standards</li>
              <li>Pay all agreed-upon fees in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Notify us immediately of any changes to shipping requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pricing and Payment</h2>
            <p className="text-gray-700 mb-6">
              All prices are subject to change without notice. Payment terms will be specified in individual service agreements. Late payments may result in service suspension and additional charges.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liability and Insurance</h2>
            <p className="text-gray-700 mb-6">
              SMS Logistics maintains appropriate insurance coverage for our operations. Our liability is limited to the terms specified in individual service agreements. We recommend clients maintain their own insurance for high-value shipments.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Force Majeure</h2>
            <p className="text-gray-700 mb-6">
              SMS Logistics shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, weather conditions, strikes, or government actions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Prohibited Items</h2>
            <p className="text-gray-700 mb-6">
              We do not transport:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Hazardous or dangerous materials without proper authorization</li>
              <li>Illegal substances or contraband</li>
              <li>Live animals (unless specifically arranged)</li>
              <li>Perishable goods without appropriate arrangements</li>
              <li>Items prohibited by law or regulation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from our services shall be resolved through arbitration in Mumbai, Maharashtra, India, in accordance with Indian law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>SMS Logistics</strong><br />
                Navi Mumbai, Maharashtra 400614<br />
                Phone: +91 98765 43210<br />
                Email: info@smslogistics.in
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Changes to Terms</h2>
            <p className="text-gray-700">
              SMS Logistics reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
