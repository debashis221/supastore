import {type NextPage} from "next";
import Image from "next/image";
// import { api } from "@/utils/api";
import {useEffect, useState} from "react";
import {Banner, ContactUs, Footer, Header, Products} from "@/sections";
import Features from "@/sections/Features";

const Home: NextPage = () => {
    // const hello = api.example.hello.useQuery({ text: "from tRPC" });
    const [scrolling, setScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <Image
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
                alt="logo"
                width={100}
                height={100}
                className={`h-50 hidden w-20 object-cover p-6 md:min-w-full lg:min-w-full ${
                    scrolling ? "hidden" : "md:block lg:block xl:block"
                }`}
            />
            <Header scrolling={scrolling}/>
            <Banner/>
            <Products/>
            <Features/>
            <ContactUs/>
            <Footer/>

        </>
    );
};

export default Home;
