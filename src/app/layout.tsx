
import "./globals.css";
//goggle font
import { Inter } from "next/font/google";

//redux or other providers
import Providers from "@/components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Trip Mate - Your Travel Companion",
	description:
		"Discover your next adventure with Trip Mate. Plan trips, find companions, and explore the world.",
};

//font initializing
const inter = Inter({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
