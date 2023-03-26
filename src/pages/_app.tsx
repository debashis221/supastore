import {type AppType} from "next/app";
import {type Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import localFont from "next/font/local";
import {api} from "@/utils/api";

import "@/styles/globals.css";
import {Provider} from "react-redux";
import {store} from "@/store/store";

const myFont = localFont({src: "./assets/fonts/MabryPro-Regular.woff2"});

const MyApp: AppType<{ session: Session | null }> = ({
                                                         Component,
                                                         pageProps: {session, ...pageProps},
                                                     }) => {
    return (
        <SessionProvider session={session}>
            <main className={myFont.className}>
                <Provider store={store}> <Component {...pageProps} /></Provider>

            </main>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
