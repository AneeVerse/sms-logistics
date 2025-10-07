import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-8">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Your message has been sent successfully. Our team will get back to you within 24 hours.
          </p>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <p className="text-gray-700">
                  Our logistics experts will review your requirements and prepare a customized solution.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <p className="text-gray-700">
                  We&apos;ll contact you via phone or email to discuss your logistics needs in detail.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <p className="text-gray-700">
                  You&apos;ll receive a detailed quote and proposal tailored to your business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need immediate assistance?
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Phone:</strong> 
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 ml-2">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <strong>Email:</strong> 
                <a href="mailto:info@smslogistics.co.in" className="text-blue-600 hover:text-blue-700 ml-2">
                  info@smslogistics.co.in
                </a>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/#our-solution"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-xl text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
