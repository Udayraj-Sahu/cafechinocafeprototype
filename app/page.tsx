import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";

export default function App() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="pt-20">
				<Hero />
				<MenuSection />
				<ExperienceSection />
				<ReservationSection />
			</main>
			<Footer />
		</div>
	);
}
