import { getToPathname } from "@remix-run/router"
import { Link } from "react-router-dom"
import logo from "../../asssets/logo/LOGO.png"
function Header(){
    return (
        <header>
            <img src={logo} alt="logo kasa header"></img>
<nav>
                    <Link

                    aria-label="retour a l'accueil"
                    to = '/'>
                        accueil
                    </Link>
                    <Link

aria-label="retour a l'accueil"
to = '/'>
    accueil
</Link>
                    </nav>
                    </header>

    )

}
export default Header