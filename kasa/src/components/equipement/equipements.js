function Equipments({ equipments }) {
    return (
      <details className="equipement-details">
        <summary className="equipement-title">
          Equipements <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <ul className="equipement-text">
          {equipments.map((equipment) => {
            return <li key={`${equipment}`}> {equipment}</li>;
          })}
        </ul>
      </details>
    );
  }
  
  export default Equipments;