"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthSchema } from "@/schemas/ZodSchema";
import { AuthSchemaType } from "@/schemas/ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
    signInOpen: boolean;
    changeSignInToggle: (open: boolean) => void;
};

export default function SignIn({ signInOpen, changeSignInToggle }: Props) {
    var hours = new Date().getHours();
    const [isUser, setIsUser] = useState<boolean | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        clearErrors,
        setFocus,
        formState: { errors },
    } = useForm<AuthSchemaType>({
        mode: "onSubmit",
        resolver: zodResolver(AuthSchema),
    });

    const checkUserExists = (email: string) => {
        var em = "dai180293@gmail.com";

        if (email === "") {
            setError("email", { type: "custom", message: "Please enter a valid Email Address" });

            setTimeout(() => {
                clearErrors("email");
            }, 1000);

            return;
        }

        if (email.toLowerCase() === em.toLowerCase()) {
            setIsUser(true);
            return true;
        } else {
            setIsUser(false);
            return false;
        }
    };

    const submitAuthForm = (data: AuthSchemaType) => {
        //TODO: check if email exists in DB and if isUser is false, if so set error, else check data, if true push to dashboard
        if (checkUserExists(data.email) && !isUser) {
            setError("email", { type: "custom", message: "User already exists" });
            setIsUser(false);
            setFocus("email");
            return;
        }
        if (data.email && data.password) {
            router.push("/dashboard");
        }
    };

    return (
        <Sheet open={signInOpen} onOpenChange={changeSignInToggle}>
            <SheetTrigger asChild>
                <Button className="bg-[var(--dark)] text-[var(--light)] rounded-md">Sign in</Button>
            </SheetTrigger>
            <SheetContent
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="flex flex-col justify-between"
            >
                <div id="flex_container">
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
                    <form onSubmit={handleSubmit(submitAuthForm)}>
                        <fieldset>
                            <div className="flex items-center gap-x-2 min-h-5">
                                <Label htmlFor="email">Email address</Label>
                                {errors.email && <p role="alert">{errors?.email?.message}</p>}
                            </div>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter email address"
                                className={errors.email && "border-2 border-[var(--warning)]"}
                                autoComplete="true"
                                {...register("email")}
                            />
                        </fieldset>
                        {isUser === null && (
                            <Button
                                type="button"
                                onClick={() => checkUserExists(getValues("email"))}
                            >
                                Continue
                            </Button>
                        )}
                        {isUser !== null ? (
                            isUser ? (
                                <>
                                    <fieldset>
                                        <div className="flex items-center gap-x-2 min-h-5">
                                            <Label htmlFor="password">Password</Label>
                                            {errors.password && (
                                                <p role="alert">{errors?.password?.message}</p>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter password"
                                            className={
                                                errors.password &&
                                                "border-2 border-[var(--warning)]"
                                            }
                                            autoComplete="true"
                                            {...register("password")}
                                        />
                                    </fieldset>
                                    <Button>Login</Button>
                                </>
                            ) : (
                                <>
                                    <fieldset>
                                        <div className="flex items-center gap-x-2 min-h-5">
                                            <Label htmlFor="name">Name</Label>
                                            {errors.name && (
                                                <p role="alert">{errors?.name?.message}</p>
                                            )}
                                        </div>
                                        <Input
                                            id="name"
                                            type="name"
                                            placeholder="Enter name"
                                            className={
                                                errors.name && "border-2 border-[var(--warning)]"
                                            }
                                            autoComplete="true"
                                            {...register("name")}
                                        />
                                    </fieldset>
                                    <fieldset>
                                        <div className="flex items-center gap-x-2 min-h-5">
                                            <Label htmlFor="password">Password</Label>
                                            {errors.password && (
                                                <p role="alert">{errors?.password?.message}</p>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter password"
                                            className={
                                                errors.password &&
                                                "border-2 border-[var(--warning)]"
                                            }
                                            autoComplete="true"
                                            {...register("password")}
                                        />
                                    </fieldset>
                                    <fieldset>
                                        <div className="flex items-center gap-x-2 min-h-5">
                                            <Label htmlFor="confirmPassword">
                                                Confirm password
                                            </Label>
                                            {errors.confirmPassword && (
                                                <p role="alert">
                                                    {errors?.confirmPassword?.message}
                                                </p>
                                            )}
                                        </div>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Re-enter your password"
                                            className={
                                                errors.confirmPassword &&
                                                "border-2 border-[var(--warning)]"
                                            }
                                            autoComplete="true"
                                            {...register("confirmPassword")}
                                        />
                                    </fieldset>
                                    <Button>Login</Button>
                                </>
                            )
                        ) : null}
                    </form>
                </div>
                <SheetFooter className="flex sm:flex-col">social media list here</SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
