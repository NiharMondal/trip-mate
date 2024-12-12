import type { Metadata } from "next";
import "./globals.css";
//goggle font
import { Inter } from "next/font/google";

//redux or other providers
import Providers from "@/components/Providers";



//font initializing
const inter = Inter({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

//Root layout meta data
export const metadata: Metadata = {
	title: "Trip Mate | Home",
	description: "This is a tour and travel website. ",
};

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
