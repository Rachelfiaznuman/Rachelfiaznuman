import React, { Component } from 'react'
import "./footer.css"
import {BsFacebook,BsWhatsapp } from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaLinkedinIn,FaPaperPlane} from "react-icons/fa"


export default class Footer extends React.Component {
  render() {
    return (
      <>
    <div className="container-fluid img7">
        <div className="row d-flex justify-content-center">
            <div className="col-12 text-white d-flex justify-content-center align-items-center py-4 mt-5 ">
                <h4>Let us inform you about everything important directly.</h4>
            </div>
            <div class="input-group w-50  mb-3">
  <input type="text" class="form-control py-2" placeholder="Enter Email Addresss" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn bg-warning py-2 px-4" type="button" id="button-addon2">{<FaPaperPlane/>}</button>
  </div>
</div>
        </div>
    </div>

      <div className="container-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-3 mt-5">
                      <div className="img6 my-3"></div>
                      <p>Training Institute is an outstanding HTML template targeting educational institutions, helping them establish strong identity on the internet without any real developing knowledge.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12  mt-5  ">
                      <div className="row">
                      <h2 className='head77 mt-2'>Connect With Us</h2>

                          <div className="col-3 ion mt-3 ">
                          {<BsFacebook/>}
                          {<AiOutlineTwitter/>}
                          {<FaLinkedinIn/>}
                          {<BsWhatsapp/>}
                          </div>
                          <div className="col-9 mt-3">
                      <p className='para'> Facebook   </p>
                      <p className='para'> Twitter</p>
                      <p className='para'>Linkedin</p>
                      <p className='para'>Whatsapp</p>
                          </div>
                      </div>
                     
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12  mt-5  ">
                      <h3 className='head77 py-2'>Quick Links</h3>
                      <p className='para'>Quick Links</p>
                      <p className='para'>Become A TeacherAll</p>
                      <p className='para'>CoursesProfileCheckoutLogin</p>
                      <p className='para'>As A Tearch</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt-5 ">
                      <h3 className='head77 py-2'>Find Us</h3>
                      <p>Find Us143 Gordon Terrace BASSINGTHORPE NG33 0ZT United Kingdom </p>
                          <p>info@traininginstitute.com public@traininginstitute.com</p>
                          <p>+1800 326 3264</p>
                     
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid text-center">
          <div className="container border "></div>
          <p className='py-4'>© Copyright 2017, All Rights Reserved  <span style={{color:"orange"}}>TRAINING INSTITUTE</span> </p>
      </div>
      </>
    )
  }
}
