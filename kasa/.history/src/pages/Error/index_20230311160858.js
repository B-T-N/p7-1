import { Link } from "react-router-dom"

function Error(){
    return(
        <main>
            <div id ="error">
                <span> Error</span>
                <p> Oups la page </p>

                <Link
                to ='/'
                aria-label=" retourner a la page d'accueil">
                    retour a la page d'accueil
                
                </Link>

            </div>
        </main>
    )
}
export default Error