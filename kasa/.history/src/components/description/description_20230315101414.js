import{arrow_down} from "../../asssets/arrow/"
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