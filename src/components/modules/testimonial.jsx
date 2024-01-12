import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import profileImg from "/profile.jpg?url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RatingComponent from "../util/rating";

const Testimonial = () => {
  
  const cardCount = [1, 2, 3, 4, 5, 6];

  return (
    <div className="sm:px-10 mb-5 md:mb-10 w-full ">
      <Swiper
        className="sm:px-10"
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
            spaceBetween: 50,
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

      >
        {cardCount.map((index) => (
          
          <SwiperSlide key={index}>
           <div className="h-80 flex items-center min-w-[200px]">
              <div className="w-full mx-auto bg-slate-800 shadow-md rounded-3xl relative h-fit">
                <div className="w-full flex rounded-3xl justify-center">
                  <div className="mt-[-35px] w-20 h-20 bg-white rounded-full flex justify-center">
                    <img
                      className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full bg-slate-200"
                      alt="Profile"
                      src={profileImg}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between p-5">
                  <div className="p-4 text-center flex flex-row justify-between px-3">
                    <div className="mb-2 ">
                      <h2 className="text-xl text-white font-bold text-start">Jhone Deo</h2>
                      <h2 className="text-xs text-gray-400 text-start">Rehabilitation</h2>
                    </div>
                    <div className="text-yellow-500 font-bold">
                      <RatingComponent />
                    </div>
                  </div>{" "}
                  <div className="overflow:hidden text-start text-gray-400 m text-sm">
                    By hiring a nurse from Right Care for Nursing, you can avoid
                    the need for further on-{index}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
        </div>
        <div className="swiper-button-next">
        </div>
        <div className="flex justify-end items-end">

        <button className="text-blue-950 font-semibold italic underline font-poppins text-sm">
          Add your review
        </button>

        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;