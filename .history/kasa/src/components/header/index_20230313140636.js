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
                    className="nav-accu" 

                    aria-label="retour a l'accueil"
                    to = '/'>
                        accueil
                    </Link>
                    <Link

aria-label="retour à propos "
to = '/about'>
    a propos
</Link>
                    </nav>
                    </header>

    )

}
export default Header