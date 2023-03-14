function Equipments({ equipments }) {
    return (
      <details className="housing-info-details">
        <summary className="housing-info-title">
          Equipements <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <ul className="housing-info-text">
          {equipments.map((equipment) => {
            return <li key={`${equipment}`}> {equipment}</li>;
          })}
        </ul>
      </details>
    );
  }
  
  export default Equipments;