import {Link} from"react-router-dom"
//import de l'image 
import bannerhome from "../../asssets/photos nature/home.png"
//import des logements 
import locatelist from "../../datas/locatelist.json"
import Card from "../../components/cards"

function Home(){
    return(
        <main>
            <div id ="title">
                <img id = "titlebanner"
                src= {bannerhome}
                alt ="home's banner">
                <h1> Chez vous et partout ailleur</h1>
                </img>


            </div>
            <div id = "cards">
                {locatelist.map((cards) => (
                    <Link
                    className = "locate_link"
                    key = {`${cards.id}`}
                    to = {`/locatelist/${cards.id}`}
                    >
                    <Card 
                    key = {`${cards.id}`}
                    cover ={cards.cover}
                    title = {cards.title}/>
                    </Link>
                ))}
            </div>
        </main>
    )
}
export default Home