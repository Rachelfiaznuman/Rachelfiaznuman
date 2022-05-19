import React from "react";

import "./slider.css";
import Img2 from "../../assets/images/slide-img2.png"
import Img3 from "../../assets/images/slide-img1.png"


// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img2} class="d-block w-100 hei" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100 hei" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
