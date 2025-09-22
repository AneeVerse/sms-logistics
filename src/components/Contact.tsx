"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const subjects = [
    "General Inquiry",
    "Freight Quote",
    "Partnership",
    "Support",
  ];

  function update<K extends keyof typeof formState>(key: K, value: string) {
    setFormState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, wire up an API here. For now, noop.
    console.log("Contact submit", formState);
    alert("Message sent! We'll get back to you promptly.");
    setFormState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left: Heading and contact info cards */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-red-500">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500 inline-block" />
              CONTACT INFO
            </div>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-blue-900">
              <span className="text-red-600">Connect</span> with Us Today
              <br className="hidden sm:block" /> and <span className="text-red-600">We&apos;ll Help</span> Your
              <br className="hidden sm:block" /> Business
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-600 max-w-xl text-sm sm:text-base">
              Ready to take your logistics to the next level? Contact us today to
              discover how our tailored solutions and industry expertise can
              transform your supply chain.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Phone */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">Phone</div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">E-mail</div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">support@logix.com</div>
                  </div>
                </div>
              </div>

              {/* Address full width */}
              <div className="sm:col-span-2 rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">Address</div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      123 Logistics Avenue, Suite 400, Logistics City, ST, 56789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div>
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900">
                Please fill out the form below, and our team will get back to you promptly.
              </h3>
              <form onSubmit={onSubmit} className="mt-5 sm:mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700">First Name</label>
                    <input
                      type="text"
                      value={formState.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Last Name</label>
                    <input
                      type="text"
                      value={formState.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700">Email Address</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 bg-white text-black outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                    required
                  >
                    <option value="" disabled>
                      Select one...
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Enter your message here..."
                    className="mt-1 w-full min-h-28 sm:min-h-32 rounded-xl border border-gray-300 px-3 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-full bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 active:bg-blue-900 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


