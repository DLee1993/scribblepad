"use client";

import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    HamburgerMenuIcon,
    ReaderIcon,
    CalendarIcon,
    CheckboxIcon,
    GearIcon,
    PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    const pathname = usePathname();

    const changeMenuStatus = () => {
        setMenuStatus(!menuStatus);
    };

    return (
        <nav className="flex justify-between items-center p-4 border-b-2 border-slate-100">
            <Sheet open={menuStatus} onOpenChange={setMenuStatus}>
                <SheetTrigger>
                    <HamburgerMenuIcon className="size-6" />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="flex flex-col justify-start items-start py-6 px-3 sm:max-w-[18rem]"
                >
                    <SheetHeader>
                        <SheetTitle className="font-bold text-md pl-3">
                            <Link href="/" onClick={changeMenuStatus}>
                                Scribblepad
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <section className="flex flex-col justify-between items-start flex-1 w-full mt-10 capitalize">
                        <ul id="menuList">
                            <li>
                                <Link
                                    href="/notes"
                                    onClick={changeMenuStatus}
                                    className={`link ${pathname === "/notes" ? "active" : ""}`}
                                >
                                    <span>
                                        <ReaderIcon />
                                    </span>
                                    notes
                                </Link>
                            </li>
                            <li>
                                <Link href="/tasks" onClick={changeMenuStatus}>
                                    <span>
                                        <CheckboxIcon />
                                    </span>
                                    tasks
                                </Link>
                            </li>
                            <li>
                                <Link href="/calendar" onClick={changeMenuStatus}>
                                    <span>
                                        <CalendarIcon />
                                    </span>
                                    calendar
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <Separator />
                    <SheetFooter className="w-full">
                        <ul id="menuList">
                            <li>
                                <Link href="/support" onClick={changeMenuStatus}>
                                    <span>
                                        <PersonIcon />
                                    </span>
                                    support
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" onClick={changeMenuStatus}>
                                    <span>
                                        <GearIcon />
                                    </span>
                                    settings
                                </Link>
                            </li>
                        </ul>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            <p>other nav things</p>
        </nav>
    );
}
