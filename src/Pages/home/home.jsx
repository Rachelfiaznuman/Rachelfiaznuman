import React from "react";
import Slider from "../../component/Sliders/slider"
import Inp from "../home/event"
import Course from "../home/courses"
import Event from "../home/event";
import Page from "../home/page";
import Join from "../../component/Counter/joinus";
import Slider2 from "../../component/Sliders/slider2";
import Slider_two from "../../component/Sliders/secondSlider";
import Price from "../home/price";
export default class Home extends React.Component{
    render(){
        return(
            <>
            <Slider/>
            <Inp/>
            <Course/>
            <Page/> 
            <Join/>
            <Slider_two/>
            <Price/>
            <Slider2/>
            </>
        )
    }
}