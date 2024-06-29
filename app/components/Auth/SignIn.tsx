"use client";

import { AuthSchema } from "@/schemas/ZodSchema";
import { AuthSchemaType } from "@/schemas/ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
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

type Props = {
    signInOpen: boolean;
    changeSignInToggle: (open: boolean) => void;
};

export default function SignIn({ signInOpen, changeSignInToggle }: Props) {
    var hours = new Date().getHours();
    const [isUser, setIsUser] = useState<boolean | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState<boolean>(false);
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
                <Button className="bg-[var(--accent)] dark:bg-[var(--accent)] text-[var(--light)] dark:text-[var(--light)] dark:hover:text-[var(--dark)] px-8 py-6 rounded-md">Sign in</Button>
            </SheetTrigger>
            <SheetContent
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="flex flex-col justify-between w-full md:w-auto dark:bg-[var(--dark)]"
            >
                <div id="flex_container">
                    <SheetHeader className="text-left">
                        <SheetTitle className="text-lg lg:text-md">
                            {hours >= 0 && hours < 12
                                ? "Good Morning"
                                : hours >= 12 && hours < 18
                                ? "Good Afternoon"
                                : "Good Evening"}
                            ,
                        </SheetTitle>
                        <SheetDescription className="md:max-w-80 text-base md:text-sm">
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
                                className={errors.email && "border-2 border-[var(--accent)]"}
                                autoComplete="true"
                                {...register("email")}
                            />
                        </fieldset>
                        {isUser === null && (
                            <Button
                                type="button"
                                onClick={() => checkUserExists(getValues("email"))}
                                className="bg-[var(--accent)] dark:bg-[var(--accent)] text-[var(--dark)] dark:text-[var(--light)]"
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
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                                className={
                                                    errors.password &&
                                                    "border-2 border-[var(--accent)]"
                                                }
                                                autoComplete="true"
                                                {...register("password")}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-fit absolute right-0 bottom-1/2 translate-y-1/2 hover:bg-transparent"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                {showPassword ? (
                                                    <EyeOpenIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <EyeClosedIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span className="sr-only">
                                                    {showPassword
                                                        ? "Hide password"
                                                        : "Show password"}
                                                </span>
                                            </Button>
                                        </div>
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
                                                errors.name && "border-2 border-[var(--accent)]"
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
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                                className={
                                                    errors.password &&
                                                    "border-2 border-[var(--accent)]"
                                                }
                                                autoComplete="true"
                                                {...register("password")}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-fit absolute right-0 bottom-1/2 translate-y-1/2 hover:bg-transparent"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                {showPassword ? (
                                                    <EyeOpenIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <EyeClosedIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span className="sr-only">
                                                    {showPassword
                                                        ? "Hide password"
                                                        : "Show password"}
                                                </span>
                                            </Button>
                                        </div>
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
                                        <div className="relative">
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmedPassword ? "text" : "password"}
                                                placeholder="Re-enter your password"
                                                className={
                                                    errors.confirmPassword &&
                                                    "border-2 border-[var(--accent)]"
                                                }
                                                autoComplete="true"
                                                {...register("confirmPassword")}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-fit absolute right-0 bottom-1/2 translate-y-1/2 hover:bg-transparent"
                                                onClick={() =>
                                                    setShowConfirmedPassword((prev) => !prev)
                                                }
                                            >
                                                {showConfirmedPassword ? (
                                                    <EyeOpenIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <EyeClosedIcon
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span className="sr-only">
                                                    {showConfirmedPassword
                                                        ? "Hide password"
                                                        : "Show password"}
                                                </span>
                                            </Button>
                                        </div>
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
