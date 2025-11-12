import "./globals.css";
import type { ReactNode } from "react";
import { Space_Mono, Cormorant_Garamond } from "next/font/google";

const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-space-mono",
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-cormorant",
});

export const metadata = {
	title: "Cafechino",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${spaceMono.variable} ${cormorant.variable}`}>
			<body>{children}</body>
		</html>
	);
}
