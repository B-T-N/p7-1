import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";
import locatelist from "../../datas/locatelist.json";


function Gallery() {
  const { id } = useParams();
  const locatePict = locatelist.find((object) => object.id === id);
  const { pictures } = locatePict;

  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };

  return (
    <div className="gallery-container">
      {pictures.length > 1 && (
        <img src={arrowback} alt="Flèche gauche" onClick={() => setCurrent(current === 0 ? pictures.length - 1 : current - 1)} />
      )}
      <div className="gallery-image">
        <Slider {...settings}>
          {pictures.map((img, index) => {
            return (
              <div key={index}>
                <img src={img} alt="Photos du logement" className="gallery-image" />
              </div>
            );
          })}
        </Slider>
      </div>
      {pictures.length > 1 && (
        <img src={arrownext} alt="Flèche droite" onClick={() => setCurrent(current === pictures.length - 1 ? 0 : current + 1)} />
      )}
    </div>
  );
}

export default Gallery;