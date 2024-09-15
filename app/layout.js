// app/layout.js
import "./globals.css";

export const metadata = {
	title: "My Blog",
	description: "A simple blog using Next.js and Django",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
