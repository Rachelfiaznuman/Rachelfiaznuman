import "./secondSlider.css"
import { CgProfile } from "react-icons/cg";
import Img11 from "../../assets/images/pic6.jpg"
import Img12 from "../../assets/images/pic7.jpg.jpg"
import Img13 from "../../assets/images/pic8.jpg.jpg"
import Img14 from "../../assets/images/pic10.jpg.jpg"
import Img15 from "../../assets/images/pic11.jpg.jpg"
import Img16 from "../../assets/images/pic9.jpg.jpg"
import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation"; 


import {Autoplay,  Navigation } from "swiper";
// import { padding } from "@mui/system";

export default class  Slider_two extends React.Component {

  

  render(){

    
  return (
    <>
    <div className="container-fluid py-4 bg-light d-flex justify-content-center align-items-center flex-column">
      <h2 className="head99 py-3 mt-3">Recent Added Courses</h2>


  
    <div className="container py-3">
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        slidesPerGroup={1}
        loop={true}
        autoplay={
          {
            delay:2500,
            disableOnInteraction:false,
          }
        }
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"


        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
            
          },
          // when window width is >= 480px
          480: {
            width: 480,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          // 768: {
          //   width: 768,
          //   slidesPerView: 3,
          // },
          1020: {
            width: 1020,
            slidesPerView: 4,
            // spaceBetween: 110
          },
        }}
      >
        <SwiperSlide className="secondSlider_ownMargin">
        <div className="card">
  <img src={Img11} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Project Learning</h5>
    <p className="card-text "></p>
    <hr />
    <p className="p-0 m-0" >  <span style={{fontSize:"25px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">Free</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide className="secondSlider_ownMargin">
        <div className="card p-0 m-0">
  <img src={Img12} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Management Prog.</h5>
    <p className="card-text"></p>
    <hr />
    <p className="p-0 m-0">  <span style={{fontSize:"30px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">$95.00</p>
  </div>
</div>



        </SwiperSlide>
        <SwiperSlide className="secondSlider_ownMargin">
        <div className="card">
  <img src={Img13} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Javascript Campus</h5>
    <p className="card-text"></p>
    <hr />
    <p className="p-0 m-0">  <span style={{fontSize:"30px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">$50.00</p>
  </div>
</div>



        </SwiperSlide>
        <SwiperSlide className="secondSlider_ownMargin">
        <div className="card">
  <img src={Img14} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Model Specificity</h5>
    <p className="card-text"></p>
    <hr />
    <p className="p-0 m-0">  <span style={{fontSize:"30px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">$300.00</p>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide className="secondSlider_ownMargin">

        <div className="card">
  <img src={Img15} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sample Course</h5>
    <p className="card-text"></p>
    <hr />
    <p className="p-0 m-0">  <span style={{fontSize:"30px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">$300.00</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide className="secondSlider_ownMargin">

        <div className="card">
  <img src={Img16} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Learning Seminar</h5>
    <p className="card-text"></p>
    <hr />
    <p className="p-0 m-0">  <span style={{fontSize:"30px"}}><CgProfile/> </span>Traininginstitute</p>
    <hr />
    <p className="text-end p-0 m-0">$300.00</p>
  </div>
</div>

        </SwiperSlide>
       
      </Swiper>
      </div>
      </div>
    </>
  );
}
}
