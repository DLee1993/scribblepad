import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Account() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="dropdownItem">
                    <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem">Logout</DropdownMenuItem>
                <DropdownMenuItem className="dropdownItem">Delete Account</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
