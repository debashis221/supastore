import { type NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const Banner: NextPage = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
    >
      <SwiperSlide className="h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border-b-2 border-black">
          <div className="bg-[#ff90e8] border-r-2 md:border-b-2 border-black">
            <div className="relative flex h-full min-h-[22rem] items-center p-[6.5vw]">
              <div className="mx-0 grid w-full max-w-[48rem] auto-cols-fr grid-cols-1 grid-rows-1 place-items-start content-start items-stretch justify-items-stretch gap-x-0">
                <h1 className="my-0 text-[5rem] font-normal leading-tight tracking-tight">
                  Go from
                  <span className="block whitespace-normal">zero to $1</span>
                </h1>
                <p className="text-[1.375rem] leading-tight tracking-tighter">
                  With Gumroad, anyone can earn their first dollar online. Just
                  start with what you know, see what sticks, and get paid. It’s
                  that easy.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffc900]">
            <div className="relative flex h-full min-h-[22rem] items-center p-[6.5vw]">
              <div className="mx-0 grid w-full max-w-[48rem] auto-cols-fr grid-cols-1 grid-rows-1 place-items-start content-start items-stretch justify-items-stretch gap-x-0">
                <h1 className="my-0 text-[5rem] font-normal leading-tight tracking-tight">
                  Go from
                  <span className="block whitespace-normal">zero to $1</span>
                </h1>
                <p className="text-[1.375rem] leading-tight tracking-tighter">
                  With Gumroad, anyone can earn their first dollar online. Just
                  start with what you know, see what sticks, and get paid. It’s
                  that easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
