import { FieldError, UseFormRegister } from "react-hook-form";

export type SignInForm = {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
};

export type NoteForm = {
    title: string;
    content: string;
    error: string | undefined;
    tag: string | undefined;
};

export type TaskForm = {
    title: string;
    content: string;
    completedBy: string;
    completed: boolean | string;
};
