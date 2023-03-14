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

  nst prevSlide = () => {
    const prevIndex = current === 0 ? pictures.length - 1 : current - 1;
    const prevId = locatelist[prevIndex].id;
    setCurrent(prevIndex);
    if (prevId === undefined) {
      // Si prevId n'est pas défini, cela signifie que prevIndex est en dehors de la plage des indices valides
      window.location.replace(`/locate/${locatelist[0].id}`);
    } else {
      window.location.replace(`/locate/${prevId}`);
    }
  };
  
  const nextSlide = () => {
    const nextIndex = current === pictures.length - 1 ? 0 : current + 1;
    const nextId = locatelist[nextIndex].id;
    setCurrent(nextIndex);
    if (nextId === undefined) {
      // Si nextId n'est pas défini, cela signifie que nextIndex est en dehors de la plage des indices valides
      window.location.replace(`/locate/${locatelist[locatelist.length - 1].id}`);
    } else {
      window.location.replace(`/locate/${nextId}`);
    }
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