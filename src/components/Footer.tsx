"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

	return (
		<footer className="relative bg-[#070E31] text-white pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-3 md:pb-4 lg:pb-6 overflow-x-hidden">
			{/* Decorative top-left graphic */}
			<div className="pointer-events-none select-none absolute left-4 sm:left-6 md:left-12 lg:left-16 -top-8 sm:-top-12 md:-top-16 lg:-top-6 opacity-50" aria-hidden>
				<Image
					src="/images/footer-left-top.png"
					alt=""
					width={226}
					height={219}
					className="w-32 sm:w-40 md:w-56 h-auto"
					priority
				/>
			</div>

			<div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16">
					{/* Brand + subscribe */}
					<div className="sm:col-span-2 lg:col-span-1">
						<Link href="/" className="inline-flex items-center gap-3">
							<Image
								src="/images/SMS LOGO.png"
								alt="SMS Logistics"
								width={50}
								height={50}
								className="w-10 sm:w-12 h-auto"
								priority
							/>
							<span className="text-xl sm:text-2xl font-extrabold text-[#12486f] -ml-3">
								SMS LOGISTICS
							</span>
						</Link>
						<p className="mt-4 sm:mt-5 text-white/70 leading-relaxed max-w-md text-sm sm:text-base">
							Driving your business forward with a fleet you can trust.
						</p>

						<form className="mt-5 sm:mt-6 flex h-10 sm:h-12 rounded-full overflow-hidden bg-white/10 ring-1 ring-inset ring-white/15 focus-within:ring-2 focus-within:ring-[#0A3AB6] transition-all">
							<input
								type="email"
								placeholder="Enter Your E-Mail"
								className="flex-1 bg-transparent px-4 sm:px-5 text-white placeholder-white/60 outline-none text-sm"
								aria-label="Email address"
							/>
							<button
								type="submit"
								className="px-4 sm:px-6 md:px-7 bg-[#0A3AB6] hover:bg-[#1532DE] text-white text-sm font-semibold transition-colors rounded-r-full"
							>
								Subscribe
							</button>
						</form>

						{/* Social icons */}
						<div className="mt-5 sm:mt-6 flex items-center gap-2 sm:gap-3">
							{[
								{ label: "Instagram", href: "https://www.instagram.com/sms_logistics25?igsh=MWFscDl0YzI3MHdraw==", d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 4a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 100 10 5 5 0 000-10z" },
								{ label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-sharma-42323a37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
							].map((icon) => (
								<Link
									key={icon.label}
									href={icon.href}
									target={icon.href.startsWith('http') ? '_blank' : undefined}
									rel={icon.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									aria-label={icon.label}
									className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#0A3AB6] transition-colors"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4">
										<path d={icon.d} />
									</svg>
								</Link>
							))}
						</div>
					</div>

					{/* Our Services */}
					<div>
						<h4 className="text-lg sm:text-xl font-semibold">Our Services</h4>
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-blue-600 rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Fleet Ownership</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Vendor Network</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Customized Logistics</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Pan-India Operations</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Commercial Vehicles</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Specialized Fleet</Link></li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-blue-600 rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
							<li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
							<li><Link href="#services" className="hover:text-white transition-colors">About Us</Link></li>
							<li><Link href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
							<li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
							<li><Link href="#our-solution" className="hover:text-white transition-colors">Our Solutions</Link></li>
						</ul>
					</div>

					{/* Information */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h4 className="text-lg sm:text-xl font-semibold">Information</h4>
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-blue-600 rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
							<li className="flex items-start gap-2 sm:gap-3 text-white/80">
								<span className="mt-0.5 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M12 2C7.03 2 3 6.03 3 11c0 6 9 11 9 11s9-5 9-11c0-4.97-4.03-9-9-9zm0 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 7.5 12 7.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
									</svg>
								</span>
								<div className="leading-relaxed text-sm sm:text-base">Sargam Apartment, C5/2 1:2,<br/>Sector - 4, CBD Belapur,<br/>Navi Mumbai - 400 614</div>
							</li>
							<li className="flex items-center gap-2 sm:gap-3 text-white/80">
								<span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
									</svg>
								</span>
								<Link href="tel:+919920540535" className="hover:text-white transition-colors text-sm sm:text-base">+91 99205 40535 / +91 99200 13830</Link>
							</li>
							<li className="flex items-center gap-2 sm:gap-3 text-white/80">
								<span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
									</svg>
								</span>
								<Link href="mailto:info@smslogistics.co.in " className="hover:text-white transition-colors text-sm sm:text-base">info@smslogistics.co.in </Link>
							</li>
							<li className="flex items-start gap-2 sm:gap-3 text-white/80">
								
							
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="mt-12 sm:mt-16 md:mt-20 border-t border-white/10">
				<div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 pt-6 sm:pt-8">
					<div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0 gap-4">
						
						{/* Left Side - Copyright */}
						<div className="text-center sm:text-left lg:text-left order-2 sm:order-1 lg:order-1">
							<span className="text-sm text-white/70">© 2025 SMS Logistics. All rights reserved.</span>
						</div>

						{/* Center - Privacy Policy and Terms of Service */}
						<div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-6 text-sm text-white/70 order-3 sm:order-3 lg:order-2">
							<Link href="/privacy-policy" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Privacy Policy</Link>
							<span className="text-white/40">|</span>
							<Link href="/terms-of-service" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Terms of Service</Link>
						</div>

						 <div className="text-center lg:mr-10 lg:text-right order-1 lg:order-3">
              <a 
                href="https://www.aneeverse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-end space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="whitespace-nowrap">Designed & Managed by Aneeverse</span>
                <Image
                  src="/images/aneeverse-logo.svg"
                  alt="Aneeverse"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </a>
            </div>
					</div>
				</div>
			</div>
		</footer>
	);
}


