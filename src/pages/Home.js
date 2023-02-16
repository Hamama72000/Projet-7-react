import React from "react";
import Banner from '../components/Banner.js'
import BGHome from "../assets/home_bg_banner.png"



export default function Home() {
 
    document.title = "Kasa - Accueil";
    return (
        <main className="display_home">
            <Banner img={BGHome} text1={'Chez vous,'} text2={'partout et ailleurs'} />
            <div className="display_card">
            </div>
        </main>
    );
}
