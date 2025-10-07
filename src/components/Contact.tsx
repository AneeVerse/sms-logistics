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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-12">
          {/* Left: Heading and contact info cards */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm font-medium text-black">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-600 inline-block" />
              CONTACT US
            </div>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl font-medium leading-tight">
              <span className="text-black">Let&apos;s Move Your</span>
              <br className="hidden sm:block" />
              <span className="text-blue-600">Business Forward</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-black max-w-xl md:text-xl sm:text-base">
              Reach out today for personalized logistics solutions our experts are here to help 24/7.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Phone */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-7 shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">Phone</div>
                    <div className="font-medium text-black text-sm sm:text-base">+91 99205 40535 / +91 99200 13830</div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-7 shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">E-mail</div>
                    <div className="font-medium text-black text-sm sm:text-base">info@smslogistics.co.in </div>
                  </div>
                </div>
              </div>

              {/* Address full width */}
              <div className="sm:col-span-2 rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-7 shadow-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-blue-700">Address</div>
                    <div className="font-medium text-black text-sm sm:text-base">
                      Sargam Apartment, C5/2 1:2,<br />
                      Sector - 4, CBD Belapur,<br />
                      Navi Mumbai - 400 614
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div>
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                Please fill out the form below, and our team will get back to you promptly.
              </h3>
              <form onSubmit={onSubmit} className="mt-5 sm:mt-6 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formState.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    placeholder="First Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                  />
                </div>

                <select
                  value={formState.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white text-black outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                  required
                >
                  <option value="" disabled>
                    Subject
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <textarea
                  value={formState.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Message"
                  className="w-full min-h-24 md:min-h-5 sm:min-h-28 rounded-xl border border-gray-300 px-4 py-3 text-black placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base resize-none"
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm sm:text-base shadow-md"
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


