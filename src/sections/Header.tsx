import Image from "next/image";
import {type FC, memo, useState} from "react";
import Link from "next/link";

type MenuTypes = {
    name: string;
    link: string;
}
const Header: FC<{ scrolling: boolean }> = ({scrolling}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems: MenuTypes[] = [
        {name: "About", link: ""},
        {name: "Men", link: ""},
        {name: "Women", link: ""},
        {name: "Shop", link: ""},
        {name: "Contact", link: ""},
    ]
    return (
        <header
            className={`relative flex justify-between border-t-2 border-b-2 border-black bg-white ${
                scrolling ? "sticky top-0 z-50" : ""
            }`}
        >
            <Image
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
                alt="logo"
                width={100}
                height={100}
                className={`h-50 flex w-fit min-w-[20vw] object-cover p-6 ${
                    scrolling
                        ? "md:flex lg:flex xl:flex"
                        : "md:hidden lg:hidden xl:hidden"
                }`}
            />
            <ul
                className={`${
                    isOpen ? "absolute" : "hidden"
                } top-20 z-50 w-full list-none items-center gap-4 bg-white p-5 text-3xl font-black uppercase md:static md:flex md:text-xl lg:static lg:flex lg:text-2xl xl:static xl:flex xl:text-3xl`}
            >
                {menuItems.map((item, index) => (
                    <li key={index} className={"py-3 lg:py-0 md:py-0"}><Link href={item.link}>{item.name}</Link></li>))}
                <div className="flex py-3 justify-between md:hidden lg:hidden">
                    <button
                        className="border-2 border-black px-7 py-5 font-black uppercase hover:bg-[#ff90e8] md:text-xl lg:text-2xl xl:text-3xl">
                        Login
                    </button>
                    <button
                        className="border-l-2 border-black bg-black px-5 py-5 font-black uppercase text-white hover:bg-[#ff90e8] hover:text-black md:text-xl lg:text-2xl xl:text-3xl">
                        Cart(0)
                    </button>
                </div>
            </ul>
            <div className="hidden md:flex lg:flex xl:flex">
                <button
                    className="border-l-2 border-black p-5 font-black uppercase hover:bg-[#ff90e8] md:text-xl lg:text-2xl xl:text-3xl">
                    Login
                </button>
                <button
                    className="border-l-2 border-black bg-black p-5 font-black uppercase text-white hover:bg-[#ff90e8] hover:text-black md:text-xl lg:text-2xl xl:text-3xl">
                    Cart(0)
                </button>
            </div>
            {/* mobile menu icon */}
            <div className="flex md:hidden lg:hidden xl:hidden">
                {isOpen ? (
                    <button
                        className="border-l-2 border-black bg-[#ff90e8] p-5 uppercase hover:bg-black hover:text-white md:text-xl lg:text-2xl xl:text-3xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                ) : (
                    <button
                        className="border-l-2 border-black p-5 uppercase hover:bg-[#ff90e8] md:text-xl lg:text-2xl xl:text-3xl"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </header>
    );
};

export default memo(Header);
