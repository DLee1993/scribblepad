import { z } from "zod";

export const AuthSchema = z
    .object({
        name: z.string().min(1, { message: "required" }).optional(),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(4, { message: "Must contain at least 4 characters" }),
        confirmPassword: z.string().optional(),
    })
    .superRefine(({ confirmPassword, password, name }, ctx) => {
        if (!isNaN(Number(name))) {
            ctx.addIssue({
                code: "custom",
                message: "Name can not be a number",
                path: ["name"],
            });
        }
        if (confirmPassword !== undefined) {
            if (confirmPassword !== password) {
                ctx.addIssue({
                    code: "custom",
                    message: "Passwords do not match",
                    path: ["confirmPassword"],
                });
            }
        }
    });

export const NoteSchema = z.object({
    title: z.string().min(1, { message: "- missing information" }),
    content: z.string().min(1, { message: "- missing information" }),
    tag: z.string().optional(),
    error: z.string().optional(),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;
