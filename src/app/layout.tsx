import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";

export const playFair = localFont({
	src: "./fonts/PlayfairDisplay.ttf",
	variable: "--font-playfair-display",
	weight: "100 900",
});
export const roboto = localFont({
	src: "./fonts/Roboto-Regular.ttf",
	variable: "--font-roboto",
	weight: "100 900",
});

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
			<body
				className={`${playFair.variable} ${roboto.variable} antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
