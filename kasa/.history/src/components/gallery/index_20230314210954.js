import React, { useState } from "react";
import { useParams,  useNavigate} from "react-router-dom";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";

// Import du fichier de style pour la galerie
import "./gallery.css";

// Import du fichier locate.json
import locatelist from "../../datas/locatelist.json";

function Gallery() {
  const { id } = useParams();
  const locatePict = locatelist.find((object) => object.id === id);
  const { pictures, locations } = locatePict;

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    const newIndex = current === pictures.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
    window.location.href = `/${id}/${newIndex}`;
  };

  const prevSlide = () => {
    const newIndex = current === pictures.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
    window.location.href = `/${id}/${newIndex}`;
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