"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative -mx-3 md:-mx-4 lg:-mx-6 -mb-3 md:-mb-4 lg:-mb-6 bg-[#070E31] text-white pt-40 md:pt-48 lg:pt-56 pb-3 md:pb-4 lg:pb-6">
			{/* Decorative top-left graphic */}
			<div className="pointer-events-none select-none absolute left-6 md:left-12 lg:left-16 -top-12 md:-top-16 lg:-top-6 opacity-50" aria-hidden>
				<Image
					src="/images/footer-left-top.png"
					alt=""
					width={226}
					height={219}
					className="w-40 md:w-56 h-auto"
					priority
				/>
			</div>

			<div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-10 md:gap-12 lg:gap-16">
					{/* Brand + subscribe */}
					<div>
						<Link href="/" className="inline-flex items-center">
							<Image
								src="/images/website-logo.png"
								alt="SMS Logistics"
								width={170}
								height={40}
								className="h-auto w-44"
								priority
							/>
						</Link>
						<p className="mt-5 text-white/70 leading-relaxed max-w-md">
							Lorem Ipsum Dolor Sit Amet, Consect Etur Adi Pising Elit Sed Do
							Eiusmod Tempor Incidunt Ut Labore Et
						</p>

						<form className="mt-6 flex h-12 rounded-full overflow-hidden bg-white/10 ring-1 ring-inset ring-white/15 focus-within:ring-2 focus-within:ring-[#0A3AB6] transition-all">
							<input
								type="email"
								placeholder="Enter Your E-Mail"
								className="flex-1 bg-transparent px-5 text-white placeholder-white/60 outline-none text-sm"
								aria-label="Email address"
							/>
							<button
								type="submit"
								className="px-6 md:px-7 bg-[#0A3AB6] hover:bg-[#1532DE] text-white text-sm font-semibold transition-colors rounded-r-full"
							>
								Subscribe
							</button>
						</form>
						<div className="mt-3 text-xs text-white/60">We Don’t Send You Any Spam</div>
					</div>

					{/* Our Services */}
					<div>
						<h4 className="text-xl font-semibold">Our Services</h4>
						<div className="mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-6 space-y-3 text-white/80">
							<li><Link href="#" className="hover:text-white">Air Freight</Link></li>
							<li><Link href="#" className="hover:text-white">Smart Warehousing</Link></li>
							<li><Link href="#" className="hover:text-white">Train Freight</Link></li>
							<li><Link href="#" className="hover:text-white">Ocean Freight</Link></li>
							<li><Link href="#" className="hover:text-white">Road Freight</Link></li>
							<li><Link href="#" className="hover:text-white">Supply Chain</Link></li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xl font-semibold">Quick Links</h4>
						<div className="mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-6 space-y-3 text-white/80">
							<li><Link href="#how-it-works" className="hover:text-white">How It’s Work</Link></li>
							<li><Link href="#partners" className="hover:text-white">Partners</Link></li>
							<li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
							<li><Link href="#case-studies" className="hover:text-white">Case Studies</Link></li>
							<li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
						</ul>
					</div>

					{/* Information */}
					<div>
						<h4 className="text-xl font-semibold">Information</h4>
						<div className="mt-3 h-[3px] w-10 bg-[#28C2D5] rounded-full" />
						<ul className="mt-6 space-y-5">
							<li className="flex items-start gap-3 text-white/80">
								<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
										<path d="M12 2C7.03 2 3 6.03 3 11c0 6 9 11 9 11s9-5 9-11c0-4.97-4.03-9-9-9zm0 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 7.5 12 7.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
									</svg>
								</span>
								<div className="leading-relaxed">58 Street Commercial Road<br/>Fratton, Australia</div>
							</li>
							<li className="flex items-center gap-3 text-white/80">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
									</svg>
								</span>
								<Link href="tel:+1238889999" className="hover:text-white">+123 888 9999</Link>
							</li>
							<li className="flex items-start gap-3 text-white/80">
								<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
										<path d="M12 8v5l3 2" strokeLinecap="round"/>
										<circle cx="12" cy="12" r="9"/>
									</svg>
								</span>
								<div>Mon – Sat: 8 am – 5 pm,<br/>Sunday: CLOSED</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="mt-16 md:mt-20 border-t border-white/10">
				<div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 py-8 md:py-10 flex items-center justify-between gap-6">
					<div className="text-sm text-white/70">Copyright © {currentYear} <span className="text-white">Logistex</span> | All Right Reserved</div>
					<div className="flex items-center gap-3 md:gap-4">
						{/* Socials */}
						{[
							{ label: "Facebook", d: "M15 3h-3a5 5 0 00-5 5v3H5v4h2v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z" },
							{ label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
							{ label: "Instagram", d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 4a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 100 10 5 5 0 000-10z" },
							{ label: "YouTube", d: "M23.5 6.2a3 3 0 00-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM10 15.5v-7l6 3.5-6 3.5z" },
						].map((icon) => (
							<Link
								key={icon.label}
								href="#"
								aria-label={icon.label}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#0A3AB6] transition-colors"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
									<path d={icon.d} />
								</svg>
							</Link>
						))}

						{/* Back to top */}
						<button
							onClick={scrollToTop}
							aria-label="Back to top"
							className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3AB6] hover:bg-[#1532DE] transition-colors"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
								<path d="M12 5l-7 7M12 5l7 7" strokeLinecap="round" />
								<path d="M12 5v14" strokeLinecap="round" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}


