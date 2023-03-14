function Description({ description }) {
  return (
    <details className="housing-info-details">
      <summary className="housing-info-title">
        Description <i className="fa-solid fa-chevron-down"></i>
      </summary>
      <p className="description-text">{description}</p>
    </details>
  );
}

export default Description;