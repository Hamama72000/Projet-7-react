import React from "react";
import Banner from "../components/Banner.js";
import BGHome from "../assets/home_bg_banner.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Properties from "../data/logements";

export default function Home() {
  document.title = "Kasa - Accueil";

  return (
    <main className="display_home">
      <Navbar />
      <Banner img={BGHome} text1={"Chez vous, partout et ailleurs"} />
      <div className="display_card">
        {Properties.map((logement) => (
          <Card key={logement.id} property={logement} />
        ))}
      </div>
    </main>
  );
}
