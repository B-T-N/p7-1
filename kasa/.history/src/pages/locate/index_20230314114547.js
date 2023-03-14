import { useParams } from "react-router-dom"
import locatelist from "../../datas/locatelist.json"
import caroussel from "../../components/gallery/index"
function Locate(){
    const {id} =useParams()
    const locateone = locatelist.find((object) => object.id === id)
    const{title, location, tags, host, description, rating, equipments } = locateone
    return(<main>
        <h1>{title} </h1>
        <h2>{location} </h2>
        <div> 
          {tags.map((tag) => 
          return(
            <span key={`${tag}`}>
              {tag}
            </span>
          ))}
        </div>

        <details><summary>Equipement</summary>
            <p>
              {equipments}  </p></details>
              <details><summary>description</summary>
            <p>
              {description}  </p></details>
    <p> coucou</p>

    </main>)
}
export default Locate