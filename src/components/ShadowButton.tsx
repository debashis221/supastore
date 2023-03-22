import { type NextPage } from "next";
import Link from "next/link";

const ShadowButton: NextPage = () => {
  return (
    <Link
      className="relative z-10 inline-block min-w-[18rem] max-w-full justify-self-start bg-black px-7 py-4 text-center text-[1.5rem] text-white no-underline hover:translate-x-[-2px] hover:translate-y-[-4px] hover:shadow-[15px_35px_60px_-15px_rgba(255,201,0,1)] active:shadow-none"
      href={""}
    >
      Start Selling
    </Link>
  );
};

export default ShadowButton;
