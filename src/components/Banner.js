import React from "react";
import "../styles/Banner.css";
import maskBG from "../assets/maskBG.png";

const Banner = ({ img }) => {
  return (
    <div className="banner_container">
      <img src={img} alt="" className="imgBG" />
      <img src={maskBG} alt="filtre bannière" className="maskBG" />
      <div className="banner_text banner_text_desktop">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="banner_text banner_text_mobile">
        <p>Chez vous,<br/>partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Banner;
