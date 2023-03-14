import redstar from "../../asssets/star_rate/star_rate-24px 5.svg"
import stars from "../../asssets/star_rate/star_rate-24px 2.svg"
import "."
function Host({ host, rating }) {
  const star = [1, 2, 3, 4, 5];

  return (
    <div id="host">
      <div id="host-stars">
        {star.map((starElem) => (
          rating >= starElem ? (
            <img src={redstar} alt="red star" key={`redstar-${starElem}`} />
          ) : (
            <img src={stars} alt="gray star" key={`star-${starElem}`} />
          )
        ))}
      </div>

      <div id="host-info">
        <p id="host-info-name">{host.name}</p>
        <img id="host-picture" src={host.picture} alt="{host.name}" />
      </div>
    </div>
  );
}

export default Host;