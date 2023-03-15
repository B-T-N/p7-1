import { useParams } from "react-router-dom"
import locatelist from "../../datas/locatelist.json"
function Locate(){
    const {id} =useParams()
    const locateone = locate.find((object) => object.id == id)
    const{title,location,tags,host,description,rating }
    return(
    <p> coucou</p>)
}
export default Locate