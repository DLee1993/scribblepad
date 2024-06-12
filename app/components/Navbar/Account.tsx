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
            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="dropdownItem">
                    <Link href="/settings">
                        Settings <GearIcon />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem">
                    Logout
                    <LockClosedIcon />
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem">
                    Delete Account <TrashIcon />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
