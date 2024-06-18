import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
    currentState: boolean;
    changeState: (open: boolean) => void;
};

export default function SignIn({ currentState, changeState }: Props) {
    //TODO Redirect to dashboard on sign in success
    return (
        <Sheet open={currentState} onOpenChange={changeState}>
            <SheetTrigger asChild>
                <Button variant="outline">Sign in</Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-sm">
                <SheetHeader>
                    <SheetTitle>Welcome back</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
