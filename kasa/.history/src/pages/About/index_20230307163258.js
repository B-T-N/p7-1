//import de l'image 
import bannerhome from "../../asssets/photos nature/home.png"
//import des logements 
//import du backend 
import locatelist from "../../datas/locatelist.json"

function About(){
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
export default About