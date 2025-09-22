"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative -mx-3 md:-mx-4 lg:-mx-6 -mb-3 md:-mb-4 lg:-mb-6 bg-[#070E31] text-white pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-3 md:pb-4 lg:pb-6">
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
						<Link href="/" className="inline-flex items-center">
							<Image
								src="/images/website-logo.png"
								alt="SMS Logistics"
								width={170}
								height={40}
								className="h-auto w-36 sm:w-44"
								priority
							/>
						</Link>
						<p className="mt-4 sm:mt-5 text-white/70 leading-relaxed max-w-md text-sm sm:text-base">
							Lorem Ipsum Dolor Sit Amet, Consect Etur Adi Pising Elit Sed Do
							Eiusmod Tempor Incidunt Ut Labore Et
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
								{ label: "Facebook", d: "M15 3h-3a5 5 0 00-5 5v3H5v4h2v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z" },
								{ label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
								{ label: "WhatsApp", d: "M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C8.96 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.5 14.36c-.24.69-1.2 1.26-1.97 1.42-.52.11-1.2.21-3.49-.75-2.91-1.22-4.8-4.15-4.95-4.34-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.02-2.41.27-.29.59-.36.79-.36s.4.01.57.01c.18 0 .43-.07.67.51.24.59.83 2.02.9 2.17.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.38-.41.51-.14.15-.28.31-.12.61.16.3.71 1.17 1.53 1.89 1.05.93 1.94 1.22 2.21 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.13.45.2.52.31.07.11.07.64-.17 1.33z" },
								{ label: "Instagram", d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 4a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 100 10 5 5 0 000-10z" },
								{ label: "YouTube", d: "M23.5 6.2a3 3 0 00-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM10 15.5v-7l6 3.5-6 3.5z" },
							].map((icon) => (
								<Link
									key={icon.label}
									href="#"
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
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
							<li><Link href="#" className="hover:text-white transition-colors">Air Freight</Link></li>
							<li><Link href="#" className="hover:text-white transition-colors">Smart Warehousing</Link></li>
							<li><Link href="#" className="hover:text-white transition-colors">Train Freight</Link></li>
							<li><Link href="#" className="hover:text-white transition-colors">Ocean Freight</Link></li>
							<li><Link href="#" className="hover:text-white transition-colors">Road Freight</Link></li>
							<li><Link href="#" className="hover:text-white transition-colors">Supply Chain</Link></li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
							<li><Link href="#how-it-works" className="hover:text-white transition-colors">How It's Work</Link></li>
							<li><Link href="#partners" className="hover:text-white transition-colors">Partners</Link></li>
							<li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
							<li><Link href="#case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
							<li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
						</ul>
					</div>

					{/* Information */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h4 className="text-lg sm:text-xl font-semibold">Information</h4>
						<div className="mt-2 sm:mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
							<li className="flex items-start gap-2 sm:gap-3 text-white/80">
								<span className="mt-0.5 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M12 2C7.03 2 3 6.03 3 11c0 6 9 11 9 11s9-5 9-11c0-4.97-4.03-9-9-9zm0 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 7.5 12 7.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
									</svg>
								</span>
								<div className="leading-relaxed text-sm sm:text-base">58 Street Commercial Road<br/>Fratton, Australia</div>
							</li>
							<li className="flex items-center gap-2 sm:gap-3 text-white/80">
								<span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
									</svg>
								</span>
								<Link href="tel:+1238889999" className="hover:text-white transition-colors text-sm sm:text-base">+123 888 9999</Link>
							</li>
							<li className="flex items-start gap-2 sm:gap-3 text-white/80">
								<span className="mt-0.5 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
										<path d="M12 8v5l3 2" strokeLinecap="round"/>
										<circle cx="12" cy="12" r="9"/>
									</svg>
								</span>
								<div className="text-sm sm:text-base">Mon – Sat: 8 am – 5 pm,<br/>Sunday: CLOSED</div>
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
							<span className="text-sm text-white/70">© 2025 Tiger Terrain. All rights reserved.</span>
						</div>

						{/* Center - Privacy Policy and Terms of Service */}
						<div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-6 text-sm text-white/70 order-3 sm:order-3 lg:order-2">
							<Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Privacy Policy</Link>
							<span className="text-white/40">|</span>
							<Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Terms of Service</Link>
						</div>

						{/* Right Side - Aneeverse Credit */}
						<div className="text-center sm:text-right lg:text-right order-1 sm:order-2 lg:order-3">
							<Link 
								href="https://www.aneeverse.com/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center justify-center sm:justify-end lg:justify-end space-x-2 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
							>
								<span className="whitespace-nowrap">Designed & Managed by Aneeverse</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}


