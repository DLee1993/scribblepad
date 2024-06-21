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