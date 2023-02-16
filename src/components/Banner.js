import "../styles/Banner.css";
import logo from '../assets/maskBG.png'


function Banner() {
  return (
    <div className="banner_container">
        <h1>Kasa</h1>
        <img src={logo} alt='Logo Agence Kasa' className='maskBG' />
    </div>
  );
}

export default Banner;
