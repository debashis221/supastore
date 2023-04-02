import React from 'react';
import type {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";

const LoginPage: NextPage = () => {
    return (
        <div className={"grid grid-cols-1 grid-rows-1 grid-flow-col text-[1rem] leading-[1.5] w-screen h-screen"}>
            <div className={"contents"}>
                <main className={"overflow-auto flex flex-col grid-cols-1 grid-rows-1"}>
                    <header
                        className={"pt-[4rem] border-0 flex justify-between items-center gap-[1rem] pb-[2rem] p-[4rem]"}>
                        <Image
                            src={"https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"}
                            alt={"logo"}
                            width={100}
                            height={100}

                        />
                        <div className={"grid grid-flow-col gap-[0.75rem] text-center underline"}>
                            <Link href={""}>Sign Up</Link>
                        </div>

                    </header>
                    <h1 className={"text-[2.5rem] font-black px-[4rem] py-3"}>Welcome back.</h1>
                    <form>
                        <section
                            className={"pt-0 border-t-0 grid gap-[2rem] text-[1rem] tracking-tight leading-tight p-[4rem]"}>
                            <fieldset className={"border-0 grid gap-[0.5rem]"}>
                                <legend className={"flex items-center relative font-bold mb-1 w-full text-[1rem]"}>
                                    <label className={"inline-flex gap-[0.5rem] items-center text-[1rem]"}>Email</label>
                                </legend>
                                <input type={"email"}
                                       className={"block outline-0 px-[0.75rem] py-[1rem] text-[1rem] tracking-wide w-full border-2 border-primary rounded"}/>
                            </fieldset>
                            <fieldset className={"border-0 grid gap-[0.5rem]"}>
                                <legend className={"flex items-center relative font-bold mb-1 w-full text-[1rem]"}>
                                    <label
                                        className={"inline-flex gap-[0.5rem] items-center text-[1rem]"}>Password</label>
                                    <Link className={"float-right ml-auto"} href="#">Forgot your
                                        password?</Link>
                                </legend>
                                <input type={"password"}
                                       className={"block outline-0 px-[0.75rem] py-[1rem] text-[1rem] tracking-wide w-full border-2 border-primary rounded"}/>
                            </fieldset>
                            <button
                                className={"border-2 border-primary transition-all bg-primary text-secondary text-[1rem] px-[0.75rem] py-[1rem] rounded-[0.25rem] inline-grid grid-flow-col items-center gap-1 decoration-0 hover:translate-y-[-0.25rem] hover:translate-x-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_#000] hover:bg-pink hover:text-primary"}>Login
                            </button>

                        </section>
                    </form>
                </main>
                <aside
                    className={"hidden lg:grid relative grid-cols-2 border-l-2 border-primary overflow-auto p-[1.5rem] gap-[1rem] auto-rows-max top-0 right-0 bottom-0 z-10 w-[40vw]"}>
                    <Image
                        src={"https://assets.gumroad.com/assets/auth/background-5c41f733bdde8368f380581954bb197cdd2db268445690ba926f1178c4548a03.png"}
                        alt={"aside"} width={1000} height={1000}
                        className={"absolute object-cover top-0 left-0 h-full w-full"}/></aside>
            </div>

        </div>
    );
};

export default LoginPage;
