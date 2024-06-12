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
import { GearIcon, LockClosedIcon, TrashIcon } from "@radix-ui/react-icons";

export default function Account() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="dropdownItem text-base md:text-sm">
                    <Link href="/settings">
                        Settings <GearIcon />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem text-base md:text-sm">
                    Logout
                    <LockClosedIcon />
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem text-base md:text-sm">
                    Delete Account <TrashIcon />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
