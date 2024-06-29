"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogContent,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogHeader,
    AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { LockClosedIcon, TrashIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { ThemeToggle } from "../Theme/ThemeToggle";

export default function Account() {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    const [toggleLogout, setToggleLogout] = useState<boolean>(false);
    const [toggleDeleteAccount, setToggleDeleteAccount] = useState<boolean>(false);

    const toggleLogoutDialog = () => setToggleLogout(!toggleLogout);
    const toggleDeleteAccountDialog = () => setToggleDeleteAccount(!toggleLogout);

    const changeMenuStatus = () => {
        setMenuStatus(!menuStatus);
    };

    return (
        <>
            <DropdownMenu open={menuStatus} onOpenChange={setMenuStatus}>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" className="p-2 rounded-full w-10 h-10">
                        <ProfileAvatar />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 dark:bg-[var(--dark)]">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-base md:text-sm p-0">
                        {/* !!!! DO NOT SHOW FOR GUEST ACCOUNT !!!! */}
                        <Link
                            href="/profile"
                            className="w-full h-full px-2 py-1.5 flex justify-between items-center"
                            onClick={changeMenuStatus}
                        >
                            Profile <PersonIcon />
                        </Link>
                    </DropdownMenuItem>
                    <ThemeToggle />
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-base md:text-sm flex justify-between items-center"
                        onClick={toggleLogoutDialog}
                    >
                        Logout
                        <LockClosedIcon />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-base md:text-sm flex justify-between items-center"
                        onClick={toggleDeleteAccountDialog}
                    >
                        {/* !!!! DO NOT SHOW FOR GUEST ACCOUNT !!!! */}
                        Delete Account <TrashIcon />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* LOGOUT DIALOG */}
            <AlertDialog open={toggleLogout} onOpenChange={setToggleLogout}>
                <AlertDialogContent
                    className="w-4/5 sm:w-auto sm:max-w-lg dark:bg-[var(--dark)] border-2 border-slate-50"
                    aria-describedby="logout of account"
                >
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-base">
                            Confirm you want to Logout?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-950">
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => console.log("Account deleted")}
                            className="bg-[var(--accent)] dark:bg-[var(--accent)] text-[var(--light)] dark:text-[var(--light)] dark:hover:text-[var(--dark)]"
                        >
                            Logout
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {/* DELETE ACCOUNT DIALOG */}
            <AlertDialog open={toggleDeleteAccount} onOpenChange={setToggleDeleteAccount}>
                <AlertDialogContent
                    className="w-4/5 sm:w-auto sm:max-w-lg dark:bg-[var(--dark)] border-2 border-slate-50"
                    aria-describedby="delete account"
                >
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-base">
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-950">
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => console.log("Account deleted")}
                            className="bg-[var(--accent)] dark:bg-[var(--accent)] text-[var(--light)] dark:text-[var(--light)] dark:hover:text-[var(--dark)]"
                        >
                            Delete Account
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

{
    /**
    <ul id="menuList">
                        {pageLinks.map(({ href, pageName, icon }, i) => (
                            <li key={i} id={`link-${i}`}>
                                <Link
                                    href={href}
                                    onClick={changeMenuStatus}
                                    className={`link ${
                                        pathname === `/${pageName}` ? "active" : ""
                                    }`}
                                >
                                    {pageName}
                                    <span>{icon}</span>
                                </Link>
                            </li>
                        ))}
                    </ul> 
                    
                    import { ReaderIcon, CalendarIcon, CheckboxIcon, DesktopIcon } from "@radix-ui/react-icons";
                    */
}
