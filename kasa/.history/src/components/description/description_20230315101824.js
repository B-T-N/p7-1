import{arrowdown} from "../../asssets/arrow/arrow_down.png"
function Description({ description }) {
  return (
    <details className="description-details">
      <summary className="description-title">
        Description 
        <img src={arrowdown} alt = "fleche description" /img>
      </summary>
      <p className="description-text">{description}</p>
    </details>
  );
}

export default Description;