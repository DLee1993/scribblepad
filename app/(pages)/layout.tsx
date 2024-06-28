import type { Metadata } from "next";
import { ThemeProvider } from "../themeprovider";

export const metadata: Metadata = {
    title: "Scribblepad",
    description: "Created with next.js, tailwind css, shadcn ui",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}
