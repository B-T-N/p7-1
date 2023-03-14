import { useParams } from "react-router-dom";
import locatelist from "../../datas/locatelist.json";
import Gallery from "../../components/gallery";
import redstar from "../../asssets/star_rate/star_rate-24pxred.svg"
import star from "../../asssets/star_rate/star_rate-24px.svg"



function Locate() {
  const { id } = useParams();
  const locateone = locatelist.find((object) => object.id === id);

  const { title, location, tags, host, rating, description, equipments } =
    locateone;

  const star = [1, 2, 3, 4, 5];
  return (
    <main>
      <Gallery />
      <div id="intro">
        <div>
          <h1 id="intro-title">{title}</h1>
          <h2 id="intro-location">{location}</h2>
          <div id="tags">
            {tags.map((tag) => {
              return (
                <span className="tag" key={`${tag}`}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div id="host">
          <div id="host-stars">
          {star.map((starElem) => (
  rating >= starElem ? (
    <img src={redstar} alt="red star" key={`redstar-${starElem}`} />
  ) : (
    <img src={star} alt="gray star" key={`star-${starElem}`} />
  )
))}
          </div>

          <div id="host-info">
            <p id="host-info-name">{host.name}</p>
            <img id="host-info-picture" src={host.picture} alt="{host.name}" />
          </div>
        </div>
      </div>

      <div id="housing-info">
        <details className="housing-info-details">
          <summary className="housing-info-title">
            Description <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="housing-info-text">{description}</p>
        </details>

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
      </div>
    </main>
  );
}

export default Locate;