import { useParams } from "react-router-dom"
import locatelist from "../../datas/locatelist.json"
function Locate(){
    const {id} =useParams()
    const locateone = locatelist.find((object) => object.id == id)
    const{title,location,tags,host,description,rating,equipments } = locateone
    return(<main>
    <p> coucou</p>)

    </main>
}
export default Locate