import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Data from "../data/about";
import BGBanner from "../assets/about_bg_banner.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function About() {
   
    document.title = "Kasa - A propos de nous";
    return (
        
        <main className="display_about">
             <Navbar />
             <Banner img={BGBanner} />
            <div className="display_collapses">
                {Data.map((props, index) => (
                    <div className="collapses" key={index}>
                        <Collapse
                            key={index}
                            props={Data[index].text}
                            title={Data[index].title}
                        />
                    </div>
                ))}
            </div>
        <Footer/>
        </main>
    );
}