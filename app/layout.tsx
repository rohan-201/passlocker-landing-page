import "./globals.css";
import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dot-gothic-16",
});

export const metadata = {
	title: "Passlocker",
	description: "Password manager on Solana",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${dotGothic16.variable} font-bitmap`}>
			<body>{children}</body>
		</html>
	);
}
