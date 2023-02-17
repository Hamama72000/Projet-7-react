import React from "react";
import "../styles/Banner.css";
import maskBG from "../assets/maskBG.png";


const Banner =  ({ img, text1 }) => {
        return (
            <div className="banner_container">
                <img src={img} alt="" className="imgBG" />
                <img src={maskBG} alt="filtre bannière" className="maskBG" />
                <div className="banner_text">
                    <p>{text1}</p>
                </div>
            </div>
        );
    };

export default Banner;
