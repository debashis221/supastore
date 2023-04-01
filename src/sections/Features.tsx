import Image from "next/image";
import type {FC} from "react";

const Features: FC = () => {
    return (
        <section className={"grid lg:grid-cols-2 grid-cols-1"}>
            <div
                className={"justify-center items-center text-center bg-yellow border-t-2 lg:border-y-2 lg:border-r-2 border-black min-h-[22rem] p-[6.5vw] flex h-full"}>
                <Image
                    src={"https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61991f9baa14038b9c100d6c_home-feature-4.svg"}
                    alt={""} width={1000} height={1000}
                    className={"max-w-[35rem] rounded-lg min-w-full object-contain"}/>

            </div>
            <div
                className={"auto-cols-fr gap-[3rem] content-start border-y-2 border-primary relative grid h-full min-h-[14rem] pr-[2rem] pb-[4.5rem] pl-[2rem] lg:min-h-[22rem] lg:p-[6.5vw] items-center pt-[4rem]"}>
                <h1
                    className={"font-black text-3xl lg:text-6xl uppercase"}>We&apos;re changing the way things
                    get made.</h1>
                <p className={"text-[1.5rem] tracking-5 leading-tight"}>Create and customize your storefront with our
                    all-in-one platform or choose to use your personal site
                    instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your
                    current stack.</p>
            </div>
        </section>
    );
};

export default Features;
