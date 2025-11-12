"use client";
import { motion } from "motion/react";

const experiences = [
	{
		number: "01",
		title: "Architecture",
		description:
			"Colonial-era structure with soaring ceilings, geometric tile work, and floor-to-ceiling windows that frame the garden.",
	},
	{
		number: "02",
		title: "Garden Setting",
		description:
			"Shaded terrace seating among heritage trees and curated greenery. Natural light filters through throughout the day.",
	},
	{
		number: "03",
		title: "Craft & Quality",
		description:
			"Every pastry is made in-house by our patissiers. Coffee beans roasted to specification, extracted with precision.",
	},
];

export function ExperienceSection() {
	return (
		<section className="min-h-screen px-8 md:px-12 lg:px-16 py-24">
			<div className="grid grid-cols-12 gap-8">
				{/* Left - Large Title */}
				<div className="col-span-12 lg:col-span-5">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}>
						<small className="text-[var(--color-sage)] mb-6 block">
							THE CAFECHINO EXPERIENCE
						</small>
						<h2 className="mb-8">Where structure meets serenity</h2>
					</motion.div>
				</div>

				{/* Right - Experience Cards */}
				<div className="col-span-12 lg:col-span-7 space-y-0">
					{experiences.map((exp, idx) => (
						<motion.div
							key={exp.number}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.15 }}
							className="border-b border-[var(--color-charcoal)] border-opacity-10 py-12 first:pt-0 last:border-0">
							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-2">
									<h4 className="text-[var(--color-sage)]">
										{exp.number}
									</h4>
								</div>
								<div className="col-span-10">
									<h3 className="mb-4">{exp.title}</h3>
									<p className="opacity-70 max-w-lg">
										{exp.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Image Grid */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="grid grid-cols-3 gap-4 mt-24">
				<div className="col-span-3 md:col-span-2 h-[400px] border border-[var(--color-charcoal)] border-opacity-10 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-marble)] via-[var(--color-sage)] to-[var(--color-gold)] opacity-20"></div>
					<div className="absolute bottom-6 left-6">
						<small className="opacity-60">Main Dining Hall</small>
					</div>
				</div>
				<div className="col-span-3 md:col-span-1 h-[400px] border border-[var(--color-charcoal)] border-opacity-10 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-sage)] opacity-20"></div>
					<div className="absolute bottom-6 left-6">
						<small className="opacity-60">Garden Terrace</small>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
