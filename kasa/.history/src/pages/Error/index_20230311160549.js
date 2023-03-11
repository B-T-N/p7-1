import { Link } from "react-router-dom"
//import des logements 
//import du backend 
import locatelist from "../../datas/locatelist.json"

function Error(){
    return(
        <main>
            <div id ="title">
                <img id = "titlebanner"
                src= {bannerhome}
                alt ="home's banner">
                <h1> Chez vous et partout ailleur</h1>
                </img>

            </div>
        </main>
    )
}
export default Error