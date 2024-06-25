"use client";

import { usePathname } from "next/navigation";
import Account from "./Account";
import SignIn from "../Auth/SignIn";

type Props = {
    signInOpen: boolean;
    changeSignIn: (open: boolean) => void;
};

export default function Navbar({ signInOpen, changeSignIn }: Props) {
    //TODO only show navbar content based on session, if no session, no navbar
    const pathname = usePathname();
    return (
        <>
            {pathname !== "/" ? (
                <nav>
                    <section className="flex justify-center items-center gap-x-4">
                        <Account />
                    </section>
                </nav>
            ) : (
                <nav>
                    <section className="flex justify-center items-center gap-x-4">
                        <SignIn signInOpen={signInOpen} changeSignIn={changeSignIn} />
                    </section>
                </nav>
            )}
        </>
    );
}
