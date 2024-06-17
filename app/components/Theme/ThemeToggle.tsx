"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuItem,
    DropdownMenuSubTrigger,
    DropdownMenuPortal,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenuGroup>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className="text-base md:text-sm data-[state=open]:bg-slate-950 data-[state=open]:text-slate-50 dark:data-[state=open]:bg-slate-50 dark:data-[state=open]:text-slate-950 focus:bg-slate-950 focus:text-slate-50 dark:focus:bg-slate-50 dark:focus:text-slate-950">
                    Themes
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem
                            onClick={() => setTheme("light")}
                            className="text-base md:text-sm focus:bg-slate-950 focus:text-slate-50 dark:focus:bg-slate-50 dark:focus:text-slate-950"
                        >
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme("dark")}
                            className="text-base md:text-sm focus:bg-slate-950 focus:text-slate-50 dark:focus:bg-slate-50 dark:focus:text-slate-950"
                        >
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme("system")}
                            className="text-base md:text-sm focus:bg-slate-950 focus:text-slate-50 dark:focus:bg-slate-50 dark:focus:text-slate-950"
                        >
                            System
                        </DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
        </DropdownMenuGroup>
    );
}
