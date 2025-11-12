"use client";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<motion.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 lg:px-16 py-6 bg-[var(--color-marble)] bg-opacity-95 backdrop-blur-sm border-b border-[var(--color-charcoal)] border-opacity-5">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div>
						<h4 className="tracking-wider">CAFECHINO</h4>
						<small className="text-[var(--color-sage)]">
							JEHAN NUMA PALACE
						</small>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-12">
						<small className="cursor-pointer hover:text-[var(--color-sage)] transition-colors duration-200">
							MENU
						</small>
						<small className="cursor-pointer hover:text-[var(--color-sage)] transition-colors duration-200">
							EXPERIENCE
						</small>
						<small className="cursor-pointer hover:text-[var(--color-sage)] transition-colors duration-200">
							RESERVE
						</small>
						<small className="cursor-pointer hover:text-[var(--color-sage)] transition-colors duration-200">
							CONTACT
						</small>
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden border border-[var(--color-charcoal)] border-opacity-20 p-2">
						<Menu size={20} />
					</motion.button>
				</div>
			</motion.nav>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-40 bg-[var(--color-charcoal)] text-[var(--color-marble)] flex items-center justify-center"
					onClick={() => setIsOpen(false)}>
					<div className="text-center space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}>
							<h3 className="cursor-pointer hover:text-[var(--color-sage)] transition-colors">
								Menu
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}>
							<h3 className="cursor-pointer hover:text-[var(--color-sage)] transition-colors">
								Experience
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}>
							<h3 className="cursor-pointer hover:text-[var(--color-sage)] transition-colors">
								Reserve
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}>
							<h3 className="cursor-pointer hover:text-[var(--color-sage)] transition-colors">
								Contact
							</h3>
						</motion.div>
					</div>
				</motion.div>
			)}
		</>
	);
}
