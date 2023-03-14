import React, { useState } from "react";
import { useHistory } from "react-router";

import {  useParams } from "react-router-dom";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";
import locatelist from "../../datas/locatelist.json";

function Gallery() {
  const { id } = useParams();
  const locatePict = locatelist.find((object) => object.id === id);
  const { pictures } = locatePict;

  const [current, setCurrent] = useState(0);
  const history = useHistory();

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    const prevId = parseInt(id) - 1;
    history.push(`/Locate/${prevId}`);
  };

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    const nextId = parseInt(id) + 1;
    history.push(`/Locate/${nextId}`);
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