import{arrow_down} from "../../asssets/arrow/arrow_down.png"
function Description({ description }) {
  return (
    <details className="description-details">
      <summary className="description-title">
        Description 
      </summary>
      <p className="description-text">{description}</p>
    </details>
  );
}

export default Description;