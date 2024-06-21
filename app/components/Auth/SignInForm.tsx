import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/schemas/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState, useCallback } from "react";
import { SignInForm } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
    signInToggleState: boolean;
    registerToggleState: boolean;
    changeSignInToggleState: (open: boolean) => void;
    changeRegisterToggleState: (open: boolean) => void;
};

export default function SignIn({
    signInToggleState,
    registerToggleState,
    changeSignInToggleState,
    changeRegisterToggleState,
}: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const router = useRouter();

    const openRegisterDialog = () => {
        changeRegisterToggleState(!registerToggleState);
    };

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors, isValid, isValidating },
    } = useForm<SignInForm>({
        mode: "onChange",
        resolver: zodResolver(SignInSchema),
    });

    const signInSubmission = (data: SignInForm) => {
        const parsed = SignInSchema.safeParse(data);

        if (!parsed.success) {
            return setError("root", {
                type: "custom",
                message: "Unable to submit form, please try again",
            });
        }

        console.log("Login Successful");

        // you need to change the state of the sign in component to stop it from automatically opening when the user clicks go back in the browser
        changeSignInToggleState(!signInToggleState);

        //! THIS ONLY APPLIES IF THE REGISTRATION IS SUCCESSFULL
        router.push("/dashboard");
    };

    return (
        <Sheet open={signInToggleState} onOpenChange={changeSignInToggleState}>
            <SheetTrigger asChild>
                <Button variant="outline">Sign in</Button>
            </SheetTrigger>
            <SheetContent id="authContentStyle">
                <SheetHeader>
                    <SheetTitle>Welcome back</SheetTitle>
                    <SheetDescription>Login to continue organising your day</SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit(signInSubmission)} noValidate>
                    <fieldset>
                        <div id="labelContainer">
                            <Label htmlFor="email">Email</Label>
                            {errors.email?.message && (
                                <p className="error" role="alert">
                                    {errors.email?.message.toString()}
                                </p>
                            )}
                        </div>
                        <Input
                            id="email"
                            autoComplete="email"
                            className="full-width-input"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                        />
                    </fieldset>
                    <fieldset>
                        <div id="labelContainer">
                            <Label htmlFor="password">Password</Label>
                            {errors.password?.message && (
                                <p className="error" role="alert">
                                    {errors.password?.message.toString()}
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <Input
                                id="password"
                                autoComplete="current-password"
                                type={showPassword ? "text" : "password"}
                                className="full-width-input"
                                aria-invalid={!!errors.password}
                                {...register("password")}
                            />
                            {getValues("password") && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOpenIcon className="h-4 w-4" aria-hidden="true" />
                                    ) : (
                                        <EyeNoneIcon className="h-4 w-4" aria-hidden="true" />
                                    )}
                                    <span className="sr-only">
                                        {showPassword ? "Hide password" : "Show password"}
                                    </span>
                                </Button>
                            )}
                        </div>
                    </fieldset>
                    <Button className="w-fit" disabled={isValid ? false : true}>
                        {isValidating ? "..." : "Login"}
                    </Button>
                </form>
                <section className="w-full flex sm:flex-col sm:justify-center sm:items-center gap-y-2 sm:space-x-0">
                    <Button className="w-full min-w-60">Login in with Google</Button>
                    <Button className="w-full min-w-60">Login in with Github</Button>
                </section>
                <SheetFooter>
                    <section className="w-full flex flex-col gap-y-5">
                        <h3 className="text-base font-bold">Don&apos;t have an account?</h3>
                        <p className="text-sm">
                            Go to the{" "}
                            <span>
                                <DialogClose
                                    className="p-0 underline hover:bg-transparent"
                                    onClick={openRegisterDialog}
                                >
                                    register
                                </DialogClose>
                            </span>{" "}
                            section and create an account.
                        </p>
                    </section>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

{
    /*
    Guest Credentials

Name: Guest

Password: guestPassword2023 */
}
