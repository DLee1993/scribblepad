import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
    currentState: boolean;
    changeState: Function;
};

export default function Register({ currentState, changeState }: Props) {
    const openSignInDialog = () => {
        changeState(!currentState);
    };

    //TODO Redirect to dashboard on sign in success
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Register</Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-sm">
                <SheetHeader>
                    <SheetTitle className="text-md">Create an account</SheetTitle>
                    <SheetDescription>
                        Create an account now to start using Scribblepads features.
                    </SheetDescription>
                </SheetHeader>
                <form className="grid place-items-end gap-4 py-4">
                    <fieldset>
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </fieldset>
                    <fieldset>
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input id="username" className="col-span-3" />
                    </fieldset>
                    <fieldset>
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input id="password" className="col-span-3" />
                    </fieldset>
                    <Button className="w-fit">Register</Button>
                </form>
                <SheetFooter className="mt-12">
                    <section className="w-full flex flex-col gap-y-5">
                        <h3 className="text-base font-bold">Prefer to use social media login?</h3>
                        <p className="text-sm">
                            Go to the{" "}
                            <span>
                                <DialogClose
                                    className="p-0 underline hover:bg-transparent"
                                    onClick={openSignInDialog}
                                >
                                    sign in
                                </DialogClose>
                            </span>{" "}
                            section and select your prefered method.
                        </p>
                    </section>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
