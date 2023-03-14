import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";
import locatelist from "../../datas/locatelist.json";

function Gallery() {
  const { id } = useParams();
  const locatePict = locatelist.find((object) => object.id === id);
  const { pictures } = locatePict;

  const [current, setCurrent] = useState(0);

  const index = locatelist.findIndex((object) => object.id === id);

  const prevSlide = () => {
    const prevIndex = index === 0 ? locatelist.length - 1 : index - 1;
    const prevId = locatelist[prevIndex].id;
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    window.location.replace(`/locate/${prevId}`);
  };

  const nextSlide = () => {
    const nextIndex = index === locatelist.length - 1 ? 0 : index + 1;
    const nextId = locatelist[nextIndex].id;
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    window.location.replace(`/product/${nextId}`);
  };

  return (
    <div className="gallery-container">
      {pictures.length > 1 && (
        <img src={arrowback} alt="Flèche gauche" onClick={prevSlide} />
      )}
      <div className="gallery-image">
        {pictures.map((img, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img
                  src={img}
                  alt="Photos du logement"
                  className="gallery-image"
                />
              )}
            </div>
          );
        })}
      </div>
      {pictures.length > 1 && (
        <img src={arrownext} alt="Flèche droite" onClick={nextSlide} />
      )}
    </div>
  );
}

export default Gallery;