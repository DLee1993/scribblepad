"use client";
import Menu from "./Menu";
import Account from "./Account";
import Register from "../Auth/RegisterForm";
import { usePathname } from "next/navigation";
import SignIn from "../Auth/SignInForm";
import { useState } from "react";

export default function Navbar() {
    const [signInDialogToggle, setSignInDialogToggle] = useState<boolean>(false);
    const [registerDialogToggle, setRegisterDialogToggle] = useState<boolean>(false);
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
                        <Register
                            signInToggleState={signInDialogToggle}
                            changeSignInToggleState={setSignInDialogToggle}
                            registerToggleState={registerDialogToggle}
                            changeRegisterToggleState={setRegisterDialogToggle}
                        />
                        <SignIn
                            signInToggleState={signInDialogToggle}
                            changeSignInToggleState={setSignInDialogToggle}
                            registerToggleState={registerDialogToggle}
                            changeRegisterToggleState={setRegisterDialogToggle}
                        />
                    </section>
                </nav>
            )}
        </>
    );
}
