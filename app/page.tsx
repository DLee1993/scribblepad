"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./components/Auth/SignIn";
import { motion } from "framer-motion";
import Image from "next/image";
import illustration from "../public/images/illustration.webp";
export default function Home() {
    const [signInToggle, setSignInToggle] = useState<boolean>(false);

    const toggleSignIn = () => setSignInToggle(!signInToggle);

    const variants = {
        active: {
            opacity: 1,
            y: 0,
        },
        inactive: {
            opacity: 0,
            y: 50,
        },
    };

    const reveal = {
        duration: 0.75,
        type: "spring",
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[var(--light)] dark:bg-[var(--dark)] flex justify-between items-center">
                <h1 className="font-bold text-md">Scribblepad</h1>
                <SignIn signInOpen={signInToggle} changeSignInToggle={setSignInToggle} />
            </nav>
            <main>
                <section className="relative min-h-[calc(100vh-var(--headerHeight))] flex flex-col justify-evenly items-center md:items-start mb-10 md:mb-16 lg:mb-20">
                    <aside className="flex justify-evenly items-start flex-col gap-y-6 text-center md:text-left">
                        <h2 className="text-2xl font-bold max-w-xl leading-none">
                            Forget about your messy notes.
                        </h2>
                        <p className="max-w-lg text-sm mx-auto md:mx-0">
                            Scribblepad is your one stop shop for all your organisational needs.
                            When you use Scribblepad, you&apos;ll never forget.
                        </p>
                    </aside>
                    <Button onClick={toggleSignIn} className="bg-[var(--accent)] px-8 py-6">
                        Try now
                    </Button>
                    <Image
                        src={illustration}
                        alt="pile of unorganised notes"
                        placeholder="blur"
                        className="w-full max-w-md absolute bottom-0 md:top-0 md:right-20 -z-10 opacity-40 lg:opacity-100"
                    />
                </section>
                <section id="features" className="flex flex-col gap-y-20">
                    <article className="flex flex-wrap justify-center items-start gap-y-10">
                        <aside className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-y-5 md:pr-10">
                            <motion.h2
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                viewport={{ once: true }}
                                className="text-md font-bold"
                            >
                                The Dashboard
                            </motion.h2>
                            <motion.p
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-sm"
                            >
                                The dashboard gives you a sneak peak into what&apos;s going on,
                                track the progress of your tasks, see your recent notes and see the
                                upcoming dates on the calendar. <br /> <br /> The dashboard also
                                gives you full control and access to your information, themes and a
                                help section if you ever need it.
                            </motion.p>
                        </aside>
                        <figure className="bg-slate-950 w-full md:w-1/2 lg:w-3/5 h-96"></figure>
                    </article>
                    <article className="flex flex-wrap flex-row md:flex-row-reverse justify-between items-start gap-y-10">
                        <aside className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-y-5 md:pl-10">
                            <motion.h2
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-md font-bold"
                            >
                                Jot down notes
                            </motion.h2>
                            <motion.p
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-sm"
                            >
                                The notes section allows you to jot down reminders for meetings,
                                take notes during classes, or write out your weekly shopping list.
                                It gives you a place to write out ideas and save them for later. You
                                can add a title and description to your note, plus, change the color
                                of your note to help organise them.
                            </motion.p>
                        </aside>
                        <figure className="bg-slate-950 w-full md:w-1/2 lg:w-3/5 h-96"></figure>
                    </article>
                    <article className="flex flex-wrap justify-between items-start gap-y-10">
                        <aside className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-y-5 md:pr-10">
                            <motion.h2
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-md font-bold"
                            >
                                Organise and prioritise tasks
                            </motion.h2>
                            <motion.p
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-sm"
                            >
                                The tasks sections is where the real organising takes place, here
                                you can add a title and description, a date to be completed by and a
                                tag to prioritise based on urgency. Once you have added your tasks
                                for the day, week or month you can check them off one by one and
                                keep track of what you have accomplished.
                            </motion.p>
                        </aside>
                        <figure className="bg-slate-950 w-full md:w-1/2 lg:w-3/5 h-96"></figure>
                    </article>
                    <article className="flex flex-wrap flex-row md:flex-row-reverse justify-between items-start gap-y-10">
                        <aside className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-y-5 md:pl-10">
                            <motion.h2
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-md font-bold"
                            >
                                Organise using our built in calendar
                            </motion.h2>
                            <motion.p
                                variants={variants}
                                initial={variants.inactive}
                                whileInView={variants.active}
                                transition={reveal}
                                className="text-sm"
                            >
                                The calendar helps you organise your tasks by deadlines. You can use
                                our built in calendar to help pick dates for your tasks. This helps
                                keep you organised and motivates you to complete tasks withing the
                                designated timeline.
                            </motion.p>
                        </aside>
                        <figure className="bg-slate-950 w-full md:w-1/2 lg:w-3/5 h-96"></figure>
                    </article>
                </section>
            </main>
            <footer>
                <section className="min-h-80 flex flex-col justify-evenly items-center text-center my-10">
                    <h3 className="text-xl font-bold max-w-3xl leading-none">
                        So what are you waiting for? Let&apos;s start organising your life.
                    </h3>
                    <Button onClick={toggleSignIn} className="bg-[var(--accent)] px-8 py-6">
                        Try now
                    </Button>
                </section>
                <section className="min-h-20 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-10 gap-y-5">
                    <ul className="flex gap-x-4">
                        <li>
                            <Link
                                href="https://portfolio-23u5.onrender.com/"
                                target="_blank"
                                className="hover:text-[var(--accent)] transition-colors"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/DLee1993"
                                target="_blank"
                                className="hover:text-[var(--accent)] transition-colors"
                            >
                                Github
                            </Link>
                        </li>
                    </ul>
                    <p>
                        Designed & Built by <span>David Lee</span>
                    </p>
                </section>
            </footer>
        </>
    );
}
