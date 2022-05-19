import React from "react";
import "./blog.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default class Blog extends React.Component{
    render(){
        
        return(
            <>
            <div className="container-fluid bg-light py-3  ">
                <div className="row py-4">
                <h2 className="head2 text-center">How We Teach </h2>
                </div>
            
            <Swiper 
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card mb-3 two" style={{width: "540px",border:"none"}}>
  <div className="row g-0 ">
    <div className="col-md-4 one">
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title head4">Vocational Counselling</h5>
        <p className="card-text para3">Vocational counselling is a career <br /> focused on helping people who need to<br /> find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card mb-3 nine" style={{width: "540px",border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4 eight">
    </div>
    <div className="col-md-8 ">
      <div className="card-body ">
        <h5 className="card-title head4">Student Guidance</h5>
        <p className="card-text para3">
Student Guidance
Vocational counselling is a career focused on helping people who need to find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card mb-3 four" style={{width: "540px",border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4 three">
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title head4">Elementary School</h5>
        <p className="card-text para3">Vocational counselling is a career <br /> focused on helping people who need to<br /> find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
      </div>  
            </>
        )
    }
}