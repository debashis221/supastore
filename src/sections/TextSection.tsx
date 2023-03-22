import { type NextPage } from "next";

const TextSection: NextPage = () => {
  return (
    <div className="px-5 lg:px-16 py-[5.5rem] relative border-b-2 border-black items-center text-center">
      <h1 className="text-[2.125rem] tracking-tight leading-9">
        SOPASTORE makes clothes to elevate everyday life through lighthearted
        escapism. While styles vary by season <span>all collections</span> are
        guided by the ineffable sense of freedom that comes with travel.
      </h1>
    </div>
  );
};

export default TextSection;
