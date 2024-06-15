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
    const [toggleLogout, setToggleLogout] = useState<boolean>(false);
    const [toggleDeleteAccount, setToggleDeleteAccount] = useState<boolean>(false);

    const toggleLogoutDialog = () => setToggleLogout(!toggleLogout);
    const toggleDeleteAccountDialog = () => setToggleDeleteAccount(!toggleLogout);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" className="p-2 rounded-full w-10 h-10">
                        <ProfileAvatar />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 dark:bg-[var(--background)]">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="dropdownItem text-base md:text-sm focus:bg-slate-950 focus:text-slate-50 dark:focus:bg-slate-50 dark:focus:text-slate-950 p-0">
                        {/* !!!! DO NOT SHOW FOR GUEST ACCOUNT !!!! */}
                        <Link href="/settings" className="block w-full h-full px-2 py-1.5">
                            Profile <PersonIcon />
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="dropdownItem text-base md:text-sm focus:bg-red-600 focus:text-slate-50 dark:focus:bg-red-600 dark:focus:text-slate-50"
                        onClick={toggleLogoutDialog}
                    >
                        Logout
                        <LockClosedIcon />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="dropdownItem text-base md:text-sm focus:bg-red-600 focus:text-slate-50 dark:focus:bg-red-600 dark:focus:text-slate-50"
                        onClick={toggleDeleteAccountDialog}
                    >
                        {/* !!!! DO NOT SHOW FOR GUEST ACCOUNT !!!! */}
                        Delete Account <TrashIcon />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <ThemeToggle />
                </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialog open={toggleLogout} onOpenChange={setToggleLogout}>
                <AlertDialogContent className="w-4/5 sm:w-auto sm:max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-md">
                            Confirm you want to Logout?
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={toggleDeleteAccount} onOpenChange={setToggleDeleteAccount}>
                <AlertDialogContent className="w-4/5 sm:w-auto sm:max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-md">
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-950">
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
