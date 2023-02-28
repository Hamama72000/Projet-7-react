import { useParams } from "react-router-dom";
import Properties from "../data/logements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/logement.css";
import "../styles/App.css";
import star_filled from "../assets/star-filled.svg";
import star_empty from "../assets/star-empty.svg";
import Collapse from "../components/Collapse";

export default function Logement() {
  //get last part of url
  const { id } = useParams();
  //from propreties get the one with the same id
  const property = Properties.find((property) => property.id === id);

  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination]}
        className="slider"
      >
        {property.pictures.map((picture) => (
          <SwiperSlide>
            {" "}
            <img className="slider_image" src={picture} alt={picture} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="property_header">
        <div>
          <p className="property_title">{property.title}</p>
          <p className="property_description_header">{property.location}</p>
          {property.tags.map((tag) => (
            <p className="tags">{tag}</p>
          ))}
        </div>
        <div className="property_host_and_rate">
          <div className="property_host">
            <div className="host_name">
              <p className="property_description">{property.host.name.split(" ")[0]}</p>
              <p className="property_description">{property.host.name.split(" ")[1]}</p>
            </div>
            <img className="host_picture" src={property.host.picture} alt={property.host.picture} />
          </div>
          <div className="property_rate">
            {Array.from(Array(5).keys()).map((star) => (
              <img className="star" src={star < property.rating ? star_filled : star_empty} alt={star < property.rating ? "bien" : "pas bien"} />
            ))}
          </div>
        </div>
      </div>

      <div className="property_description">
      <Collapse  props={property.description} title="Description" />
      <Collapse  props={property.equipments} title="Equipement" />
      </div>
    </div>
  );
}
