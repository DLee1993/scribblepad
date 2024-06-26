"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./components/Auth/SignIn";
export default function Home() {
    const [signInToggle, setSignInToggle] = useState<boolean>(false);

    const toggleSignIn = () => setSignInToggle(!signInToggle);

    return (
        <>
            <nav>
                <section className="flex justify-center items-center gap-x-4">
                    <SignIn signInOpen={signInToggle} changeSignInToggle={setSignInToggle} />
                </section>
            </nav>
            <main>
                <section className="text-center flex justify-evenly items-center flex-col min-h-80 lg:min-h-96">
                    <aside className="-mt-5 flex justify-evenly items-center flex-col">
                        <h1 className="text-4xl font-medium">Scribblepad</h1>
                        <p className="max-w-xl">
                            Your one stop shop for all your organisational needs. When you use
                            Scribblepad, you&apos;ll never forget.
                        </p>
                    </aside>
                    <Button onClick={toggleSignIn}>Get Started</Button>
                </section>
                <section id="features" className="mt-20">
                    <section id="dashboard" className="flex flex-wrap mb-20 gap-y-5 lg:gap-y-0">
                        <article className="flex flex-col gap-y-5 lg:pr-8 w-full lg:w-1/2">
                            <h2 className="text-lg">The Dashboard</h2>
                            <p>
                                The dashboard gives you a sneak peak into what&apos;s going on,
                                track the progress of your tasks, see your recent notes and see the
                                upcoming dates on the calendar. The dashboard also gives you full
                                control and access to your information, themes and a help section if
                                you ever need it.
                            </p>
                        </article>
                        <figure className="bg-slate-400 w-full lg:w-1/2 lg:min-w-96 h-96"></figure>
                    </section>
                    <section
                        id="notes"
                        className="flex flex-row-reverse flex-wrap mb-20 gap-y-5 lg:gap-y-0"
                    >
                        <article className="flex flex-col gap-y-5 lg:pl-8 w-full lg:w-1/2">
                            <h2 className="text-lg">Jot down notes</h2>
                            <p>
                                The notes section allows you to jot down reminders for meetings,
                                take notes during classes, or write out your weekly shopping list.
                                It gives you a place to write out ideas and save them for later. You
                                can add a title and description to your note, plus, change the color
                                of your note to help organise them.
                            </p>
                        </article>
                        <figure className="bg-slate-400 w-full lg:w-1/2 lg:min-w-96 h-96"></figure>
                    </section>
                    <section id="tasks" className="flex flex-wrap mb-20 gap-y-5 lg:gap-y-0">
                        <article className="flex flex-col gap-y-5 lg:pr-8 w-full lg:w-1/2">
                            <h2 className="text-lg">Organise and prioritise tasks</h2>
                            <p>
                                The tasks sections is where the real organising takes place, here
                                you can add a title and description, a date to be completed by and a
                                tag to prioritise based on urgency. Once you have added your tasks
                                for the day, week or month you can check them off one by one and
                                keep track of what you have accomplished.
                            </p>
                        </article>
                        <figure className="bg-slate-400 w-full lg:w-1/2 lg:min-w-96 h-96"></figure>
                    </section>
                    <section
                        id="tasks"
                        className="flex flex-row-reverse flex-wrap mb-20 gap-y-5 lg:gap-y-0"
                    >
                        <article className="flex flex-col gap-y-5 lg:pl-8 w-full lg:w-1/2">
                            <h2 className="text-lg">Organise using our built in calendar</h2>
                            <p>The calendar helps you organise your tasks by deadlines.</p>
                        </article>
                        <figure className="bg-slate-400 w-full lg:w-1/2 lg:min-w-96 h-96"></figure>
                    </section>
                </section>
            </main>
            <footer>
                <section className="min-h-44 2xl:min-h-72 flex flex-col justify-evenly items-center text-center mb-20">
                    <h3 className="text-md font-medium">
                        So what are you waiting for? Let&apos;s start organising your life.
                    </h3>
                    <Button onClick={toggleSignIn}>Get Started</Button>
                </section>
                <section className="min-h-20 flex flex-wrap justify-center lg:justify-between items-center px-10">
                    <ul className="flex gap-x-4">
                        <li>
                            <Link href="https://portfolio-23u5.onrender.com/" target="_blank">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/DLee1993" target="_blank">
                                Github
                            </Link>
                        </li>
                    </ul>
                    <p className="text-slate-400">
                        Designed & Built by <span>David Lee</span>
                    </p>
                </section>
            </footer>
        </>
    );
}
