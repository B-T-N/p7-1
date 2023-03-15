import { getToPathname } from "@remix-run/router"
import { Link } from "react-router-dom"
import logo from "../../asssets/logo/LOGO.png"
function Header(){
    return (
        <header>
            <img src={logo} alt="logo kasa header"></img>
                    </header>
<nav>
                    <Link
                    a
                    to = '/'>
                        accueil
                    </Link>
                    </nav>

    )

}
export default Header