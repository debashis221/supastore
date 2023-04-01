import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div className={"relative bg-primary pt-[6.5rem] pb-[7rem] border-b-2 border-primary text-secondary"}>
            <div className={"px-[4vw] w-full"}>
                <div className={"grid lg:grid-cols-2 auto-cols-fr gap-x-[20vw] gap-y-[6rem]"}>
                    <div
                        className={"grid relative w-full items-stretch content-center auto-cols-fr gap-y-4 gap-x-[2rem]"}>
                        <h4 className={"lg:text-[2.25rem] leading-[1.25] tracking-tight"}>Subscribe to get tips and
                            tactics to grow the way you want.</h4>
                        <form className={"inline-newsletter-grid"}>
                            <input type={"email"}
                                   className={"form-input footer-newsletter w-input"}
                                   placeholder={"Your Email Address"}/>
                            <button className={"form-submit-btn arrow w-button"} type={"submit"}>→</button>
                        </form>
                    </div>
                    <div className={"grid auto-cols-fr gap-y-[3vw] grid-cols-2"}>
                        <div className="relative grid w-full auto-cols-fr gap-0 gap-x-[12px] self-start">
                            <a
                                href="https://help.gumroad.com/" className="footer-link">Help</a>
                            <a href="/university"
                               className="footer-link">University</a>
                            <a
                                href="/blog" className="footer-link">Blog</a>
                            <a href="/terms" className="footer-link">Terms
                                of Service</a>
                            <a href="/privacy" className="footer-link">Privacy Policy</a>
                        </div>
                        <div className="relative grid w-full auto-cols-fr gap-0 gap-x-[12px] self-start">
                            <a
                                href="https://help.gumroad.com/" className="footer-link">Help</a>
                            <a href="/university"
                               className="footer-link">University</a>
                            <a
                                href="/blog" className="footer-link">Blog</a>
                            <a href="/terms" className="footer-link">Terms
                                of Service</a>
                            <a href="/privacy" className="footer-link">Privacy Policy</a>
                        </div>
                    </div>

                </div>
                <div className={"flex items-center lg:justify-center w-full pt-20"}>
                    <Image
                        src={"https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618f28a89e94524552a002cb_g-icon.svg"}
                        alt={"Gumroad Logo"}
                        width={50} height={50}
                        className={"mr-[1rem] block max-w-full"}
                    />
                    <div className={"text-[1rem] tracking-tight"}>Ⓒ 2023 Supastore, Inc.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
