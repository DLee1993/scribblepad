"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    HamburgerMenuIcon,
    ReaderIcon,
    CalendarIcon,
    CheckboxIcon,
    GearIcon,
    PersonIcon,
} from "@radix-ui/react-icons";

export default function Menu() {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    const pathname = usePathname();

    const changeMenuStatus = () => {
        setMenuStatus(!menuStatus);
    };

    return (
        <Sheet open={menuStatus} onOpenChange={setMenuStatus}>
            <SheetTrigger>
                <HamburgerMenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="flex flex-col justify-start items-start py-6 px-3 sm:max-w-[18rem] capitalize"
            >
                <SheetHeader>
                    <SheetTitle className="font-bold text-md pl-3">
                        <Link href="/" onClick={changeMenuStatus}>
                            Scribblepad
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <section className="flex flex-col justify-between items-start flex-1 w-full mt-10">
                    <ul id="menuList">
                        <li>
                            <Link
                                href="/"
                                onClick={changeMenuStatus}
                                className={`link ${pathname === "/" ? "active" : ""}`}
                            >
                                <span>
                                    <ReaderIcon />
                                </span>
                                notes
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tasks"
                                onClick={changeMenuStatus}
                                className={`link ${pathname === "/tasks" ? "active" : ""}`}
                            >
                                <span>
                                    <CheckboxIcon />
                                </span>
                                tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/calendar"
                                onClick={changeMenuStatus}
                                className={`link ${pathname === "/calendar" ? "active" : ""}`}
                            >
                                <span>
                                    <CalendarIcon />
                                </span>
                                calendar
                            </Link>
                        </li>
                    </ul>
                </section>
                <Separator />
                <SheetFooter className="w-full" id="footer">
                    <Link
                        href="/support"
                        onClick={changeMenuStatus}
                        className={`w-full flex justify-start items-center gap-x-2 py-2 rounded-md pl-3 ${
                            pathname === "/support" ? "active" : ""
                        }`}
                    >
                        <span>
                            <PersonIcon />
                        </span>
                        support
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
