import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
            <Sheet>
                <SheetTrigger>
                    <HamburgerMenuIcon className="size-6" />
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col justify-start items-start">
                    <SheetHeader>
                        <SheetTitle className="font-bold text-lg">Scribblepad</SheetTitle>
                        <SheetDescription>This is where the menu list will go</SheetDescription>
                    </SheetHeader>
                    <Separator />
                    <section className="flex-1 w-full">menu list</section>
                    <Separator />
                    <SheetFooter>This is where the settings and logout will go</SheetFooter>
                </SheetContent>
            </Sheet>
            <p>other nav things</p>
        </nav>
    );
}
