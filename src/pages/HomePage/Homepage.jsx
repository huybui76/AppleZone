import React, { useDebounce, useState, useSelector, useEffect } from "react";
import Flashsales from "../../components/Flashsales/Flashsales";
import SlideAnimate from "../../components/SlideAnimate/SlideAnimate";
import Footer from "../../components/Footer/Footer";
import BoxSlides from "../../components/BoxSlides/BoxSlides";
import * as ProductService from "../../services/ProductService";
import "./Homepage.css";
import slide1 from "../../assets/animate1.webp";
import slide2 from "../../assets/animate2.webp";
import slide3 from "../../assets/animate3.webp";
import slide4 from "../../assets/animate4.webp";

const Homepage = () => {
    return (
        <div className="container">
            <div className="body">
                <div>
                    <SlideAnimate images={[slide1, slide2, slide3, slide4]} key={1} />
                </div>
                <Flashsales />
                <BoxSlides />
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
