import { useParams } from "react-router-dom"
import locatelist from "../../datas/locatelist.json"
import Gallery from "../../components/gallery/index"

function Locate(){
    const {id} =useParams()
    const locateone = locatelist.find((object) => object.id === id)

    const{title, location, tags, host, description, rating, equipments, pictures } = locateone
    const star = [1,2,3,4,5]
    return(<main>
        <h1>{title} </h1>
        <h2>{location} </h2>
        <div> 
          {tags.map((tag) =>{
          return(
            <span key={`${tag}`}>
              {tag}
            </span>
          ));}
        </div>
{star.map}
        <details><summary>Equipement</summary>
            <p>
              {equipments}  </p></details>
              <details><summary>description</summary>
            <p>
              {description}  </p></details>

        <Gallery pictures={pictures} />

    </main>)
}
export default Locate