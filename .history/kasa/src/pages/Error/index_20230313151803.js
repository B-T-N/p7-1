import { Link } from "react-router-dom"
import "./erreur.css"

function Error(){
    return(
        <main>
            <div id ="error">
                <span> 404</span>
                <p> Oups la page que vous demandez n'existe pas </p>

                <Link
                c
                to ='/'
                aria-label=" retourner a la page d'accueil">
                    retour a la page d'accueil
                
                </Link>

            </div>
        </main>
    )
}
export default Error