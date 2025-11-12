"use client";
import { motion } from "motion/react";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
	return (
		<footer className="px-8 md:px-12 lg:px-16 py-16 bg-[var(--color-charcoal)] text-[var(--color-marble)]">
			<div className="grid grid-cols-12 gap-8 mb-12">
				{/* Brand */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="col-span-12 md:col-span-6 lg:col-span-4">
					<h3 className="mb-4">Cafechino</h3>
					<p className="opacity-60 mb-8">
						Café & Patisserie
						<br />
						Jehan Numa Palace
					</p>

					<div className="flex gap-4">
						<motion.a
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2, ease: "linear" }}
							href="#"
							className="border border-[var(--color-marble)] border-opacity-20 p-3 hover:border-opacity-60 transition-colors duration-200">
							<Instagram size={18} strokeWidth={1.5} />
						</motion.a>
						<motion.a
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2, ease: "linear" }}
							href="#"
							className="border border-[var(--color-marble)] border-opacity-20 p-3 hover:border-opacity-60 transition-colors duration-200">
							<Facebook size={18} strokeWidth={1.5} />
						</motion.a>
						<motion.a
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2, ease: "linear" }}
							href="#"
							className="border border-[var(--color-marble)] border-opacity-20 p-3 hover:border-opacity-60 transition-colors duration-200">
							<Mail size={18} strokeWidth={1.5} />
						</motion.a>
					</div>
				</motion.div>

				{/* Quick Links */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="col-span-6 md:col-span-3 lg:col-span-2">
					<h4 className="mb-6">NAVIGATE</h4>
					<ul className="space-y-3">
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Menu
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								About
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Reserve
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Events
							</small>
						</li>
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="col-span-6 md:col-span-3 lg:col-span-2">
					<h4 className="mb-6">EXPLORE</h4>
					<ul className="space-y-3">
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Gallery
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Press
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Careers
							</small>
						</li>
						<li>
							<small className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
								Contact
							</small>
						</li>
					</ul>
				</motion.div>

				{/* Newsletter */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="col-span-12 lg:col-span-4">
					<h4 className="mb-6">STAY INFORMED</h4>
					<p className="opacity-60 mb-6">
						Subscribe for seasonal menu updates and special events.
					</p>
					<div className="flex border border-[var(--color-marble)] border-opacity-20">
						<input
							type="email"
							placeholder="EMAIL ADDRESS"
							className="flex-1 bg-transparent px-4 py-3 focus:outline-none placeholder:text-[var(--color-marble)] placeholder:opacity-30"
						/>
						<motion.button
							whileHover={{ x: 2 }}
							transition={{ duration: 0.2, ease: "linear" }}
							className="px-6 border-l border-[var(--color-marble)] border-opacity-20 hover:bg-[var(--color-marble)] hover:bg-opacity-10 transition-colors duration-200">
							→
						</motion.button>
					</div>
				</motion.div>
			</div>

			{/* Bottom Bar */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="pt-8 border-t border-[var(--color-marble)] border-opacity-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<small className="opacity-50">
					© 2025 Cafechino. All rights reserved.
				</small>
				<div className="flex gap-8">
					<small className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
						Privacy Policy
					</small>
					<small className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
						Terms of Service
					</small>
				</div>
			</motion.div>
		</footer>
	);
}
