import { useParams } from "react-router-dom";
import locatelist from "../../datas/locatelist.json";
import Gallery from "../../components/gallery";
import redstar from "../../asssets/star_rate/star_rate-24pxred"

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
            {star.map((starElem) =>
              rating >= starElem ? (
                <svg
                  key={starElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star-red"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              ) : (
                <svg
                  key={starElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star-grey"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              )
            )}
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