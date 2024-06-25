import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function SignIn() {
    var hours = new Date().getHours();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="bg-[var(--dark)] text-[var(--light)] rounded-md text-base p-6">
                    Sign in
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-md">
                        {hours >= 0 && hours < 12
                            ? "Good Morning"
                            : hours >= 12 && hours < 18
                            ? "Good Afternoon"
                            : "Good Evening"}
                        ,
                    </SheetTitle>
                    <SheetDescription className="max-w-80 text-sm">
                        Sign in or create an account to start organising your day.
                    </SheetDescription>
                </SheetHeader>
                <section>sign in wizard form goes here</section>
                <SheetFooter className="flex sm:flex-col">social media login</SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
