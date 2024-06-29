import type { Metadata } from "next";
import Account from "../components/Navbar/Account";

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
        <>
            <nav className="w-full flex justify-between items-center">
                <h1 className="text-md font-bold">Scribblepad</h1>
                <Account />
            </nav>
            {children}
        </>
    );
}
