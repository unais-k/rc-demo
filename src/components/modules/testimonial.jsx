import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import profileImg from "/profile.jpg?url";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RatingComponent from "../util/rating";
import { useEffect, useRef, useState } from "react";

const Testimonial = () => {
  
  const [activeSlide, setActiveSlide] = useState(-1);
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());
  const swiperRef = useRef(null);
  const cardCount = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    // Update the number of slides per view when the window is resized
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateSlidesPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      return 3; 
    } else if (screenWidth >= 768) {
      return 2; 
    } else {
      return 1; 
    }
  }

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex - 3);
      setActiveSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex + 3);
      setActiveSlide((prev) => prev + 1);
    }
  };

  console.log(activeSlide)

  return (
    <div className="p-28 w-full ">
      {activeSlide  === 4 && <IoIosArrowBack size={30}  onClick={handlePrev} className="cursor-pointer items-start" />}
  
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
       
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
      
        {cardCount.map((index) => (
          
          <SwiperSlide key={index}>
           <div className="h-80 flex items-center max-w-lg mx-w-md">
              <div className="w-full mx-auto bg-slate-800 shadow-md rounded-3xl relative h-3/4">
                <div className="w-full flex rounded-3xl justify-center">
                  <div className="mt-[-35px] w-20 h-20 bg-white rounded-full flex justify-center">
                    <img
                      className="w-16 h-16 object-cover rounded-full bg-slate-200"
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
      </Swiper>
      <div className="flex justify-center mt-1">
        <button
          className={`mx-2 border-2 w-20 rounded-full h-3 border-gray-500 ${activeSlide === 4 ? 'border-gray-500' : 'bg-yellow-200'}`}
          onClick={handlePrev}
        ></button>
        <button
          className={`mx-2 border-2 w-20 rounded-full h-3 border-gray-500 ${activeSlide  === -1 ? 'border-gray-500' : 'bg-yellow-200'}`}
          onClick={handleNext}
        ></button>
      </div>{
        activeSlide  === -1 && <IoIosArrowForward size={30} onClick={handleNext} className="cursor-pointer"/>
      }
     
    </div>
  );
};

export default Testimonial;

