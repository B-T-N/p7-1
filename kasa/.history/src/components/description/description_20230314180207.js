function Description({ description }) {
  return (
    <details className="housing-info-details">
      <summary className="description-title">
        Description <i className="fa-solid fa-chevron-down"></i>
      </summary>
      <p className="description-text">{description}</p>
    </details>
  );
}

export default Description;