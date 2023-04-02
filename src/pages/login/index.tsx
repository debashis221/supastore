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
                        className={"pt-[4rem] border-0 grid-cols-2 grid-rows-2 grid items-center gap-[1rem] pb-[2rem] p-[4rem]"}>
                        <Image
                            src={"https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"}
                            alt={"logo"}
                            width={100}
                            height={100}

                        />
                        <div className={"grid grid-flow-col m-[-3rem] gap-[0.75rem] text-center underline"}>
                            <Link href={""}>Sign Up</Link>
                        </div>
                        <h1 className={"text-[2.5rem] font-black"}>Welcome back.</h1>
                    </header>
                </main>
                <aside className={"hidden lg:grid relative grid-cols-2 border-l-2 border-primary overflow-auto p-[1.5rem] gap-[1rem] auto-rows-max top-0 right-0 bottom-0 z-10 w-[40vw]"}><Image
                    src={"https://assets.gumroad.com/assets/auth/background-5c41f733bdde8368f380581954bb197cdd2db268445690ba926f1178c4548a03.png"}
                    alt={"aside"} width={1000} height={1000} className={"absolute object-cover top-0 left-0 h-full w-full"}/></aside>
            </div>

        </div>
    );
};

export default LoginPage
;
