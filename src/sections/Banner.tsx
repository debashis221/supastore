import { type NextPage } from "next";

import { ShadowButton } from "@/components";

const Banner: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 border-b-2 border-black lg:grid-cols-2 xl:grid-cols-2">
        <div className="border-b-2 border-black bg-yellow lg:border-r-2 lg:border-b-0">
          <div className="relative h-full min-h-[22rem] items-center p-[6.5vw]">
            <div className="mx-0 grid w-full max-w-[48rem] grid-cols-1 grid-rows-1 place-items-start content-start gap-y-12 gap-x-0">
              <h1 className="my-0 text-[5rem] font-normal leading-tight tracking-tight">
                Go from
                <span className="block whitespace-normal">zero to $1</span>
              </h1>
              <p className="text-[1.375rem] leading-tight tracking-tighter">
                With Gumroad, anyone can earn their first dollar online. Just
                start with what you know, see what sticks, and get paid. It’s
                that easy.
              </p>
              <ShadowButton />
            </div>
          </div>
        </div>
        <div className="bg-pink">
          <div className="relative flex h-full min-h-[22rem] items-center p-[6.5vw]">
            <div className="mx-0 grid w-full max-w-[48rem] grid-cols-1 grid-rows-1 place-items-start content-start gap-x-0 gap-y-12">
              <h1 className="my-0 text-[5rem] font-normal leading-tight tracking-tight">
                Go from
                <span className="block whitespace-normal">zero to $1</span>
              </h1>
              <p className="text-[1.375rem] leading-tight tracking-tighter">
                With Gumroad, anyone can earn their first dollar online. Just
                start with what you know, see what sticks, and get paid. It’s
                that easy.
              </p>
              <ShadowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
