import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./gallery.css";
import arrowback from "../../asssets/arrow/arrow_back.png";
import arrownext from "../../asssets/arrow/arrow_next.png";

import "./gallery.css";
import locatelist from "../../datas/locatelist.json";

function Carousel() {
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
<div className="carousel-container">
{pictures.length > 1 && (
<img src={arrowback} alt="Flèche gauche" onClick={prevSlide} />
)}
<div className="carousel-images">
{pictures.map((img, index) => {
return (
<div key={index} className={index === current ? "slide active" : "slide"}>
<img src={img} alt="Photos du logement" className="carousel-image" />
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

export default Carousel;