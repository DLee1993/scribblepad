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
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { pageLinks } from "./pageLinks";

export default function Menu() {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    const pathname = usePathname();

    const changeMenuStatus = () => {
        setMenuStatus(!menuStatus);
    };

    return (
        <Sheet open={menuStatus} onOpenChange={setMenuStatus}>
            <SheetTrigger>
                <HamburgerMenuIcon className="size-6" aria-label="open menu" />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="flex flex-col justify-start items-start py-6 px-3 sm:max-w-[18rem] capitalize dark:bg-[var(--background)]"
            >
                <SheetHeader>
                    <SheetTitle className="font-bold text-md pl-3">Scribblepad</SheetTitle>
                </SheetHeader>
                <section className="flex flex-col justify-between items-start flex-1 w-full mt-10 text-base">
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
                </section>
                <Separator />
                <SheetFooter className="w-full text-base" id="footer">
                    add your socials here
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
