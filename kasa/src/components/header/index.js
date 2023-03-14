import { getToPathname } from "@remix-run/router"
import { Link } from "react-router-dom"
import logo from "../../asssets/logo/LOGO.png"
import "./header.css"

function Header(){
    return (
        <header>
            <img src={logo} alt="logo kasa header"></img>
<nav>
<Link
                    className="nav-about" 
 

aria-label="retour à propos "
to = '/about'>
A PROPOS </Link>
                    <Link
                    className="nav-accueil" 

                    aria-label="retour a l'accueil"
                    to = '/'>
                        ACCUEIL
                    </Link>
    
                    </nav>
                    </header>

    )

}
export default Header