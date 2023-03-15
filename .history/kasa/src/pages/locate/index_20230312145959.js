import { useParams } from "react-router-dom"
import locatelist from "../../datas/locatelist.json"
import caroussel from "../../components/gallery/index"
function Locate(){
    const {id} =useParams()
    const locateone = locatelist.find((object) => object.id == id)
    const{title,location, tags,host,description,rating,equipments } = locateone
    return(<main>
        <h1>{title} </h1>
        <h2>{location} </h2>
        
    <p> coucou</p>)

    </main>
}
export default Locate