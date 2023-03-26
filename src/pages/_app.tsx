import {type AppType} from "next/app";
import {type Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import localFont from "next/font/local";
import {api} from "@/utils/api";
import {wrapper} from "@/store/store";

import "@/styles/globals.css";

const myFont = localFont({src: "./assets/fonts/MabryPro-Regular.woff2"});

const MyApp: AppType<{ session: Session | null }> = ({
                                                         Component,
                                                         pageProps: {session, ...pageProps},
                                                     }) => {
    return (
        <SessionProvider session={session}>
            <main className={myFont.className}>
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    );
};

export default wrapper.withRedux(api.withTRPC(MyApp));
