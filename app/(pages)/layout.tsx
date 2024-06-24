import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scribblepad",
    description: "Created with next.js, tailwind css, shadcn ui",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/images/favicon.ico" />
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
