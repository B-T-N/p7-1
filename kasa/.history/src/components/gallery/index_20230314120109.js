import React, { useState } from 'react';

function Carousel(props) {
  const { items } = props;

  // Utilisez le hook useState pour suivre l'index de l'élément en cours
  const [currentItem, setCurrentItem] = useState(0);

  // Utilisez une fonction pour avancer au prochain élément du carousel
  const nextItem = () => {
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1);
  };

  // Utilisez une fonction pour revenir à l'élément précédent
  const prevItem = () => {
    setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1);
  };

  // Affichez l'élément actuel et les boutons de navigation
  return (
    <div className="carousel">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item${currentItem === index ? ' active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={prevItem}>Prev</button>
      <button className="carousel-next" onClick={nextItem}>Next</button>
    </div>
  );
}

export default Carousel;