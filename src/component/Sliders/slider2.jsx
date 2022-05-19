import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "./slider2.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default class Slider2 extends React.Component {
    render(){
  return (
    <>
    <div className="container-fluid py-4  bg-light">
        <h2 className="head11 text-center">Our Partners</h2>
    </div>
    <div className="container-fluid py-5 bg-light">
    <div className="container slidcont1 bg-light ">
        <div className="row">
      <Swiper
      slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        centeredSlides={false
        }
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-light"><div className="photo"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo1"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo2"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo3"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo4"></div></SwiperSlide>

      </Swiper>
      </div>
      </div>
      </div>
    </>
  );
}
}
