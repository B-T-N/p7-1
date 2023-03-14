import React, { useState } from "react";
import { useParams } from "react-router-dom";


// Import du fichier de style pour la galerie
import "./"

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
        <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
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
        <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      )}
    </div>
  );
}

export default Gallery;