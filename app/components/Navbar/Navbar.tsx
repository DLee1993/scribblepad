"use client";

import Menu from "./Menu";
import Account from "./Account";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8 xl:px-10 border-b-2 border-slate-950/10 dark:border-slate-50/10">
            <section className="flex justify-center items-center gap-x-4 md:gap-x-8">
                <Menu />
                {pathname === "/" && (
                    <h2 className="font-medium hidden sm:block">Hello [firstname],</h2>
                )}
            </section>
            <section className="flex justify-center items-center gap-x-4">
                <ThemeToggle />
                <Account />
            </section>
        </nav>
    );
}
