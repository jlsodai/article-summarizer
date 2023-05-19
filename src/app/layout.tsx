import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Cairo | Open AI GPT-4 powered Article Summarizer",
	description:
		"This project uses Open AI GPT-4 to summarize website text or article. All you need to do is provide URL of website or article.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
