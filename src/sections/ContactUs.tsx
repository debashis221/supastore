import {ShadowButton} from "@/components";
import type {FC} from "react";

const ContactUs: FC = () => {
    return (
        <div className={"relative bg-pink text-primary pt-[6.5rem] pb-[7rem] border-b-2 border-primary"}>
            <div className={"w-full px-[4vw]"}>
                <div
                    className={"w-[90vw] max-w-[68rem] grid mx-auto justify-center auto-cols-fr text-center gap-[2rem] lg:gap-[4rem] items-center"}>
                    <h2 className={"text-[3rem] lg:text-[4.5rem] font-black leading-tight tracking-tight"}>Need Help! <span
                            className={"inline lg:block lg:whitespace-nowrap"}>We are in your hand.</span></h2>
                    <ShadowButton title={"Contact Us"}/>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
