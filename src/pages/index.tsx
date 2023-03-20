import { type NextPage } from "next";
import Image from "next/image";
// import { api } from "@/utils/api";
import { Navbar } from "@/components";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Image
        src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
        alt="logo"
        width={100}
        height={100}
        className={`h-50 hidden w-20 object-cover p-6 md:min-w-full lg:min-w-full xl:min-w-[100vw] ${
          scrolling ? "hidden" : "md:block lg:block xl:block"
        }`}
      />
      <Navbar scrolling={scrolling} />
      
    </>
  );
};

export default Home;
