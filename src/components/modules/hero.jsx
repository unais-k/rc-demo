import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeroContent } from "./../../constants/index";

const Hero = () => {
  return (
    <div className="flex justify-center items-center mx-10 w-full">

      <Swiper
        className="px-10"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      >
        {HeroContent?.map((item, id) => {
          return (
            <SwiperSlide
              className="flex justify-center items-center h-[500px] w-[80%]"
              key={id}
            >
              <div className="relative">
                <img
                  alt={item.title}
                  src={item.img}
                  className="max-h-[500px] h-[400px] w-[400px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 bg-color-of-card w-full rounded-b-2xl">
                  <div className="flex justify-center h-20 w-full items-center flex-row">
                    <span className="text-sm font-montserrat text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev">
        </div>
        <div className="swiper-button-next">
        </div>
      </Swiper>
    </div>

  );
};
export default Hero;
