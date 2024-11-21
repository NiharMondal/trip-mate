import type { Metadata } from "next";
import "./globals.css";
//goggle font
import { Lato ,  Roboto_Mono} from "next/font/google";

//redux or other providers
import Providers from "@/components/Providers";

// for rating
import "@smastrom/react-rating/style.css";
//font initializing
const lato = Lato({
	weight: ["100", "300", "400", "700", "900"],
	style:['normal','italic'],
	subsets: ["latin"],
	variable:'--font-lato'
});

const roboto_mono = Roboto_Mono({
	weight:["300","400","500"],
	style:["italic","normal"],
	subsets:["latin"],
	variable:"--font-roboto-mono"
})

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
			<body className={`${lato.variable} ${roboto_mono.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
