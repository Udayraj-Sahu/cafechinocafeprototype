"use client";
import { motion } from "motion/react";
import { Coffee, Croissant, Cake, Wine } from "lucide-react";

const menuItems = [
	{
		icon: Coffee,
		category: "COFFEE",
		items: [
			{ name: "Espresso", price: "120" },
			{ name: "Flat White", price: "180" },
			{ name: "Cold Brew", price: "200" },
		],
	},
	{
		icon: Croissant,
		category: "PATISSERIE",
		items: [
			{ name: "Almond Croissant", price: "160" },
			{ name: "Pain au Chocolat", price: "150" },
			{ name: "Fruit Tart", price: "220" },
		],
	},
	{
		icon: Cake,
		category: "CAKES",
		items: [
			{ name: "Opera Cake", price: "280" },
			{ name: "Tiramisu", price: "260" },
			{ name: "Mille-feuille", price: "290" },
		],
	},
	{
		icon: Wine,
		category: "BEVERAGES",
		items: [
			{ name: "Fresh Juice", price: "140" },
			{ name: "House Tea", price: "100" },
			{ name: "Sparkling Water", price: "80" },
		],
	},
];

export function MenuSection() {
	return (
		<section className="min-h-screen px-8 md:px-12 lg:px-16 py-24 bg-[var(--color-charcoal)] text-[var(--color-marble)]">
			<div className="grid grid-cols-12 gap-8 mb-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="col-span-12 lg:col-span-4">
					<h2>Menu</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="col-span-12 lg:col-span-6 lg:col-start-7">
					<p className="opacity-70">
						Curated selections of specialty coffee, French-inspired
						pastries, and seasonal refreshments. All ingredients
						sourced with care.
					</p>
				</motion.div>
			</div>

			{/* Menu Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{menuItems.map((category, idx) => (
					<motion.div
						key={category.category}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}
						whileHover={{ y: -4 }}
						className="border border-[var(--color-marble)] border-opacity-20 p-8 transition-all duration-200 hover:border-opacity-40 hover:bg-[var(--color-marble)] hover:bg-opacity-5">
						<category.icon
							className="mb-6 text-[var(--color-sage)]"
							size={32}
							strokeWidth={1.5}
						/>

						<h4 className="mb-6 text-[var(--color-marble)]">
							{category.category}
						</h4>

						<div className="space-y-4">
							{category.items.map((item) => (
								<div
									key={item.name}
									className="flex justify-between items-baseline border-b border-[var(--color-marble)] border-opacity-10 pb-3">
									<small className="opacity-80">
										{item.name}
									</small>
									<small className="text-[var(--color-sage)]">
										₹{item.price}
									</small>
								</div>
							))}
						</div>
					</motion.div>
				))}
			</div>

			{/* Footer Note */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="mt-20 pt-12 border-t border-[var(--color-marble)] border-opacity-10">
				<small className="opacity-50">
					Prices in INR · Menu subject to seasonal availability
				</small>
			</motion.div>
		</section>
	);
}
