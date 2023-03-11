import { Link } from "react-router-dom"

function Error(){
    return(
        <main>
            <div id ="error">
                <span> Error</span>

                <Link
                to ='/'
                aria-label=" retourner a la page d'accueil">
                    retour 
                
                </Link>

            </div>
        </main>
    )
}
export default Error