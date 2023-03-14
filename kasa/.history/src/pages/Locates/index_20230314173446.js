import { useParams } from "react-router-dom";
import locatelist from "../../datas/locatelist.json";
import Gallery from "../../components/gallery";
import Host from "../../components/Host/Host.js";
import Description from "../../components/description/description.js";
import Equipments from "../../components/equipement/equipements.js";
import "./locate"
function Locate() {
  const { id } = useParams();
  const locateone = locatelist.find((object) => object.id === id);

  const { title, location, tags, host, rating, description, equipments } =
    locateone;

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

        <Host host={host} rating={rating} />
      </div>

      <div id="housing-info">
        <Description description={description} />
        <Equipments equipments={equipments} />
      </div>
    </main>
  );
}

export default Locate;