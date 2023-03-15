import "./description.css"
function Description({ description }) {
  return (
    <details className="description-details">
      <summary className="description-title">
      <p className="det-title">Description </p>         
    

      </summary>
      <p className="description-text">{description}</p>
    </details>
  );
}

export default Description;