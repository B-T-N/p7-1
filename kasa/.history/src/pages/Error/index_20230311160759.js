import { Link } from "react-router-dom"

function Error(){
    return(
        <main>
            <div id ="error">
                <span> Error</span>

                <Link
                to ='/'
                aria-label=" retourn">
                
                </Link>

            </div>
        </main>
    )
}
export default Error