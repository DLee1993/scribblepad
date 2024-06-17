"use client";
import Menu from "./Menu";
import Account from "./Account";
import Register from "../Auth/Register";
import { usePathname } from "next/navigation";
import SignIn from "../Auth/SignIn";

export default function Navbar() {
    //TODO only show navbar content based on session, if no session, no navbar
    const pathname = usePathname();
    return (
        <>
            {pathname !== "/" ? (
                <nav className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8 xl:px-10 border-b-2 border-slate-950/10 dark:border-slate-50/10">
                    <Menu />
                    <section className="flex justify-center items-center gap-x-4">
                        <Account />
                    </section>
                </nav>
            ) : (
                <nav className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8 xl:px-10">
                    <h1 className="text-md font-medium">Scribblepad</h1>
                    <section className="flex justify-center items-center gap-x-4">
                        <Register />
                        <SignIn />
                    </section>
                </nav>
            )}
        </>
    );
}
