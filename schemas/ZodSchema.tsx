import { z } from "zod";

export const RegisterSchema = z
    .object({
        name: z.string().min(1, { message: "required" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(4, { message: "Must contain at least 4 characters" }),
        confirmPassword: z.string(),
    })
    .superRefine(({ confirmPassword, password, name }, ctx) => {
        if (!isNaN(Number(name))) {
            ctx.addIssue({
                code: "custom",
                message: "Name can not be a number",
                path: ["name"],
            });
        }
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Passwords do not match",
                path: ["confirmPassword"],
            });
        }
    });

export const SignInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string(),
});
