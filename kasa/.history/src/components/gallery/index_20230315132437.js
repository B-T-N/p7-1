import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";
import locatelist from "../../datas/locatelist.json";

function Gallery() {
  // On récupère l'ID de l'emplacement dans l'URL
  const { id } = useParams();
  // On recherche l'objet emplacement correspondant à l'ID
  const locatePict = locatelist.find((object) => object.id === id);
  // On récupère la liste des photos associées à cet emplacement
  const { pictures } = locatePict;

  // On utilise l'état pour conserver l'index de la photo affichée
  const [current, setCurrent] = useState(0);

  // On récupère l'index de l'emplacement dans la liste des emplacements
  const index = locatelist.findIndex((object) => object.id === id);

  // Fonction appelée lors du clic sur la flèche gauche
  const prevSlide = () => {
    // On calcule l'index de l'emplacement précédent
    const prevIndex = index === 0 ? locatelist.length - 1 : index - 1;
    // On récupère l'ID de l'emplacement précédent
    const prevId = locatelist[prevIndex].id;
    // On met à jour l'index de la photo affichée
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    // On redirige l'utilisateur vers l'emplacement précédent
    window.location.replace(`/locate/${prevId}`);
  };

  // Fonction appelée lors du clic sur la flèche droite
  const nextSlide = () => {
    // On calcule l'index de l'emplacement suivant
    const nextIndex = index === locatelist.length - 1 ? 0 : index + 1;
    // On récupère l'ID de l'emplacement suivant
    const nextId = locatelist[nextIndex].id;
    // On met à jour l'index de la photo affichée
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    // Si c'est le dernier élément, rediriger vers le premier élément
    if (nextIndex === 0) {
      window.location.replace(`/locate/${locatelist[0].id}`);
    } else {
      // Sinon, rediriger vers l'emplacement suivant
      window.location.replace(`/locate/${nextId}`);
    }
  };

  return (
    <div className="gallery-container">
      {pictures.length > 1 && (
        <img src={arrowback} alt="Flèche gauche" onClick={prevSlide} />
      )}
      <div className="gallery-image">
        {/* On parcourt la liste des photos et on n'affiche que celle qui correspond à l'index courant */}
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