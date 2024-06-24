import { FieldError, UseFormRegister } from "react-hook-form";

export type RegisterForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type SignInForm = {
    email: string;
    password: string;
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
