"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState, useCallback } from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RegisterForm } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
    signInToggleState: boolean;
    registerToggleState: boolean;
    changeSignInToggleState: (open: boolean) => void;
    changeRegisterToggleState: (open: boolean) => void;
};

export default function Register({
    signInToggleState,
    changeSignInToggleState,
    registerToggleState,
    changeRegisterToggleState,
}: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const router = useRouter();

    const openSignInDialog = useCallback(() => {
        changeSignInToggleState(!signInToggleState);
    }, [changeSignInToggleState, signInToggleState]);

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors, isValid, isValidating },
    } = useForm<RegisterForm>({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
    });

    const registerSubmission = (data: RegisterForm) => {
        const parsed = RegisterSchema.safeParse(data);

        if (!parsed.success) {
            return setError("root", {
                type: "custom",
                message: "Unable to submit form, please try again",
            });
        }

        console.log("Register Successful");

        // you need to change the state of the sign in component to stop it from automatically opening when the user clicks go back in the browser
        changeRegisterToggleState(!registerToggleState);

        //! THIS ONLY APPLIES IF THE REGISTRATION IS SUCCESSFULL
        router.push("/dashboard");
    };

    return (
        <Sheet open={registerToggleState} onOpenChange={changeRegisterToggleState}>
            <SheetTrigger asChild>
                <Button variant="outline">Register</Button>
            </SheetTrigger>
            <SheetContent id="authContentStyle">
                <SheetHeader className="mb-5">
                    <SheetTitle className="text-md">Create an account</SheetTitle>
                    <SheetDescription>
                        Create an account to start organising your day.
                    </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit(registerSubmission)} noValidate>
                    <fieldset>
                        <div id="labelContainer">
                            <Label htmlFor="name">Name</Label>
                            {errors.name?.message && (
                                <p className="error" role="alert">
                                    {errors.name?.message.toString()}
                                </p>
                            )}
                        </div>
                        <Input
                            id="name"
                            autoComplete="name"
                            className="full-width-input"
                            aria-invalid={!!errors.name}
                            {...register("name")}
                        />
                    </fieldset>
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
                                autoComplete="new-password"
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
                    <fieldset>
                        <div id="labelContainer">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            {errors.confirmPassword?.message && (
                                <p className="error" role="alert">
                                    {errors.confirmPassword?.message.toString()}
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <Input
                                id="confirmPassword"
                                autoComplete="new-password"
                                type={showConfirmPassword ? "text" : "password"}
                                className="full-width-input"
                                aria-invalid={!!errors.confirmPassword}
                                {...register("confirmPassword")}
                            />
                            {getValues("confirmPassword") && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOpenIcon className="h-4 w-4" aria-hidden="true" />
                                    ) : (
                                        <EyeNoneIcon className="h-4 w-4" aria-hidden="true" />
                                    )}
                                    <span className="sr-only">
                                        {showConfirmPassword ? "Hide password" : "Show password"}
                                    </span>
                                </Button>
                            )}
                        </div>
                    </fieldset>
                    <Button className="w-fit" disabled={isValid ? false : true}>
                        {isValidating ? "..." : "Register"}
                    </Button>
                </form>
                <SheetFooter>
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
                            section and select your preferred method.
                        </p>
                    </section>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
