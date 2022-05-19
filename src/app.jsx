import React from "react";
import Nav from "./component/Nav/navbar";
import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import Footer from "./component/Footer/footer";
import Blog from "../src/Pages/Blog/blog";
import Pag from "./Pages/Pagees/Pagees";
import Contact from "./Pages/Contact us/Contact";
import AllCourse from "./Pages/Courses/courses";
import Events from "./Pages/Events/events/Events";
import { Routes, Route } from "react-router-dom";
export default class App extends React.Component{
    render(){
    return(
        <>
          <Nav/>
              <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="about" element={<About/>}></Route>
              <Route path="blog" element={<Blog/>}></Route>
              <Route path="pages" element={<Pag/>}></Route>
              <Route path="contact" element={<Contact/>}></Route>
              <Route path="course" element={<AllCourse/>}></Route>
              <Route path="events" element={<Events/>}></Route>
            </Routes>
            <Footer/>
            </>
        )
    }
}