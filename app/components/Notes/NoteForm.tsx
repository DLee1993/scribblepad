"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { NoteForm } from "@/types";
import { NoteSchema } from "@/schemas/ZodSchema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

type Props = {
    documentToggleState: boolean;
    changeDocumentToggleState: (open: boolean) => void;
};

//? Notes need to have the following: title, text content, date added, tags (work, shopping, bills etc.)
//!!!!!!! CHECK OUT THE SHADCN FORM DOCS

export default function NoteForm({ documentToggleState, changeDocumentToggleState }: Props) {
    const [submitError, setSubmitError] = useState<string | undefined>("");
    const router = useRouter();

    const form = useForm<NoteForm>({
        mode: "onSubmit",
        resolver: zodResolver(NoteSchema),
        defaultValues: {
            title: "",
            content: "",
            error: "",
            tag: "",
        },
    });

    const {
        register,
        control,
        setError,
        formState: { errors, isValidating },
    } = form;

    const createNote = (data: NoteForm) => {
        const parsed = NoteSchema.safeParse(data);

        if (!parsed.success) {
            setError("error", {
                type: "custom",
                message: "Unable to submit form, please try again",
            });

            setSubmitError(errors.error?.message?.toString());

            setTimeout(() => {
                setSubmitError("");
            }, 5000);

            return;
        }

        changeDocumentToggleState(!documentToggleState);

        //TODO: Here we need to send the new note to the database
        console.log("success");
        console.log(data);

        //! THIS ONLY APPLIES IF THE REGISTRATION IS SUCCESSFULL
        // router.refresh();
    };

    return (
        <TabsContent value="note" className="relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(createNote)} noValidate>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <section className="w-full flex gap-x-2">
                                <FormItem id="formItem">
                                    <FormLabel id="labelContainer">
                                        Title{" "}
                                        <span>
                                            <FormMessage />
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                                <Controller
                                    control={control}
                                    name="tag"
                                    render={({ field }) => {
                                        return (
                                            <FormItem id="formItem">
                                                <FormLabel
                                                    htmlFor="tagSelection"
                                                    id="labelContainer"
                                                >
                                                    Select a tag
                                                </FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    name="tagSelection"
                                                >
                                                    <SelectTrigger id="tagSelection">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem
                                                                value="work"
                                                                id="selectItem"
                                                            >
                                                                Work
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="shopping"
                                                                id="selectItem"
                                                            >
                                                                Shopping
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="homework"
                                                                id="selectItem"
                                                            >
                                                                Homework
                                                            </SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        );
                                    }}
                                />
                            </section>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem id="formItem">
                                <FormLabel id="labelContainer">
                                    Description{" "}
                                    <span>
                                        <FormMessage />
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea {...field} className="min-h-24 resize-none" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="w-fit">{isValidating ? "..." : "Create Note"}</Button>
                </form>
            </Form>
            <p
                className="error w-full fixed bottom-4 left-0 text-center min-h-5"
                role="alert"
                {...register("error")}
            >
                {submitError}
            </p>
        </TabsContent>
    );
}
