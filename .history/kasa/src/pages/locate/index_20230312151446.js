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
        
        <details><summary>Equ</summary>
            <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées 
                par nos équipes  </p></details>
                <details><summary>Respect</summary>
    <p> coucou</p>

    </main>)
}
export default Locate