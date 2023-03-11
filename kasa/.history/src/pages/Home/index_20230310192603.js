import { Link } from "react-router-dom";
import bannerhome from "../../asssets/photos nature/";
import locatelist from "../../datas/locatelist.json";
import Card from "../../components/cards";

function Home() {
  return (
    <main>
      <div id="title">
        <img id="titlebanner" src={bannerhome} alt="home's banner" />
        <h1>Chez vous et partout ailleurs</h1>
      </div>
      <div id="cards">
        {locatelist.map((card) => (
          <Link
            className="locate_link"
            key={`${card.id}`}
            to={`/Locate/${card.id}`}
          >
            <Card key={`${card.id}`} cover={card.cover} title={card.title} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;