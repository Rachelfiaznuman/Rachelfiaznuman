import React from "react";
import "./navbar.css";
import {BsTelephoneFill} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md"
import {FaFacebookF,FaLinkedinIn,FaTwitter} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import Img1 from  "../../assets/images/F_Logo.png"
import { Link } from "react-router-dom";
export default class Nav extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid cont1">
                <div className="row  d-flex justify-content-md-center justify-content-sm-center justify-content-center">
                <div className="col-lg-2 col-md-3 col-sm-6 d-flex align-items-center justify-content-center ">
                 <BsTelephoneFill className="bss mx-4"/>
                  <p className="text-white mt-3"> +1800 326 3264   </p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                      <MdOutlineEmail className="mdd"/>
                    <p className="text-white ml-4 mt-3">support@website.com</p>      
                </div>
                <div className="col-lg-6"></div>
                <div className="col-lg-2 col-md-3 col-sm-3  ">
                    <div className="container d-flex justify-content-around align-items-center mt-4">
                    <p className="text-white">{<FaFacebookF/>}</p>
                    <p className="text-white">{<FaLinkedinIn/>}</p>
                    <p className="text-white">{<FaTwitter/>}</p>
                    <p className="text-white">{<BsWhatsapp/>}</p>
                </div>
                </div>
                </div>
            </div>
            <div className="container-fluid cont2">
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid py-1">
           <div className="col-lg-5  d-flex justify-content-center  py-2 px-5">
           <img src={Img1 } alt="" />
            </div>
         <button className="navbar-toggler cr" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse w-100  " id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around extra  w-75 ">
        <li className="nav-item text-center">
        <a className="nav-link active" aria-current="page" href="#" ><Link to="/" className="li" style={{textDecoration:"none",}}> Home </Link></a>
        </li>
        <li className="nav-item text-center">
        <a className="nav-link" href="#"><Link to="about" className="li" style={{textDecoration:"none",}}>About Us</Link></a>
        </li>
        <li className="nav-item text-center">
        <a className="nav-link" href="#"><Link to="events" className="li" style={{textDecoration:"none",}}>Events</Link></a>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link" href="#"><Link to="course" className="li" style={{textDecoration:"none",}}>All Courses</Link></a>
        </li>
        
        <li className="nav-item dropdown text-center">
          <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-hover="dropdown" aria-expanded="false">
            <span className="li" style={{textDecoration:"none",}}>Blog</span>
          </a>
          <ul className="dropdown-menu ccr py-2" aria-labelledby="navbarDropdown">
            <li className="text-center py-1 li "><a className="dropdown-item text-white li" href="#" style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Blog Large</a></li>
            <li className="text-center py-1 li"><a className= "dropdown-item text-white li" href="#" style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Blog Grid</a></li>
            <li className="text-center py-1 li"><a className= "dropdown-item text-white li" href="#" style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}><Link to="blog" className="li" style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif",color:"white"}}>Blog Single</Link></a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown text-center">
          <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-hover="dropdown" aria-expanded="false"><span className="li" style={{textDecoration:"none",}}>Pages</span></a>
          <ul className="dropdown-menu ccr py-2" aria-labelledby="navbarDropdown">
            <li className="text-center py-1 "><span className="dropdown-item text-white li"  style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>All Trainers</span></li>
            <li className="text-center py-1"> <span className= "dropdown-item text-white li"   style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Achievements</span></li>
            <li className="text-center py-1"> <span className= "dropdown-item text-white li"   style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Gallery</span></li>
            <li className="text-center py-1"> <span className= "dropdown-item text-white li"   style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Placements</span></li>
            <li className="text-center py-1"> <span className= "dropdown-item text-white li"   style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}>Pricing Table</span></li>
            <li className="text-center py-1"> <span className= "dropdown-item text-white li"   style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif"}}><Link to="pages"  className="li" style={{textDecoration:"none",fontSize:"14px",fontFamily:"sans-serif",color:"white"}}>404 Error</Link></span></li>
          </ul>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link" href="#"><Link to="contact" className="li" style={{textDecoration:"none",}}>Contact Us</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
            </>
        )
    }
}