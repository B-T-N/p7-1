import "./equipement.css"
function Equipments({ equipments }) {
  return (
    <details className="equipement-details">
      <summary className="equipement-title">
        <p className="det-title">Equipements </p>
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