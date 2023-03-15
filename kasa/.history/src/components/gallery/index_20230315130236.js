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
    if (current === 0) {
      setCurrent(pictures.length - 1);
      window.location.replace(`/locate/${prevId}`);
    } else {
      setCurrent(current - 1);
    }
  };
  
  const nextSlide = () => {
    const nextIndex = index === locatelist.length - 1 ? 0 : index + 1;
    const nextId = locatelist[nextIndex].id;
    if (current === pictures.length - 1) {
      setCurrent(0);
      window.location.replace(`/locate/${nextId}`);
    } else {
      setCurrent(current + 1);
    }
  };
  This should update the setCurrent state correctly and allow the carousel to work on the first and last URLs.
  
  
  
  
  tourte-man@hotmail.fr
  in french
  Bien sûr, je suis là pour vous aider. Comment puis-je vous aider aujourd'hui ?
  
  
  
  
  tourte-man@hotmail.fr
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
  probleme sur le premier et dernier url je ne peu pas utiliser le carousel 
  Il semble y avoir un problème avec les liens précédent et suivant dans votre carousel. Vous avez actuellement configuré ces liens pour rediriger vers l'URL de la location précédente ou suivante en utilisant window.location.replace(). Cela peut causer des problèmes car cela recharge la page, ce qui peut provoquer la perte de l'état de votre composant. Pour résoudre ce problème, vous pouvez utiliser la fonction history.push() fournie par react-router-dom. Cela vous permettra de naviguer entre les différentes pages sans recharger la page.
  
  Pour utiliser history.push(), vous devrez d'abord importer useHistory de react-router-dom et l'appeler dans votre composant. Vous pouvez ensuite remplacer les appels window.location.replace() par des appels à history.push().
  
  Voici un exemple de code qui utilise history.push() pour la navigation entre les différentes pages de votre carousel :
  
  python
  Copy code
  import React, { useState } from "react";
  import { useParams, useHistory } from "react-router-dom";
  import "./gallery.css";
  import arrowback from "../../asssets/arrow/arrow_back.png";
  import arrownext from "../../asssets/arrow/arrow
  
  
  
  tourte-man@hotmail.fr
  usehistory ne fontionne pas 
  Il est possible que le problème soit lié à l'importation incorrecte de useHistory depuis react-router-dom.
  
  Assurez-vous d'importer useHistory correctement en ajoutant la ligne suivante en haut de votre fichier:
  
  javascript
  Copy code
  import { useHistory } from "react-router-dom";
  Ensuite, vous pouvez utiliser useHistory dans votre fonction Gallery comme suit:
  
  javascript
  Copy code
  function Gallery() {
    const history = useHistory();
    // le reste du code
  }
  Ensuite, vous pouvez utiliser history.push() au lieu de window.location.replace() pour naviguer vers la page précédente ou suivante de votre galerie, comme suit:
  
  javascript
  Copy code
  const
  
  
  

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