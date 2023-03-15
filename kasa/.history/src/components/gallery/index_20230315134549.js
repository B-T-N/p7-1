// Importation de React et useState depuis la bibliothèque 'react'
import React, { useState } from "react"; 
// Importation de useParams depuis la bibliothèque 'react-router-dom'
import { useParams } from "react-router-dom"; 
// Importation de la feuille de style CSS pour cette galerie
import "./gallery.css"; 
// Importation de l'image de la flèche gauche
import arrowback from "../../asssets/arrow/arrow_back.png"; 
// Importation de l'image de la flèche droite
import arrownext from "../../asssets/arrow/arrow_next.png"; 
// Importation de la liste des logements depuis un fichier JSON
import locatelist from "../../datas/locatelist.json"; 


function Gallery() { 
  // Récupération de l'ID du logement depuis les paramètres de l'URL
  const { id } = useParams(); 
  // Récupération des images correspondantes au logement
  
  const locatePict = locatelist.find((object) => object.id === id); 
  // Stockage des images dans une variable

  const { pictures } = locatePict; 
  const [current, setCurrent] = useState(0); // Initialisation de l'index de l'image courante à afficher

  const index = locatelist.findIndex((object) => object.id === id); // Récupération de l'index du logement dans la liste

  const prevSlide = () => { // Fonction pour passer à l'image précédente
    const prevIndex = index === 0 ? locatelist.length - 1 : index - 1; // Calcul de l'index de l'image précédente
    const prevId = locatelist[prevIndex].id; // Récupération de l'ID du logement précédent
    setCurrent(current === 0 ? pictures.length - 1 : current - 1); // Mise à jour de l'index de l'image courante à afficher
    window.location.replace(`/locate/${prevId}`); // Redirection vers la page du logement précédent
  };

  const nextSlide = () => {
    const nextIndex = index === locatelist.length - 1 ? 0 : index + 1;
    const nextId = locatelist[nextIndex].id;
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    window.location.replace(`/locate/${nextId}`);
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