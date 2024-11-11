import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Providers from "@/components/Providers";

//font initializing
const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
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
			<body className={`${lato.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
