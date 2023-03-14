import React, { useState } from "react";
import { useParams } from "react-router-dom";

import arrowback from "../../asssets/arrow/arrow_back.png"
import arrownext from "../../asssets/arrow/arrow_next.png"


// Import du fichier de style pour la galerie
import "./gallery.css"

// Import du fichier locate.json
import locatelist from "../../datas/locatelist.json";

function Gallery() {
  const { id } = useParams();
  const locatePict = locatelist.find((object) => object.id === id);
  const { pictures } = locatePict;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="gallery-container">
      {pictures.length > 1 && (
        <div 'arrowback onClick={prevSlide}></div>
      )}
      <div className="gallery-image-container">
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
        <div arrownext onClick={nextSlide}></div>
      )}
    </div>
  );
}

export default Gallery;